"""API model for the code-level analyzer layer."""

from __future__ import annotations

from dataclasses import dataclass


@dataclass(frozen=True)
class API:
    """Structured representation of an external or library call target.

    This model belongs to the repository code-audit analysis layer.
    """

    api_id: int
    api_name: str
    api_para_num: int

    def __str__(self) -> str:
        return (
            f"API(api_id={self.api_id}, api_name='{self.api_name}', "
            f"api_para_num={self.api_para_num})"
        )

    def __eq__(self, other: object) -> bool:
        if not isinstance(other, API):
            return NotImplemented
        return (
            self.api_name == other.api_name
            and self.api_para_num == other.api_para_num
        )

    def __hash__(self) -> int:
        return hash((self.api_name, self.api_para_num))
