from __future__ import annotations

import ast
from dataclasses import dataclass, field
from pathlib import Path
from typing import Any, Iterable

from tree_sitter import Language, Node, Parser, Query, QueryCursor
import tree_sitter_c
import tree_sitter_cpp

from agentdojo.static_analysis.analyzers.python_analyzer import PythonAnalyzer
from agentdojo.static_analysis.models import Function, Value, ValueLabel


SKIP_DIR_NAMES = {
    ".git",
    ".hg",
    ".idea",
    ".mypy_cache",
    ".pytest_cache",
    ".ruff_cache",
    ".venv",
    "__pycache__",
    "build",
    "dist",
    "node_modules",
}

PYTHON_SUFFIXES = {".py"}
C_SUFFIXES = {".c", ".h"}
CPP_SUFFIXES = {".cc", ".cpp", ".cxx", ".hh", ".hpp", ".hxx"}
SCRIPT_CODE_SUFFIXES = {".js", ".mjs", ".cjs", ".jsx", ".ts", ".tsx", ".sh", ".ps1", ".bat"}

C_LANGUAGE = Language(tree_sitter_c.language())
CPP_LANGUAGE = Language(tree_sitter_cpp.language())


@dataclass(frozen=True)
class CallEdge:
    caller_id: int
    callee_id: int


@dataclass(frozen=True)
class ReturnBinding:
    caller_id: int
    callee_id: int
    assigned_name: str
    line_number: int


@dataclass
class RepositoryIndex:
    root: Path
    functions: dict[int, Function]
    file_paths: list[str]
    file_sources: dict[str, str]
    caller_to_callees: dict[int, set[int]] = field(default_factory=dict)
    callee_to_callers: dict[int, set[int]] = field(default_factory=dict)
    return_bindings: dict[int, list[ReturnBinding]] = field(default_factory=dict)
    python_analyzer: PythonAnalyzer | None = None

    def get_function(self, function_id: int) -> Function:
        return self.functions[function_id]

    def get_function_by_name(self, function_name: str) -> list[Function]:
        return [function for function in self.functions.values() if function.function_name == function_name]

    def get_callers(self, function_id: int) -> list[Function]:
        return [self.functions[caller_id] for caller_id in sorted(self.callee_to_callers.get(function_id, set()))]

    def get_callees(self, function_id: int) -> list[Function]:
        return [self.functions[callee_id] for callee_id in sorted(self.caller_to_callees.get(function_id, set()))]

    def get_return_bindings(self, callee_id: int) -> list[ReturnBinding]:
        return list(self.return_bindings.get(callee_id, []))

    def get_function_at_line(self, file_path: str, line_number: int) -> Function | None:
        matched = [
            function
            for function in self.functions.values()
            if function.file_path == file_path and function.start_line_number <= line_number <= function.end_line_number
        ]
        if not matched:
            return None
        return min(matched, key=lambda function: function.end_line_number - function.start_line_number)

    def check_control_order(self, function_id: int, src_line_number: int, sink_line_number: int) -> bool:
        function = self.functions[function_id]
        if function.language_name == "Python" and self.python_analyzer is not None:
            return self.python_analyzer.check_control_order(function, src_line_number, sink_line_number)
        return src_line_number <= sink_line_number

    @property
    def language_names(self) -> list[str]:
        return sorted({function.language_name for function in self.functions.values()})


def _iter_code_files(root: Path) -> Iterable[Path]:
    supported_suffixes = PYTHON_SUFFIXES | C_SUFFIXES | CPP_SUFFIXES | SCRIPT_CODE_SUFFIXES
    for path in root.rglob("*"):
        if not path.is_file():
            continue
        if any(part in SKIP_DIR_NAMES for part in path.parts):
            continue
        if path.suffix.lower() in supported_suffixes:
            yield path


def _read_repository_sources(root: Path) -> dict[str, str]:
    file_map: dict[str, str] = {}
    for path in _iter_code_files(root):
        try:
            text = path.read_text(encoding="utf-8")
        except UnicodeDecodeError:
            text = path.read_text(encoding="utf-8", errors="ignore")
        file_map[str(path.relative_to(root))] = text.lstrip("\ufeff")
    return file_map


def _annotate_parents(tree: ast.AST) -> None:
    for parent in ast.walk(tree):
        for child in ast.iter_child_nodes(parent):
            setattr(child, "_repoaudit_parent", parent)


def _build_parser(language: Language) -> Parser:
    return Parser(language)


def _capture_text(source_bytes: bytes, node: Node) -> str:
    return source_bytes[node.start_byte : node.end_byte].decode("utf-8", errors="ignore")


def _query_matches(language: Language, root_node: Node, pattern: str):
    query = Query(language, pattern)
    cursor = QueryCursor(query)
    return cursor.matches(root_node)


def _find_first_identifier(node: Node, source_bytes: bytes) -> str | None:
    if node.type in {"identifier", "field_identifier", "type_identifier"}:
        return _capture_text(source_bytes, node)
    for child in node.children:
        result = _find_first_identifier(child, source_bytes)
        if result is not None:
            return result
    return None


def _find_parameter_names(node: Node, source_bytes: bytes) -> list[str]:
    names: list[str] = []
    stack = [node]
    while stack:
        current = stack.pop()
        if current.type == "parameter_declaration":
            identifier = _find_first_identifier(current, source_bytes)
            if identifier is not None:
                names.append(identifier)
            continue
        stack.extend(reversed(current.children))
    return names


def _extract_call_targets_and_bindings(
    function_node: Node, source_bytes: bytes
) -> tuple[list[tuple[str, int]], list[tuple[str, int, str]]]:
    call_targets: list[tuple[str, int]] = []
    return_bindings: list[tuple[str, int, str]] = []
    stack = [function_node]
    while stack:
        current = stack.pop()
        if current.type == "call_expression":
            callee_name = _find_first_identifier(current.child_by_field_name("function") or current, source_bytes)
            if callee_name is not None:
                call_targets.append((callee_name, current.start_point[0] + 1))
            parent = current.parent
            if parent is not None and parent.type == "assignment_expression":
                lhs = parent.child_by_field_name("left")
                if lhs is not None:
                    assigned_name = _find_first_identifier(lhs, source_bytes)
                    if assigned_name is not None and callee_name is not None:
                        return_bindings.append((assigned_name, current.start_point[0] + 1, callee_name))
            if parent is not None and parent.type == "init_declarator":
                declarator = parent.child_by_field_name("declarator")
                assigned_name = _find_first_identifier(declarator, source_bytes) if declarator is not None else None
                if assigned_name is not None and callee_name is not None:
                    return_bindings.append((assigned_name, current.start_point[0] + 1, callee_name))
        stack.extend(reversed(current.children))
    return call_targets, return_bindings


def _parse_python_files(code_in_files: dict[str, str]) -> tuple[dict[int, Function], dict[int, set[int]], dict[int, list[ReturnBinding]], PythonAnalyzer | None]:
    python_files = {file_path: source for file_path, source in code_in_files.items() if Path(file_path).suffix.lower() in PYTHON_SUFFIXES}
    if not python_files:
        return {}, {}, {}, None

    analyzer = PythonAnalyzer(python_files)
    analysis = analyzer.build_result()
    for function in analysis.functions.values():
        _annotate_parents(function.parse_tree_root_node)
        function.language_name = "Python"

    caller_to_callees = {caller_id: set(callee_ids) for caller_id, callee_ids in analyzer.function_caller_callee_map.items()}
    return_bindings: dict[int, list[ReturnBinding]] = {}
    for caller in analysis.functions.values():
        for call in caller.function_call_site_nodes:
            callee_name = analyzer.get_callee_name_at_call_site(call, python_files[caller.file_path])
            matching_callees = [function for function in analysis.functions.values() if function.function_name == callee_name]
            if not matching_callees:
                continue
            parent = get_parent(call)
            assigned_name = None
            if isinstance(parent, ast.Assign):
                for target in parent.targets:
                    if isinstance(target, ast.Name):
                        assigned_name = target.id
                        break
            elif isinstance(parent, ast.NamedExpr) and isinstance(parent.target, ast.Name):
                assigned_name = parent.target.id
            if assigned_name is None:
                continue
            for callee in matching_callees:
                return_bindings.setdefault(callee.function_id, []).append(
                    ReturnBinding(
                        caller_id=caller.function_id,
                        callee_id=callee.function_id,
                        assigned_name=assigned_name,
                        line_number=call.lineno,
                    )
                )
    return analysis.functions, caller_to_callees, return_bindings, analyzer


def _parse_c_family_files(
    code_in_files: dict[str, str],
    *,
    starting_function_id: int,
) -> tuple[dict[int, Function], dict[int, set[int]], dict[int, list[ReturnBinding]]]:
    functions: dict[int, Function] = {}
    caller_to_callees: dict[int, set[int]] = {}
    return_bindings: dict[int, list[ReturnBinding]] = {}
    function_name_to_ids: dict[str, list[int]] = {}
    pending_calls: dict[int, list[tuple[str, int]]] = {}
    pending_return_bindings: dict[int, list[tuple[str, int, str]]] = {}
    next_function_id = starting_function_id

    for file_path, source in code_in_files.items():
        suffix = Path(file_path).suffix.lower()
        if suffix in C_SUFFIXES:
            language = C_LANGUAGE
            language_name = "C"
        elif suffix in CPP_SUFFIXES:
            language = CPP_LANGUAGE
            language_name = "C++"
        else:
            continue

        parser = _build_parser(language)
        source_bytes = source.encode("utf-8")
        root = parser.parse(source_bytes).root_node
        matches = _query_matches(
            language,
            root,
            """
            (function_definition
              declarator: (_) @declarator
              body: (compound_statement) @body) @function
            """,
        )
        for _, captures in matches:
            for function_node in captures.get("function", []):
                declarator_node = captures.get("declarator", [None])[0]
                if declarator_node is None:
                    continue
                function_name = _find_first_identifier(declarator_node, source_bytes)
                if function_name is None:
                    continue
                start_line = function_node.start_point[0] + 1
                end_line = function_node.end_point[0] + 1
                function_code = _capture_text(source_bytes, function_node)
                parameter_names = _find_parameter_names(declarator_node, source_bytes)
                function_id = next_function_id
                next_function_id += 1
                functions[function_id] = Function(
                    function_id=function_id,
                    function_name=function_name,
                    function_code=function_code,
                    start_line_number=start_line,
                    end_line_number=end_line,
                    parse_tree_root_node=function_node,
                    file_path=file_path,
                    language_name=language_name,
                    paras={
                        Value(
                            name=parameter_name,
                            line_number=start_line,
                            label=ValueLabel.PARA,
                            file=file_path,
                            index=index,
                        )
                        for index, parameter_name in enumerate(parameter_names)
                    },
                )
                function_name_to_ids.setdefault(function_name, []).append(function_id)
                call_targets, local_return_bindings = _extract_call_targets_and_bindings(function_node, source_bytes)
                pending_calls[function_id] = call_targets
                pending_return_bindings[function_id] = list(local_return_bindings)

    for caller_id, call_targets in pending_calls.items():
        for callee_name, line_number in call_targets:
            for callee_id in function_name_to_ids.get(callee_name, []):
                caller_to_callees.setdefault(caller_id, set()).add(callee_id)
                for assigned_name, binding_line_number, binding_callee_name in pending_return_bindings.get(caller_id, []):
                    if binding_line_number == line_number and binding_callee_name == callee_name:
                        return_bindings.setdefault(callee_id, []).append(
                            ReturnBinding(
                                caller_id=caller_id,
                                callee_id=callee_id,
                                assigned_name=assigned_name,
                                line_number=line_number,
                            )
                        )
    return functions, caller_to_callees, return_bindings


def _script_language_name(file_path: str) -> str:
    suffix = Path(file_path).suffix.lower()
    if suffix in {".js", ".mjs", ".cjs", ".jsx"}:
        return "JavaScript"
    if suffix in {".ts", ".tsx"}:
        return "TypeScript"
    if suffix == ".sh":
        return "Shell"
    if suffix == ".ps1":
        return "PowerShell"
    if suffix == ".bat":
        return "Batch"
    return "Script"


def _parse_script_like_files(
    code_in_files: dict[str, str],
    *,
    starting_function_id: int,
) -> tuple[dict[int, Function], dict[int, set[int]], dict[int, list[ReturnBinding]]]:
    functions: dict[int, Function] = {}
    next_function_id = starting_function_id
    for file_path, source in code_in_files.items():
        suffix = Path(file_path).suffix.lower()
        if suffix not in SCRIPT_CODE_SUFFIXES:
            continue
        line_count = max(1, len(source.splitlines()) or 1)
        function_id = next_function_id
        next_function_id += 1
        functions[function_id] = Function(
            function_id=function_id,
            function_name=Path(file_path).stem,
            function_code=source,
            start_line_number=1,
            end_line_number=line_count,
            parse_tree_root_node=None,
            file_path=file_path,
            language_name=_script_language_name(file_path),
            paras=set(),
        )
    return functions, {}, {}


def _merge_caller_maps(*maps: dict[int, set[int]]) -> dict[int, set[int]]:
    merged: dict[int, set[int]] = {}
    for mapping in maps:
        for caller_id, callee_ids in mapping.items():
            merged.setdefault(caller_id, set()).update(callee_ids)
    return merged


def _build_callee_map(caller_to_callees: dict[int, set[int]]) -> dict[int, set[int]]:
    callee_to_callers: dict[int, set[int]] = {}
    for caller_id, callee_ids in caller_to_callees.items():
        for callee_id in callee_ids:
            callee_to_callers.setdefault(callee_id, set()).add(caller_id)
    return callee_to_callers


def _merge_return_bindings(*maps: dict[int, list[ReturnBinding]]) -> dict[int, list[ReturnBinding]]:
    merged: dict[int, list[ReturnBinding]] = {}
    for mapping in maps:
        for callee_id, bindings in mapping.items():
            merged.setdefault(callee_id, []).extend(bindings)
    return merged


def build_repository_index(root: str | Path) -> RepositoryIndex:
    repository_root = Path(root).resolve()
    code_in_files = _read_repository_sources(repository_root)
    python_functions, python_calls, python_return_bindings, python_analyzer = _parse_python_files(code_in_files)
    c_functions, c_calls, c_return_bindings = _parse_c_family_files(
        code_in_files,
        starting_function_id=(max(python_functions) + 1) if python_functions else 1,
    )
    script_functions, script_calls, script_return_bindings = _parse_script_like_files(
        code_in_files,
        starting_function_id=(max({*python_functions.keys(), *c_functions.keys()}) + 1) if (python_functions or c_functions) else 1,
    )
    functions = {**python_functions, **c_functions, **script_functions}
    caller_to_callees = _merge_caller_maps(python_calls, c_calls, script_calls)
    return_bindings = _merge_return_bindings(python_return_bindings, c_return_bindings, script_return_bindings)
    return RepositoryIndex(
        root=repository_root,
        functions=functions,
        file_paths=sorted(code_in_files),
        file_sources=code_in_files,
        caller_to_callees=caller_to_callees,
        callee_to_callers=_build_callee_map(caller_to_callees),
        return_bindings=return_bindings,
        python_analyzer=python_analyzer,
    )


def get_parent(node: ast.AST) -> ast.AST | None:
    return getattr(node, "_repoaudit_parent", None)


def get_parameter_by_index(function: Function, index: int) -> Value | None:
    ordered = sorted(function.paras or set(), key=lambda value: value.index)
    if 0 <= index < len(ordered):
        return ordered[index]
    return None
