from __future__ import annotations

import sys
import threading
import webbrowser
from http.server import ThreadingHTTPServer
from pathlib import Path


def bundle_root() -> Path:
    if hasattr(sys, "_MEIPASS"):
        return Path(getattr(sys, "_MEIPASS"))
    return Path(__file__).resolve().parent


def resolve_web_root(project_root: Path, bundle_dir: Path) -> Path:
    bundled_dist = bundle_dir / "dist"
    if bundled_dist.exists():
        return bundled_dist
    return project_root / "dist"


def ensure_packaged_xml_support() -> None:
    import pyexpat
    import xml.etree.ElementTree

    _ = (pyexpat, xml.etree.ElementTree)


PROJECT_ROOT = Path(__file__).resolve().parent
BUNDLE_ROOT = bundle_root()
WEB_ROOT = resolve_web_root(PROJECT_ROOT, BUNDLE_ROOT)

if str(PROJECT_ROOT) not in sys.path:
    sys.path.insert(0, str(PROJECT_ROOT))

ensure_packaged_xml_support()

from backend.app_config import resolve_server_config
from backend.http_server import build_handler


def open_browser_when_ready(url: str, enabled: bool) -> None:
    if not enabled:
        return
    try:
        webbrowser.open(url)
    except Exception:
        return


def main() -> None:
    config = resolve_server_config(open_browser_default=True)
    handler = build_handler(static_root=WEB_ROOT)
    server = ThreadingHTTPServer((config.host, config.port), handler)
    display_host = "127.0.0.1" if config.host == "0.0.0.0" else config.host
    url = f"http://{display_host}:{config.port}"
    print(f"ClawGuard launcher listening on {url}")
    threading.Timer(0.3, open_browser_when_ready, args=(url, config.open_browser)).start()
    try:
        server.serve_forever()
    except KeyboardInterrupt:
        pass
    finally:
        server.server_close()


if __name__ == "__main__":
    main()
