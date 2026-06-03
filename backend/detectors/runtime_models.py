from __future__ import annotations

from pydantic import BaseModel


class RuntimeEvent(BaseModel):
    tool_name: str
    category: str
    asset_id: str | None = None
    root_asset_id: str | None = None
    parent_asset_id: str | None = None
    width: int | None = None
    height: int | None = None
    payload_chars: int = 0
    note: str | None = None
