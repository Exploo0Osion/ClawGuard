from __future__ import annotations


ANALYZE_FUNCTION_PROMPT = (
    "Task: analyze one function for source-to-sink propagation.\n"
    "Step 1: identify aliases/pointers/references of the tracked value.\n"
    "Step 2: keep only critical assignments, calls, returns, branch guards, dereferences, release operations, environment reads, local credential reads, remote fetches, uploads, and shell/subprocess execution sites.\n"
    "Step 3: enumerate only feasible paths over those critical statements and emit grounded facts.\n"
    "Return JSON only: abstraction_lines, path_bundles, facts, escapes, sinks."
)


VALIDATE_PATH_PROMPT = (
    "Task: decide whether the given interprocedural path is feasible.\n"
    "Reject paths whose branch conditions or value constraints conflict.\n"
    "Return JSON only: is_feasible, notes."
)


def build_analyze_function_prompt(payload: dict[str, object]) -> str:
    bug_type = payload.get("bug_type", "UNKNOWN")
    source_definition = payload.get("source_definition", "")
    sink_definition = payload.get("sink_definition", "")
    return (
        ANALYZE_FUNCTION_PROMPT
        + "\n"
        + f"Bug type: {bug_type}.\n"
        + f"Source definition: {source_definition}\n"
        + f"Sink definition: {sink_definition}\n"
        + "Treat the function as one node in an interprocedural audit. Emit only grounded path bundles."
    )


def build_validate_path_prompt(payload: dict[str, object]) -> str:
    bug_type = payload.get("bug_type", "UNKNOWN")
    sink_definition = payload.get("sink_definition", "")
    return (
        VALIDATE_PATH_PROMPT
        + "\n"
        + f"Bug type: {bug_type}.\n"
        + f"Sink definition: {sink_definition}\n"
        + "Check whether the stitched interprocedural path is feasible under all branch and value constraints."
    )


PROMPT_TEMPLATE_NAMES = [
    "analyze_individual_function",
    "validate_interprocedural_path_feasibility",
]


ANALYZE_FUNCTION_FEW_SHOT = {
    "input": {
        "bug_type": "NPD",
        "tracked_value": "json",
        "tracked_line_number": 4,
        "function_name": "field2json",
        "candidate_focus_lines": [3, 4, 5, 7, 8],
    },
    "output": {
        "abstraction_lines": [3, 4, 5, 7, 8],
        "path_bundles": [
            {"path_id": "p0T", "conditions": ["repeated"], "relevant_lines": [3, 4, 5, 7], "facts": [], "escapes": [], "sinks": []},
            {"path_id": "p0F", "conditions": ["not (repeated)"], "relevant_lines": [3, 4, 7, 8], "facts": [], "escapes": [], "sinks": []},
        ],
        "facts": [
            {
                "fact_kind": "assignment",
                "source_name": "json",
                "target_name": "json",
                "source_line": 4,
                "target_line": 8,
                "path_id": "p0F",
                "path_conditions": ["not (repeated)"],
            }
        ],
        "escapes": [{"escape_kind": "return", "line_number": 8, "variable_name": "json", "path_id": "p0F", "path_conditions": ["not (repeated)"], "callee_name": None, "argument_index": None}],
        "sinks": [],
    },
}


VALIDATE_PATH_FEW_SHOT = {
    "input": {
        "path_conditions": ["flag", "not (flag)"],
        "interprocedural_path": [{"function_name": "a", "path_conditions": ["flag"]}, {"function_name": "b", "path_conditions": ["not (flag)"]}],
    },
    "output": {"is_feasible": False, "notes": ["branch conditions conflict across functions"]},
}
