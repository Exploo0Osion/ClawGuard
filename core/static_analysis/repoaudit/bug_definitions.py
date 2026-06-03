from __future__ import annotations

from dataclasses import dataclass


@dataclass(frozen=True)
class BugDefinition:
    bug_type: str
    description: str
    source_definition: str
    sink_definition: str
    interprocedural_limit: int = 4


DEFAULT_BUG_DEFINITIONS = [
    BugDefinition(
        bug_type="NPD",
        description="Null/None value reaches an attribute, subscript, or callable dereference sink.",
        source_definition="A null-like value source is an assignment or initialization to NULL, nullptr, or None.",
        sink_definition="A null dereference sink is an attribute access, subscript, pointer dereference, array access, or indirect use that requires the value to be non-null.",
    ),
    BugDefinition(
        bug_type="MLK",
        description="Allocated resource escapes feasible paths without reaching a release sink.",
        source_definition="A memory/resource leak source is an allocation or acquisition site such as malloc/new/open/socket/fopen.",
        sink_definition="A leak sink is a matching release operation; a terminal feasible path without that release is a bug sink.",
    ),
    BugDefinition(
        bug_type="UAF",
        description="Closed or released resource value reaches a subsequent use sink.",
        source_definition="A use-after-free source is a release operation such as free/delete/close/fclose applied to a tracked resource.",
        sink_definition="A use-after-free sink is any subsequent dereference, field access, indexing, or call use of the released resource.",
    ),
    BugDefinition(
        bug_type="SECRET_EXFIL",
        description="A secret-bearing value is read from environment or local credentials storage and later reaches an outbound network or upload sink.",
        source_definition="A secret exfiltration source is a read from process.env, os.environ, getenv, .env files, credentials.json, token stores, or similar local secret-bearing configuration.",
        sink_definition="A secret exfiltration sink is an outbound request, webhook, upload, external POST, curl/wget transfer, or any network call that transmits the tracked secret-bearing value.",
    ),
    BugDefinition(
        bug_type="DOWNLOAD_EXEC",
        description="Remote content is fetched and later executed or passed into a shell, subprocess, interpreter, or installer sink.",
        source_definition="A download-exec source is a remote fetch, URL-backed payload, curl/wget/fetch/requests/axios retrieval, Invoke-WebRequest, or similar remote-content acquisition step.",
        sink_definition="A download-exec sink is os.system, subprocess, exec, spawn, bash/sh/powershell/cmd execution, source/dot-sourcing, or install-and-run behavior applied to the fetched content.",
    ),
]
