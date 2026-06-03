from __future__ import annotations

from agentdojo.static_analysis.repoaudit.schema import FunctionExplorationResult, MemoryEntry, MemoryKey


class AgentMemory:
    def __init__(self) -> None:
        self._cache: dict[MemoryKey, FunctionExplorationResult] = {}

    @staticmethod
    def build_key(bug_type: str, function_id: int, tracked_value: str, start_line_number: int) -> MemoryKey:
        return MemoryKey(
            bug_type=bug_type,
            function_id=function_id,
            tracked_value=tracked_value,
            start_line_number=start_line_number,
        )

    def get(self, bug_type: str, function_id: int, tracked_value: str, start_line_number: int) -> FunctionExplorationResult | None:
        return self._cache.get(self.build_key(bug_type, function_id, tracked_value, start_line_number))

    def put(self, result: FunctionExplorationResult) -> None:
        key = self.build_key(result.bug_type, result.function_id, result.tracked_value, result.start_line_number)
        self._cache[key] = result

    def entries(self) -> list[MemoryEntry]:
        return [MemoryEntry(key=key, result=result) for key, result in self._cache.items()]
