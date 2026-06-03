from __future__ import annotations

import json
import mimetypes
from http.server import BaseHTTPRequestHandler
from pathlib import Path
from urllib.parse import parse_qs, unquote, urlparse

try:
    from .api_app import handle_api_get, handle_api_post
except ImportError:
    from api_app import handle_api_get, handle_api_post


def build_handler(*, static_root: Path | None = None) -> type[BaseHTTPRequestHandler]:
    class ClawGuardHandler(BaseHTTPRequestHandler):
        def log_message(self, format: str, *args) -> None:
            return

        def do_OPTIONS(self) -> None:
            self.send_response(204)
            self._send_common_headers("application/json; charset=utf-8")
            self.end_headers()

        def do_GET(self) -> None:
            parsed = urlparse(self.path)
            if static_root is not None and not parsed.path.startswith("/api"):
                self._handle_static(parsed.path)
                return

            payload, status = handle_api_get(parsed.path, parse_qs(parsed.query))
            self._send_json(payload, status=status)

        def do_POST(self) -> None:
            try:
                length = int(self.headers.get("Content-Length", "0"))
            except ValueError:
                length = 0

            raw = self.rfile.read(length) if length > 0 else b""
            try:
                payload = json.loads(raw.decode("utf-8") if raw else "{}")
            except json.JSONDecodeError:
                self._send_json({"error": "Invalid JSON payload"}, status=400)
                return

            if not isinstance(payload, dict):
                self._send_json({"error": "Invalid JSON payload"}, status=400)
                return

            result, status = handle_api_post(urlparse(self.path).path, payload)
            self._send_json(result, status=status)

        def _handle_static(self, path: str) -> None:
            if static_root is None or not static_root.exists():
                self._send_plain_text("Frontend dist is missing. Run `npm run build` first, then restart.", status=500)
                return

            normalized = unquote(path).lstrip("/")
            if not normalized:
                normalized = "index.html"

            candidate = (static_root / normalized).resolve()
            try:
                candidate.relative_to(static_root.resolve())
            except ValueError:
                self._send_plain_text("Forbidden", status=403)
                return

            if not candidate.exists() or candidate.is_dir():
                candidate = static_root / "index.html"

            if not candidate.exists():
                self._send_plain_text("index.html not found", status=500)
                return

            content_type, _encoding = mimetypes.guess_type(str(candidate))
            body = candidate.read_bytes()
            self.send_response(200)
            self._send_common_headers(content_type or "application/octet-stream")
            self.send_header("Content-Length", str(len(body)))
            self.end_headers()
            self._write_body(body)

        def _send_json(self, payload: dict, status: int = 200) -> None:
            body = json.dumps(payload, ensure_ascii=False).encode("utf-8")
            self.send_response(status)
            self._send_common_headers("application/json; charset=utf-8")
            self.send_header("Content-Length", str(len(body)))
            self.end_headers()
            self._write_body(body)

        def _send_plain_text(self, text: str, status: int = 200) -> None:
            body = text.encode("utf-8")
            self.send_response(status)
            self._send_common_headers("text/plain; charset=utf-8")
            self.send_header("Content-Length", str(len(body)))
            self.end_headers()
            self._write_body(body)

        def _send_common_headers(self, content_type: str) -> None:
            self.send_header("Content-Type", content_type)
            self.send_header("Access-Control-Allow-Origin", "*")
            self.send_header("Access-Control-Allow-Methods", "GET, POST, OPTIONS")
            self.send_header("Access-Control-Allow-Headers", "Content-Type")

        def _write_body(self, body: bytes) -> None:
            try:
                self.wfile.write(body)
            except (BrokenPipeError, ConnectionAbortedError, ConnectionResetError, OSError):
                return

    return ClawGuardHandler
