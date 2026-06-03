"""Function model for the code-level analyzer layer."""

from __future__ import annotations

import ast
from dataclasses import dataclass, field
from typing import Any

from agentdojo.static_analysis.models.value import Value

LineScope = tuple[int, int]
IfInfo = tuple[int, int, str, LineScope, LineScope]
LoopInfo = tuple[int, int, str, int, int]


@dataclass
class Function:
    """Structured representation of a user-defined function or method.

    This model belongs to the repository code-audit analysis layer.
    """

    function_id: int
    function_name: str
    function_code: str
    start_line_number: int
    end_line_number: int
    parse_tree_root_node: Any
    file_path: str
    language_name: str = "Python"
    function_call_site_nodes: list[ast.Call] = field(default_factory=list)
    api_call_site_nodes: list[ast.Call] = field(default_factory=list)
    paras: set[Value] | None = None
    retvals: set[Value] | None = None
    if_statements: dict[LineScope, IfInfo] = field(default_factory=dict)
    loop_statements: dict[LineScope, LoopInfo] = field(default_factory=dict)

    def __hash__(self) -> int:
        return hash(
            (
                self.function_name,
                self.function_code,
                self.file_path,
                self.start_line_number,
                self.end_line_number,
            )
        )

    def file_line2function_line(self, file_line: int) -> int:
        return file_line - self.start_line_number + 1

    def attach_relative_line_number(self) -> str:
        lined_code = ""
        function_content = "1. " + self.function_code
        line_no = 2
        for char in function_content:
            if char == "\n":
                lined_code += "\n" + str(line_no) + ". "
                line_no += 1
            else:
                lined_code += char
        return lined_code

    def attach_absolute_line_number(self) -> str:
        lined_code = ""
        function_content = str(self.start_line_number) + ". " + self.function_code
        line_no = self.start_line_number + 1
        for char in function_content:
            if char == "\n":
                lined_code += "\n" + str(line_no) + ". "
                line_no += 1
            else:
                lined_code += char
        return lined_code

    @property
    def lined_code(self) -> str:
        return self.attach_relative_line_number()

    def to_dict(self) -> dict[str, Any]:
        return {
            "function_id": self.function_id,
            "function_name": self.function_name,
            "file_path": self.file_path,
            "start_line_number": self.start_line_number,
            "end_line_number": self.end_line_number,
            "parameters": [str(para) for para in sorted(self.paras or set(), key=lambda value: value.index)],
            "return_values": [str(ret) for ret in sorted(self.retvals or set(), key=lambda value: value.index)],
            "function_call_sites": len(self.function_call_site_nodes),
            "api_call_sites": len(self.api_call_site_nodes),
        }
