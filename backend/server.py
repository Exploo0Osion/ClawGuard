from __future__ import annotations

from http.server import ThreadingHTTPServer

try:
    from .app_config import resolve_server_config
    from .http_server import build_handler
except ImportError:
    from app_config import resolve_server_config
    from http_server import build_handler


def main() -> None:
    config = resolve_server_config(open_browser_default=False)
    server = ThreadingHTTPServer((config.host, config.port), build_handler())
    print(f"ClawGuard backend listening on http://{config.host}:{config.port}")
    try:
        server.serve_forever()
    except KeyboardInterrupt:
        pass
    finally:
        server.server_close()


if __name__ == "__main__":
    main()
