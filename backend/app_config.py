from __future__ import annotations

import os
from dataclasses import dataclass


@dataclass(frozen=True)
class ServerConfig:
    host: str
    port: int
    open_browser: bool


def is_truthy(value: str | None) -> bool:
    return (value or "").strip().lower() in {"1", "true", "yes", "on"}


def resolve_server_config(*, open_browser_default: bool) -> ServerConfig:
    host = os.environ.get("CLAWGUARD_HOST") or ("0.0.0.0" if is_truthy(os.environ.get("CLAWGUARD_EXPOSE")) else "127.0.0.1")
    port = int(os.environ.get("CLAWGUARD_PORT", "8123"))
    open_browser = open_browser_default and not is_truthy(os.environ.get("CLAWGUARD_NO_BROWSER"))
    return ServerConfig(host=host, port=port, open_browser=open_browser)
