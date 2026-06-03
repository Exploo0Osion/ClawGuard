from __future__ import annotations

from dataclasses import dataclass
from pathlib import Path
import re

from tree_sitter import Language, Node, Parser, Query, QueryCursor
import tree_sitter_c
import tree_sitter_cpp
import tree_sitter_python

from agentdojo.static_analysis.repoaudit.bug_definitions import BugDefinition
from agentdojo.static_analysis.repoaudit.parser import RepositoryIndex
from agentdojo.static_analysis.repoaudit.schema import CodeLocation, SourceValue


PY_LANGUAGE = Language(tree_sitter_python.language())
C_LANGUAGE = Language(tree_sitter_c.language())
CPP_LANGUAGE = Language(tree_sitter_cpp.language())

PY_ALLOCATOR_NAMES = {"open", "socket", "TemporaryFile", "NamedTemporaryFile"}
C_ALLOCATOR_NAMES = {"malloc", "calloc", "realloc", "strdup", "fopen", "socket", "new"}
C_RELEASE_NAMES = {"free", "fclose", "close", "delete"}
SCRIPT_SUFFIXES = {".js", ".mjs", ".cjs", ".jsx", ".ts", ".tsx", ".sh", ".ps1", ".bat"}

SECRET_FILE_HINTS = (".env", "credentials.json", "credential", "token", "secret", "api_key", "apikey", "passwd", "password")
SECRET_ENV_HINTS = ("TOKEN", "SECRET", "PASSWORD", "PASSWD", "API_KEY", "AUTH", "BEARER")
DOWNLOAD_HINTS = ("curl", "wget", "fetch(", "requests.get", "requests.post", "axios.get", "axios.post", "invoke-webrequest", "invoke-restmethod", "downloadstring", "download_url", "http://", "https://")

PY_SECRET_ASSIGN_RE = re.compile(
    r"(?P<var>[A-Za-z_][A-Za-z0-9_]*)\s*=\s*(?:os\.environ(?:\.get)?\(|os\.getenv\(|dotenv_values\(|json\.load\(|open\([^)]*(?:\.env|credentials|token|secret)|Path\([^)]*(?:\.env|credentials|token|secret))",
    re.IGNORECASE,
)
JS_SECRET_ASSIGN_RE = re.compile(
    r"(?:const|let|var)\s+(?P<var>[A-Za-z_][A-Za-z0-9_]*)\s*=\s*(?:process\.env|.*readFile.*(?:\.env|credentials|token|secret)|.*fs\..*readFile.*(?:\.env|credentials|token|secret))",
    re.IGNORECASE,
)
SHELL_SECRET_ASSIGN_RE = re.compile(
    r"(?P<var>[A-Za-z_][A-Za-z0-9_]*)\s*=\s*\$\((?:cat|grep|sed).*(?:\.env|credentials|token|secret)",
    re.IGNORECASE,
)
PY_DOWNLOAD_ASSIGN_RE = re.compile(
    r"(?P<var>[A-Za-z_][A-Za-z0-9_]*)\s*=\s*(?:requests\.(?:get|post)\(|urllib\.request\.urlopen\(|httpx\.(?:get|post)\()",
    re.IGNORECASE,
)
JS_DOWNLOAD_ASSIGN_RE = re.compile(
    r"(?:const|let|var)\s+(?P<var>[A-Za-z_][A-Za-z0-9_]*)\s*=\s*(?:await\s+)?(?:fetch\(|axios\.(?:get|post)\()",
    re.IGNORECASE,
)


@dataclass(frozen=True)
class _TreeSitterSourceMatch:
    file_path: str
    variable_name: str
    line_number: int
    reason: str


def _build_parser(language: Language) -> Parser:
    return Parser(language)


def _capture_text(source_bytes: bytes, node: Node) -> str:
    return source_bytes[node.start_byte : node.end_byte].decode("utf-8", errors="ignore")


def _query_matches(language: Language, root_node: Node, pattern: str):
    query = Query(language, pattern)
    cursor = QueryCursor(query)
    return cursor.matches(root_node)


def _dedupe_matches(matches: list[_TreeSitterSourceMatch]) -> list[_TreeSitterSourceMatch]:
    seen = set()
    result = []
    for match in matches:
        key = (match.file_path, match.variable_name, match.line_number, match.reason)
        if key in seen:
            continue
        seen.add(key)
        result.append(match)
    return result


def _select_language_and_parser(file_path: str) -> tuple[str, Language, Parser] | None:
    suffix = Path(file_path).suffix.lower()
    if suffix == ".py":
        return "Python", PY_LANGUAGE, _build_parser(PY_LANGUAGE)
    if suffix in {".c", ".h"}:
        return "C", C_LANGUAGE, _build_parser(C_LANGUAGE)
    if suffix in {".cc", ".cpp", ".cxx", ".hh", ".hpp", ".hxx"}:
        return "C++", CPP_LANGUAGE, _build_parser(CPP_LANGUAGE)
    return None


def _find_first_identifier(node: Node, source_bytes: bytes) -> str | None:
    if node.type in {"identifier", "field_identifier"}:
        return _capture_text(source_bytes, node)
    for child in node.children:
        found = _find_first_identifier(child, source_bytes)
        if found is not None:
            return found
    return None


def _iter_nodes(root: Node):
    stack = [root]
    while stack:
        current = stack.pop()
        yield current
        stack.extend(reversed(current.children))


class TreeSitterSourceMatcher:
    def __init__(self) -> None:
        self.python_parser = _build_parser(PY_LANGUAGE)

    def match_npd_sources(self, index: RepositoryIndex) -> list[_TreeSitterSourceMatch]:
        return _dedupe_matches(self._match_python_npd(index) + self._match_cfamily_npd(index))

    def match_mlk_sources(self, index: RepositoryIndex) -> list[_TreeSitterSourceMatch]:
        return _dedupe_matches(self._match_python_mlk(index) + self._match_cfamily_mlk(index))

    def match_uaf_sources(self, index: RepositoryIndex) -> list[_TreeSitterSourceMatch]:
        return _dedupe_matches(self._match_python_uaf(index) + self._match_cfamily_uaf(index))

    def match_secret_exfil_sources(self, index: RepositoryIndex) -> list[_TreeSitterSourceMatch]:
        return _dedupe_matches(self._match_secret_exfil(index))

    def match_download_exec_sources(self, index: RepositoryIndex) -> list[_TreeSitterSourceMatch]:
        return _dedupe_matches(self._match_download_exec(index))

    def _match_python_npd(self, index: RepositoryIndex) -> list[_TreeSitterSourceMatch]:
        pattern = """
        (assignment
          left: (identifier) @target
          right: (none) @none)
        """
        matches: list[_TreeSitterSourceMatch] = []
        for file_path, source in index.file_sources.items():
            if Path(file_path).suffix.lower() != ".py":
                continue
            source_bytes = source.encode("utf-8")
            root = self.python_parser.parse(source_bytes).root_node
            for _, captures in _query_matches(PY_LANGUAGE, root, pattern):
                for target_node in captures.get("target", []):
                    matches.append(
                        _TreeSitterSourceMatch(
                            file_path=file_path,
                            variable_name=_capture_text(source_bytes, target_node),
                            line_number=target_node.start_point[0] + 1,
                            reason="null literal assignment",
                        )
                    )
        return matches

    def _match_python_mlk(self, index: RepositoryIndex) -> list[_TreeSitterSourceMatch]:
        pattern = """
        (assignment
          left: (identifier) @target
          right: (call
            function: [
              (identifier) @callee
              (attribute attribute: (identifier) @callee)
            ]))
        """
        matches: list[_TreeSitterSourceMatch] = []
        for file_path, source in index.file_sources.items():
            if Path(file_path).suffix.lower() != ".py":
                continue
            source_bytes = source.encode("utf-8")
            root = self.python_parser.parse(source_bytes).root_node
            for _, captures in _query_matches(PY_LANGUAGE, root, pattern):
                callees = [_capture_text(source_bytes, node) for node in captures.get("callee", [])]
                if not any(callee in PY_ALLOCATOR_NAMES for callee in callees):
                    continue
                for target_node in captures.get("target", []):
                    matches.append(
                        _TreeSitterSourceMatch(
                            file_path=file_path,
                            variable_name=_capture_text(source_bytes, target_node),
                            line_number=target_node.start_point[0] + 1,
                            reason="resource allocation",
                        )
                    )
        return matches

    def _match_python_uaf(self, index: RepositoryIndex) -> list[_TreeSitterSourceMatch]:
        direct_pattern = """
        (call
          function: (attribute
            object: (identifier) @target
            attribute: (identifier) @callee))
        """
        free_pattern = """
        (call
          function: (identifier) @callee
          arguments: (argument_list (identifier) @target))
        """
        matches: list[_TreeSitterSourceMatch] = []
        for file_path, source in index.file_sources.items():
            if Path(file_path).suffix.lower() != ".py":
                continue
            source_bytes = source.encode("utf-8")
            root = self.python_parser.parse(source_bytes).root_node
            for pattern in (direct_pattern, free_pattern):
                for _, captures in _query_matches(PY_LANGUAGE, root, pattern):
                    callees = [_capture_text(source_bytes, node) for node in captures.get("callee", [])]
                    if "close" not in callees:
                        continue
                    for target_node in captures.get("target", []):
                        matches.append(
                            _TreeSitterSourceMatch(
                                file_path=file_path,
                                variable_name=_capture_text(source_bytes, target_node),
                                line_number=target_node.start_point[0] + 1,
                                reason="resource closed",
                            )
                        )
        return matches

    def _match_cfamily_npd(self, index: RepositoryIndex) -> list[_TreeSitterSourceMatch]:
        matches: list[_TreeSitterSourceMatch] = []
        for file_path, source in index.file_sources.items():
            selection = _select_language_and_parser(file_path)
            if selection is None or selection[0] == "Python":
                continue
            _, _, parser = selection
            source_bytes = source.encode("utf-8")
            root = parser.parse(source_bytes).root_node
            for node in _iter_nodes(root):
                if node.type == "init_declarator":
                    declarator = node.child_by_field_name("declarator")
                    value = node.child_by_field_name("value")
                    if declarator is None or value is None:
                        continue
                    variable_name = _find_first_identifier(declarator, source_bytes)
                    value_text = _capture_text(source_bytes, value).strip()
                    if variable_name is not None and value_text in {"NULL", "nullptr"}:
                        matches.append(
                            _TreeSitterSourceMatch(file_path, variable_name, node.start_point[0] + 1, "null literal assignment")
                        )
                if node.type == "assignment_expression":
                    left = node.child_by_field_name("left")
                    right = node.child_by_field_name("right")
                    if left is None or right is None:
                        continue
                    variable_name = _find_first_identifier(left, source_bytes)
                    value_text = _capture_text(source_bytes, right).strip()
                    if variable_name is not None and value_text in {"NULL", "nullptr"}:
                        matches.append(
                            _TreeSitterSourceMatch(file_path, variable_name, node.start_point[0] + 1, "null literal assignment")
                        )
        return matches

    def _match_cfamily_mlk(self, index: RepositoryIndex) -> list[_TreeSitterSourceMatch]:
        matches: list[_TreeSitterSourceMatch] = []
        for file_path, source in index.file_sources.items():
            selection = _select_language_and_parser(file_path)
            if selection is None or selection[0] == "Python":
                continue
            _, _, parser = selection
            source_bytes = source.encode("utf-8")
            root = parser.parse(source_bytes).root_node
            for node in _iter_nodes(root):
                if node.type not in {"init_declarator", "assignment_expression"}:
                    continue
                declarator = node.child_by_field_name("declarator") or node.child_by_field_name("left")
                value = node.child_by_field_name("value") or node.child_by_field_name("right")
                if declarator is None or value is None or value.type != "call_expression":
                    continue
                variable_name = _find_first_identifier(declarator, source_bytes)
                callee = _find_first_identifier(value.child_by_field_name("function") or value, source_bytes)
                if variable_name is not None and callee in C_ALLOCATOR_NAMES:
                    matches.append(
                        _TreeSitterSourceMatch(file_path, variable_name, node.start_point[0] + 1, "resource allocation")
                    )
        return matches

    def _match_cfamily_uaf(self, index: RepositoryIndex) -> list[_TreeSitterSourceMatch]:
        matches: list[_TreeSitterSourceMatch] = []
        for file_path, source in index.file_sources.items():
            selection = _select_language_and_parser(file_path)
            if selection is None or selection[0] == "Python":
                continue
            language_name, _, parser = selection
            source_bytes = source.encode("utf-8")
            root = parser.parse(source_bytes).root_node
            for node in _iter_nodes(root):
                if node.type == "call_expression":
                    callee = _find_first_identifier(node.child_by_field_name("function") or node, source_bytes)
                    if callee not in C_RELEASE_NAMES:
                        continue
                    argument_list = node.child_by_field_name("arguments")
                    if argument_list is None:
                        continue
                    variable_name = _find_first_identifier(argument_list, source_bytes)
                    if variable_name is not None:
                        matches.append(
                            _TreeSitterSourceMatch(file_path, variable_name, node.start_point[0] + 1, "resource released")
                        )
                if language_name == "C++" and node.type == "delete_expression":
                    variable_name = _find_first_identifier(node, source_bytes)
                    if variable_name is not None:
                        matches.append(
                            _TreeSitterSourceMatch(file_path, variable_name, node.start_point[0] + 1, "resource released")
                        )
        return matches

    def _match_secret_exfil(self, index: RepositoryIndex) -> list[_TreeSitterSourceMatch]:
        matches: list[_TreeSitterSourceMatch] = []
        for file_path, source in index.file_sources.items():
            suffix = Path(file_path).suffix.lower()
            if suffix not in {".py"} | SCRIPT_SUFFIXES:
                continue
            for line_number, raw_line in enumerate(source.splitlines(), start=1):
                line = raw_line.strip()
                lowered = line.lower()
                if not line:
                    continue
                variable_name = None
                reason = None
                if suffix == ".py":
                    match = PY_SECRET_ASSIGN_RE.search(line)
                    if match:
                        variable_name = match.group("var")
                        reason = "secret-bearing environment or credential read"
                elif suffix in {".js", ".mjs", ".cjs", ".jsx", ".ts", ".tsx"}:
                    match = JS_SECRET_ASSIGN_RE.search(line)
                    if match:
                        variable_name = match.group("var")
                        reason = "secret-bearing environment or credential read"
                elif suffix in {".sh", ".ps1", ".bat"}:
                    match = SHELL_SECRET_ASSIGN_RE.search(line)
                    if match:
                        variable_name = match.group("var")
                        reason = "secret-bearing local file read"
                if variable_name is None and ("process.env" in line or "os.environ" in line or "getenv(" in line):
                    variable_name = "secret_value"
                    reason = "direct environment secret access"
                if variable_name is None and any(hint in lowered for hint in SECRET_FILE_HINTS) and any(
                    token in lowered for token in ("readfile", "read_text", "open(", "cat ", "json.load", "load_dotenv", "dotenv_values")
                ):
                    variable_name = "secret_value"
                    reason = "local secret-bearing file access"
                if variable_name is None and any(secret_hint.lower() in line for secret_hint in SECRET_ENV_HINTS):
                    if "process.env" in line or "os.environ" in line or "getenv(" in line:
                        variable_name = "secret_value"
                        reason = "direct secret environment access"
                if variable_name is not None and reason is not None:
                    matches.append(
                        _TreeSitterSourceMatch(
                            file_path=file_path,
                            variable_name=variable_name,
                            line_number=line_number,
                            reason=reason,
                        )
                    )
        return matches

    def _match_download_exec(self, index: RepositoryIndex) -> list[_TreeSitterSourceMatch]:
        matches: list[_TreeSitterSourceMatch] = []
        for file_path, source in index.file_sources.items():
            suffix = Path(file_path).suffix.lower()
            if suffix not in {".py"} | SCRIPT_SUFFIXES:
                continue
            for line_number, raw_line in enumerate(source.splitlines(), start=1):
                line = raw_line.strip()
                lowered = line.lower()
                if not line:
                    continue
                variable_name = None
                reason = None
                if suffix == ".py":
                    match = PY_DOWNLOAD_ASSIGN_RE.search(line)
                    if match:
                        variable_name = match.group("var")
                        reason = "remote payload retrieval"
                elif suffix in {".js", ".mjs", ".cjs", ".jsx", ".ts", ".tsx"}:
                    match = JS_DOWNLOAD_ASSIGN_RE.search(line)
                    if match:
                        variable_name = match.group("var")
                        reason = "remote payload retrieval"
                if variable_name is None and any(hint in lowered for hint in DOWNLOAD_HINTS):
                    variable_name = "downloaded_payload"
                    reason = "remote content acquisition"
                if variable_name is not None and reason is not None:
                    matches.append(
                        _TreeSitterSourceMatch(
                            file_path=file_path,
                            variable_name=variable_name,
                            line_number=line_number,
                            reason=reason,
                        )
                    )
        return matches


class RepoAuditInitiator:
    def __init__(self) -> None:
        self.matcher = TreeSitterSourceMatcher()

    def identify_sources(self, index: RepositoryIndex, bug_definition: BugDefinition) -> list[SourceValue]:
        if bug_definition.bug_type == "NPD":
            matches = self.matcher.match_npd_sources(index)
        elif bug_definition.bug_type == "MLK":
            matches = self.matcher.match_mlk_sources(index)
        elif bug_definition.bug_type == "UAF":
            matches = self.matcher.match_uaf_sources(index)
        elif bug_definition.bug_type == "SECRET_EXFIL":
            matches = self.matcher.match_secret_exfil_sources(index)
        elif bug_definition.bug_type == "DOWNLOAD_EXEC":
            matches = self.matcher.match_download_exec_sources(index)
        else:
            matches = []
        return self._matches_to_sources(index, bug_definition.bug_type, matches)

    def _matches_to_sources(
        self,
        index: RepositoryIndex,
        bug_type: str,
        matches: list[_TreeSitterSourceMatch],
    ) -> list[SourceValue]:
        sources: list[SourceValue] = []
        for match in matches:
            function = index.get_function_at_line(match.file_path, match.line_number)
            if function is None:
                continue
            sources.append(
                SourceValue(
                    bug_type=bug_type,
                    variable_name=match.variable_name,
                    function_id=function.function_id,
                    location=CodeLocation(function.file_path, function.function_name, match.line_number),
                    reason=match.reason,
                )
            )
        return sources
