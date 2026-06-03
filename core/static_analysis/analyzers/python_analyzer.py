"""Python source analyzer used by the repository code-audit path."""

from __future__ import annotations

import ast

from agentdojo.static_analysis.analyzers.ts_analyzer import StaticAnalysisResult, TSAnalyzer
from agentdojo.static_analysis.models import Function, Value, ValueLabel


def _iter_child_nodes_without_nested_functions(node: ast.AST) -> list[ast.AST]:
    nodes: list[ast.AST] = []
    stack = list(ast.iter_child_nodes(node))
    while stack:
        current = stack.pop()
        nodes.append(current)
        if isinstance(current, (ast.FunctionDef, ast.AsyncFunctionDef, ast.Lambda, ast.ClassDef)):
            continue
        stack.extend(ast.iter_child_nodes(current))
    return nodes


class PythonAnalyzer(TSAnalyzer):
    """Supplemental static analyzer for Python source files using the stdlib AST."""

    def __init__(self, code_in_files: dict[str, str]) -> None:
        super().__init__(code_in_files=code_in_files, language_name="Python")

    @classmethod
    def from_source(cls, file_path: str, source_code: str) -> "PythonAnalyzer":
        return cls({file_path: source_code})

    @classmethod
    def analyze_source(cls, file_path: str, source_code: str) -> StaticAnalysisResult:
        return cls.from_source(file_path, source_code).build_result()

    def extract_function_info(self, file_path: str, source_code: str, tree: ast.AST) -> None:
        for node in ast.walk(tree):
            if not isinstance(node, (ast.FunctionDef, ast.AsyncFunctionDef)):
                continue
            if not hasattr(node, "lineno"):
                continue

            function_id = len(self.functionRawDataDic) + 1
            start_line_number = node.lineno
            end_line_number = getattr(node, "end_lineno", node.lineno)
            function_name = node.name

            self.functionRawDataDic[function_id] = (
                function_name,
                start_line_number,
                end_line_number,
                node,
            )
            self.functionToFile[function_id] = file_path
            self.functionNameToId.setdefault(function_name, set()).add(function_id)

    def extract_global_info(self, file_path: str, source_code: str, tree: ast.AST) -> None:
        return None

    def get_callee_name_at_call_site(self, node: ast.Call, source_code: str) -> str:
        if isinstance(node.func, ast.Name):
            return node.func.id
        if isinstance(node.func, ast.Attribute):
            return node.func.attr
        return ""

    def get_callsites_by_callee_name(self, current_function: Function, callee_name: str) -> list[ast.Call]:
        return [
            call_site
            for call_site in self.get_call_nodes(current_function)
            if self.get_callee_name_at_call_site(call_site, self.code_in_files[current_function.file_path]) == callee_name
        ]

    def get_arguments_at_callsite(self, current_function: Function, call_site_node: ast.Call) -> set[Value]:
        arguments: set[Value] = set()
        file_name = current_function.file_path
        source_code = self.code_in_files[file_name]
        index = 0

        for argument in call_site_node.args:
            arg_name = ast.get_source_segment(source_code, argument) or ""
            arguments.add(Value(arg_name, getattr(argument, "lineno", 0), ValueLabel.ARG, file_name, index))
            index += 1

        for keyword in call_site_node.keywords:
            arg_expr = keyword.value
            arg_name = ast.get_source_segment(source_code, arg_expr) or ""
            arguments.add(Value(arg_name, getattr(arg_expr, "lineno", 0), ValueLabel.ARG, file_name, index))
            index += 1

        return arguments

    def get_parameters_in_single_function(self, current_function: Function) -> set[Value]:
        if current_function.paras is not None:
            return current_function.paras

        current_function.paras = set()
        function_node = current_function.parse_tree_root_node
        assert isinstance(function_node, (ast.FunctionDef, ast.AsyncFunctionDef))

        parameter_nodes = [
            *function_node.args.posonlyargs,
            *function_node.args.args,
            function_node.args.vararg,
            *function_node.args.kwonlyargs,
            function_node.args.kwarg,
        ]
        index = 0
        for parameter_node in parameter_nodes:
            if parameter_node is None:
                continue
            if parameter_node.arg == "self":
                continue
            current_function.paras.add(
                Value(
                    name=parameter_node.arg,
                    line_number=getattr(parameter_node, "lineno", current_function.start_line_number),
                    label=ValueLabel.PARA,
                    file=current_function.file_path,
                    index=index,
                )
            )
            index += 1
        return current_function.paras

    def get_return_values_in_single_function(self, current_function: Function) -> set[Value]:
        if current_function.retvals is not None:
            return current_function.retvals

        current_function.retvals = set()
        source_code = self.code_in_files[current_function.file_path]
        index = 0

        for node in _iter_child_nodes_without_nested_functions(current_function.parse_tree_root_node):
            if not isinstance(node, ast.Return):
                continue
            if node.value is None:
                value_name = "None"
            else:
                value_name = ast.get_source_segment(source_code, node.value) or "None"
            current_function.retvals.add(
                Value(
                    name=value_name,
                    line_number=getattr(node, "lineno", current_function.start_line_number),
                    label=ValueLabel.RET,
                    file=current_function.file_path,
                    index=index,
                )
            )
            index += 1
        return current_function.retvals

    def get_if_statements(
        self, function: Function, source_code: str
    ) -> dict[tuple[int, int], tuple[int, int, str, tuple[int, int], tuple[int, int]]]:
        if_statements = {}
        for node in _iter_child_nodes_without_nested_functions(function.parse_tree_root_node):
            if not isinstance(node, ast.If):
                continue
            start_line = getattr(node, "lineno", function.start_line_number)
            end_line = getattr(node, "end_lineno", start_line)
            test_str = ast.get_source_segment(source_code, node.test) or ""
            true_start = getattr(node.body[0], "lineno", end_line) if len(node.body) > 0 else end_line
            true_end = getattr(node.body[-1], "end_lineno", end_line) if len(node.body) > 0 else end_line
            else_start = getattr(node.orelse[0], "lineno", 0) if len(node.orelse) > 0 else 0
            else_end = getattr(node.orelse[-1], "end_lineno", 0) if len(node.orelse) > 0 else 0
            if_statements[(start_line, end_line)] = (
                start_line,
                start_line,
                test_str,
                (true_start, true_end),
                (else_start, else_end),
            )
        return if_statements

    def get_loop_statements(self, function: Function, source_code: str) -> dict[tuple[int, int], tuple[int, int, str, int, int]]:
        loops = {}
        for node in _iter_child_nodes_without_nested_functions(function.parse_tree_root_node):
            if not isinstance(node, (ast.For, ast.AsyncFor, ast.While)):
                continue
            start_line = getattr(node, "lineno", function.start_line_number)
            end_line = getattr(node, "end_lineno", start_line)
            if isinstance(node, ast.While):
                header_str = ast.get_source_segment(source_code, node.test) or ""
            else:
                header_str = ast.get_source_segment(source_code, node.iter) or ""
            body_start = getattr(node.body[0], "lineno", start_line) if len(node.body) > 0 else start_line
            body_end = getattr(node.body[-1], "end_lineno", end_line) if len(node.body) > 0 else end_line
            loops[(start_line, end_line)] = (
                start_line,
                start_line,
                header_str,
                body_start,
                body_end,
            )
        return loops

    def get_call_nodes(self, current_function: Function) -> list[ast.Call]:
        return [
            node
            for node in _iter_child_nodes_without_nested_functions(current_function.parse_tree_root_node)
            if isinstance(node, ast.Call)
        ]


__all__ = ["PythonAnalyzer"]
