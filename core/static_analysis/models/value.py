"""Value model for the code-level analyzer layer."""

from __future__ import annotations

import re
from dataclasses import dataclass
from enum import Enum


class ValueLabel(Enum):
    SRC = 1
    SINK = 2
    PARA = 3
    RET = 4
    ARG = 5
    OUT = 6
    BUF_ACCESS_EXPR = 7
    NON_BUF_ACCESS_EXPR = 8
    LOCAL = 9
    GLOBAL = 10

    def __str__(self) -> str:
        return f"ValueLabel.{self.name}"

    @staticmethod
    def from_str(value: str) -> "ValueLabel":
        normalized = value.removeprefix("ValueLabel.")
        return ValueLabel[normalized]


@dataclass(frozen=True)
class Value:
    """Structured representation of a syntactic value observed during static analysis.

    This model belongs to the repository code-audit analysis layer.
    """

    name: str
    line_number: int
    label: ValueLabel
    file: str
    index: int = -1

    def __str__(self) -> str:
        return (
            "("
            + "("
            + self.name
            + ", "
            + str(self.file)
            + ", "
            + str(self.line_number)
            + ", "
            + str(self.index)
            + ")"
            + ", "
            + str(self.label)
            + ")"
        )

    @classmethod
    def from_str_to_value(cls, value: str) -> "Value":
        pattern = (
            r"^\(\(\s*(?P<name>[^,]+),\s*(?P<file>[^,]+),\s*(?P<line_number>\d+),\s*"
            r"(?P<index>-?\d+)\s*\),\s*(?P<label>[^)]+)\)$"
        )
        match = re.match(pattern, value)
        if not match:
            raise ValueError(f"String does not match expected format: {value}")

        return cls(
            name=match.group("name").strip(),
            file=match.group("file").strip(),
            line_number=int(match.group("line_number")),
            index=int(match.group("index")),
            label=ValueLabel.from_str(match.group("label").strip()),
        )
