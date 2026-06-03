"""Code-level static analysis base class used by repository auditing."""

from __future__ import annotations

import ast
from abc import ABC, abstractmethod
from dataclasses import dataclass
from typing import Any

from agentdojo.static_analysis.models import API, Function, Value, ValueLabel


@dataclass(frozen=True)
class CallEdge:
    caller_id: int
    callee_id: int


@dataclass(frozen=True)
class ApiCallEdge:
    caller_id: int
    api_id: int


@dataclass
class StaticAnalysisResult:
    """Structured result for project-level static analysis."""

    language_name: str
    files: dict[str, str]
    functions: dict[int, Function]
    apis: dict[int, API]
    function_call_edges: list[CallEdge]
    api_call_edges: list[ApiCallEdge]

    def to_dict(self) -> dict[str, Any]:
        return {
            "language_name": self.language_name,
            "files": list(self.files.keys()),
            "functions": {
                function_id: function.to_dict() for function_id, function in self.functions.items()
            },
            "apis": {api_id: str(api) for api_id, api in self.apis.items()},
            "function_call_edges": [
                {"caller_id": edge.caller_id, "callee_id": edge.callee_id} for edge in self.function_call_edges
            ],
            "api_call_edges": [{"caller_id": edge.caller_id, "api_id": edge.api_id} for edge in self.api_call_edges],
        }


class TSAnalyzer(ABC):
    """Python-oriented analyzer aligned with the RepoAudit-style repository flow."""

    def __init__(self, code_in_files: dict[str, str], language_name: str = "Python") -> None:
        if language_name != "Python":
            raise ValueError("This minimal static analysis core currently only supports Python.")

        self.code_in_files = code_in_files
        self.language_name = language_name

        self.functionRawDataDic: dict[int, tuple[str, int, int, ast.AST]] = {}
        self.functionNameToId: dict[str, set[int]] = {}
        self.functionToFile: dict[int, str] = {}
        self.fileContentDic: dict[str, str] = {}
        self.glb_var_map: dict[str, str] = {}

        self.function_env: dict[int, Function] = {}
        self.api_env: dict[int, API] = {}

        self.function_caller_callee_map: dict[int, set[int]] = {}
        self.function_callee_caller_map: dict[int, set[int]] = {}
        self.function_caller_api_callee_map: dict[int, set[int]] = {}
        self.api_callee_function_caller_map: dict[int, set[int]] = {}

        self.parse_project()
        self.analyze_call_graph()

    def _parse_single_file(self, file_path: str, source_code: str) -> tuple[str, str, ast.AST]:
        tree = ast.parse(source_code, filename=file_path)
        self.extract_function_info(file_path, source_code, tree)
        self.extract_global_info(file_path, source_code, tree)
        return file_path, source_code, tree

    def _analyze_single_function(self, function_id: int, raw_data: tuple[str, int, int, ast.AST]) -> tuple[int, Function]:
        name, start_line_number, end_line_number, function_node = raw_data
        file_name = self.functionToFile[function_id]
        file_content = self.fileContentDic[file_name]
        function_code = ast.get_source_segment(file_content, function_node) or ""
        current_function = Function(
            function_id=function_id,
            function_name=name,
            function_code=function_code,
            start_line_number=start_line_number,
            end_line_number=end_line_number,
            parse_tree_root_node=function_node,
            file_path=file_name,
        )
        return function_id, self.extract_meta_data_in_single_function(current_function)

    def parse_project(self) -> None:
        for file_path, source_code in self.code_in_files.items():
            parsed_file_path, parsed_source, _ = self._parse_single_file(file_path, source_code)
            self.fileContentDic[parsed_file_path] = parsed_source

        for function_id, raw_data in self.functionRawDataDic.items():
            analyzed_function_id, current_function = self._analyze_single_function(function_id, raw_data)
            self.function_env[analyzed_function_id] = current_function

    def analyze_call_graph(self) -> None:
        for current_function in self.function_env.values():
            self.extract_call_graph_edges(current_function)

    @abstractmethod
    def extract_function_info(self, file_path: str, source_code: str, tree: ast.AST) -> None:
        pass

    def extract_meta_data_in_single_function(self, current_function: Function) -> Function:
        file_name = self.functionToFile[current_function.function_id]
        file_content = self.fileContentDic[file_name]

        current_function.paras = self.get_parameters_in_single_function(current_function)
        current_function.retvals = self.get_return_values_in_single_function(current_function)
        current_function.if_statements = self.get_if_statements(current_function, file_content)
        current_function.loop_statements = self.get_loop_statements(current_function, file_content)
        return current_function

    @abstractmethod
    def extract_global_info(self, file_path: str, source_code: str, tree: ast.AST) -> None:
        pass

    def extract_call_graph_edges(self, current_function: Function) -> None:
        call_site_nodes = self.get_call_nodes(current_function)
        function_call_sites: list[ast.Call] = []
        api_call_sites: list[ast.Call] = []

        for call_site_node in call_site_nodes:
            callee_ids = self.get_callee_function_ids_at_callsite(current_function, call_site_node)
            if len(callee_ids) > 0:
                for callee_id in callee_ids:
                    caller_id = current_function.function_id
                    self.function_caller_callee_map.setdefault(caller_id, set()).add(callee_id)
                    self.function_callee_caller_map.setdefault(callee_id, set()).add(caller_id)
                function_call_sites.append(call_site_node)
                continue

            callee_name = self.get_callee_name_at_call_site(call_site_node, self.code_in_files[current_function.file_path])
            arguments = self.get_arguments_at_callsite(current_function, call_site_node)
            if callee_name == "":
                continue

            tmp_api = API(-1, callee_name, len(arguments))
            api_id = next(
                (single_api_id for single_api_id, api in self.api_env.items() if api == tmp_api),
                None,
            )
            if api_id is None:
                api_id = len(self.api_env)
                self.api_env[api_id] = API(api_id, callee_name, len(arguments))

            caller_id = current_function.function_id
            self.function_caller_api_callee_map.setdefault(caller_id, set()).add(api_id)
            self.api_callee_function_caller_map.setdefault(api_id, set()).add(caller_id)
            api_call_sites.append(call_site_node)

        current_function.function_call_site_nodes = function_call_sites
        current_function.api_call_site_nodes = api_call_sites

    def get_all_caller_functions(self, function: Function) -> list[Function]:
        caller_ids = self.function_callee_caller_map.get(function.function_id, set())
        return [self.function_env[caller_id] for caller_id in caller_ids]

    def get_all_callee_functions(self, function: Function) -> list[Function]:
        callee_ids = self.function_caller_callee_map.get(function.function_id, set())
        return [self.function_env[callee_id] for callee_id in callee_ids]

    def get_all_callee_apis(self, function: Function, callee_name: str, para_num: int) -> list[API]:
        callee_list = []
        for callee_api_id in self.function_caller_api_callee_map.get(function.function_id, set()):
            if self.api_env[callee_api_id] == API(-1, callee_name, para_num):
                callee_list.append(self.api_env[callee_api_id])
        return callee_list

    @abstractmethod
    def get_callee_name_at_call_site(self, node: ast.Call, source_code: str) -> str:
        pass

    def get_callee_function_ids_at_callsite(self, current_function: Function, call_site_node: ast.Call) -> list[int]:
        file_name = current_function.file_path
        source_code = self.code_in_files[file_name]
        callee_name = self.get_callee_name_at_call_site(call_site_node, source_code)
        arguments = self.get_arguments_at_callsite(current_function, call_site_node)
        temp_callee_ids = list(self.functionNameToId.get(callee_name, set()))
        callee_ids = []
        for callee_id in temp_callee_ids:
            callee = self.function_env[callee_id]
            paras = callee.paras or set()
            if len(paras) == len(arguments):
                callee_ids.append(callee_id)
        return callee_ids

    @abstractmethod
    def get_callsites_by_callee_name(self, current_function: Function, callee_name: str) -> list[ast.Call]:
        pass

    @abstractmethod
    def get_arguments_at_callsite(self, current_function: Function, call_site_node: ast.Call) -> set[Value]:
        pass

    @abstractmethod
    def get_parameters_in_single_function(self, current_function: Function) -> set[Value]:
        pass

    def get_output_value_at_callsite(self, current_function: Function, call_site_node: ast.Call) -> Value:
        file_code = self.code_in_files[current_function.file_path]
        name = ast.get_source_segment(file_code, call_site_node) or ""
        line_number = getattr(call_site_node, "lineno", current_function.start_line_number)
        return Value(name, line_number, ValueLabel.OUT, current_function.file_path, -1)

    @abstractmethod
    def get_return_values_in_single_function(self, current_function: Function) -> set[Value]:
        pass

    @abstractmethod
    def get_if_statements(self, function: Function, source_code: str) -> dict[tuple[int, int], tuple[Any, ...]]:
        pass

    @abstractmethod
    def get_loop_statements(self, function: Function, source_code: str) -> dict[tuple[int, int], tuple[Any, ...]]:
        pass

    def check_control_order(self, function: Function, src_line_number: int, sink_line_number: int) -> bool:
        if src_line_number == sink_line_number:
            return True

        for if_statement_start_line, if_statement_end_line in function.if_statements:
            _, _, _, (true_branch_start_line, true_branch_end_line), (
                else_branch_start_line,
                else_branch_end_line,
            ) = function.if_statements[(if_statement_start_line, if_statement_end_line)]
            if (
                true_branch_start_line <= src_line_number <= true_branch_end_line
                and else_branch_start_line <= sink_line_number <= else_branch_end_line
                and else_branch_start_line != 0
                and else_branch_end_line != 0
            ):
                return False

        if src_line_number > sink_line_number:
            for loop_start_line, loop_end_line in function.loop_statements:
                _, _, _, loop_body_start_line, loop_body_end_line = function.loop_statements[
                    (loop_start_line, loop_end_line)
                ]
                if (
                    loop_body_start_line <= src_line_number <= loop_body_end_line
                    and loop_body_start_line <= sink_line_number <= loop_body_end_line
                ):
                    return True
            return False
        return True

    def check_control_reachability(self, function: Function, src_line_number: int, sink_line_number: int) -> bool:
        return self.check_control_order(function, src_line_number, sink_line_number)

    def get_content_by_line_number(self, line_number: int, file_name: str) -> str:
        if file_name not in self.code_in_files:
            return ""
        file_lines = self.code_in_files[file_name].splitlines()
        if line_number <= 0 or line_number > len(file_lines):
            return ""
        return file_lines[line_number - 1]

    def build_result(self) -> StaticAnalysisResult:
        function_call_edges = [
            CallEdge(caller_id=caller_id, callee_id=callee_id)
            for caller_id, callee_ids in self.function_caller_callee_map.items()
            for callee_id in sorted(callee_ids)
        ]
        api_call_edges = [
            ApiCallEdge(caller_id=caller_id, api_id=api_id)
            for caller_id, api_ids in self.function_caller_api_callee_map.items()
            for api_id in sorted(api_ids)
        ]
        return StaticAnalysisResult(
            language_name=self.language_name,
            files=self.fileContentDic,
            functions=self.function_env,
            apis=self.api_env,
            function_call_edges=function_call_edges,
            api_call_edges=api_call_edges,
        )

    @abstractmethod
    def get_call_nodes(self, current_function: Function) -> list[ast.Call]:
        pass


__all__ = ["ApiCallEdge", "CallEdge", "StaticAnalysisResult", "TSAnalyzer"]
