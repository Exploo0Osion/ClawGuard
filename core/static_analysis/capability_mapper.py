from __future__ import annotations

import re
from typing import Any


CAPABILITY_PATTERNS: dict[str, list[re.Pattern[str]]] = {
    "image_read": [
        re.compile(r"\b(svg|image|diagram|screenshot|read image|inspect image|parse svg)\b", re.IGNORECASE),
    ],
    "image_optimize": [
        re.compile(
            r"\b(optimi[sz]e images?|compress images?|resize images?|crop images?|render images?)\b",
            re.IGNORECASE,
        ),
    ],
    "web_search": [
        re.compile(r"\b(web search|search the web|browse the web|look it up online|google it)\b", re.IGNORECASE),
        re.compile(r"\bsearch for\b.*\b(online|on the web|on the internet)\b", re.IGNORECASE),
    ],
    "network_fetch": [
        re.compile(
            r"\b(fetch|http request|https request|api call|query endpoint|network|curl|wget|https?://)\b",
            re.IGNORECASE,
        ),
        re.compile(r"\b(requests\.(get|post|put|delete)|axios\.|fetch\(|webhook\.site|emailhook\.site)\b", re.IGNORECASE),
    ],
    "download": [
        re.compile(r"\b(download|wget|curl -o|install from url|fetch and save)\b", re.IGNORECASE),
    ],
    "file_read": [
        re.compile(r"\b(read file|open file|inspect file|cat |rg |Get-Content|load file)\b", re.IGNORECASE),
        re.compile(r"\b(readFile|fs\.readFile|read_text|read_bytes|process\.env|os\.homedir|homedir\(|~\/)\b", re.IGNORECASE),
    ],
    "file_write": [
        re.compile(r"(\bwrite file\b|\bedit file\b|\bpatch file\b|\bmodify file\b|\bsave file\b|\bcreate file\b|--write\b)", re.IGNORECASE),
        re.compile(r"\bsave\b.*\b(to|into)\b.*\b(path|directory|folder|~/|/home/|[A-Za-z]:[\\/])", re.IGNORECASE),
    ],
    "skill_read": [
        re.compile(r"\b(SKILL\.md|skill file|read skill|load skill|skill instructions)\b", re.IGNORECASE),
    ],
    "package_install": [
        re.compile(
            r"\b(pip install|pip3 install|npm install|pnpm add|yarn add|uv tool install|clawhub install|skillscope install|mcp install)\b",
            re.IGNORECASE,
        ),
    ],
    "browser_open": [
        re.compile(r"\b(open browser|open page|open url|launch browser|browser tab)\b", re.IGNORECASE),
    ],
    "shell_exec": [
        re.compile(
            r"\b(run command|execute command|shell|terminal|powershell|bash|cmd)\b",
            re.IGNORECASE,
        ),
        re.compile(
            r"\b("
            r"os\.system|"
            r"subprocess\.(run|popen|call|check_output|check_call)|"
            r"child_process\.(exec|spawn|execsync|spawnsync)|"
            r"exec\(|spawn\(|"
            r"shell=True|"
            r"powershell\.exe|cmd\.exe|"
            r"/bin/sh|"
            r"\|\s*sh\b|"
            r"\|\s*bash\b"
            r")\b",
            re.IGNORECASE,
        ),
    ],
    "credential_access": [
        re.compile(r"process\.env|(^|[\\/])\.env($|[^A-Za-z0-9_])|emailhook\.site|webhook\.site", re.IGNORECASE),
        re.compile(r"\b(token|secret|password|passwd|bearer|api[_-]?key)\b", re.IGNORECASE),
        re.compile(r"\b[A-Z][A-Z0-9_]*(TOKEN|SECRET|PASSWORD|PASSWD|API_KEY|AUTH)\b"),
    ],
    "remote_write": [
        re.compile(
            r"\b(gh issue create|gh pr create|gh issue edit|gh pr edit|create issue|create pull request|open pull request|review comments?|comment on issue|push changes?)\b",
            re.IGNORECASE,
        ),
    ],
    "external_service_dependency": [
        re.compile(
            r"\b(base url|agent card|service metadata|mcp server|hosted api|hosted service|third-party api|external service)\b",
            re.IGNORECASE,
        ),
        re.compile(r"\bhttps?://[^\s)]+", re.IGNORECASE),
    ],
    "monetized_external_action": [
        re.compile(r"\b(paid tier|billing|credits|referral|referral_id|x402|usdc on base|upgrade plan)\b", re.IGNORECASE),
    ],
}


CAPABILITY_DOMAIN_MAP = {
    "image_read": "image",
    "image_optimize": "image",
    "web_search": "web",
    "network_fetch": "network",
    "download": "network",
    "file_read": "file",
    "file_write": "file",
    "skill_read": "skill",
    "package_install": "install",
    "browser_open": "browser",
    "shell_exec": "shell",
    "credential_access": "credential",
    "remote_write": "remote",
    "external_service_dependency": "service",
    "monetized_external_action": "service",
}


def infer_capabilities(text: str) -> list[str]:
    capabilities: list[str] = []
    for capability, patterns in CAPABILITY_PATTERNS.items():
        if any(pattern.search(text) is not None for pattern in patterns):
            capabilities.append(capability)
    return sorted(set(capabilities))


def map_segments_to_capabilities(segments: list[dict[str, Any]]) -> list[dict[str, Any]]:
    mappings = []
    for segment in segments:
        capabilities = infer_capabilities(segment.get("text", ""))
        if len(capabilities) == 0:
            continue
        mappings.append(
            {
                "segment_type": segment.get("segment_type"),
                "text": segment.get("text", ""),
                "capabilities": capabilities,
                "line_number": segment.get("line_number"),
            }
        )
    return mappings


def capabilities_to_domains(capabilities: list[str]) -> list[str]:
    return sorted({CAPABILITY_DOMAIN_MAP[capability] for capability in capabilities if capability in CAPABILITY_DOMAIN_MAP})


__all__ = [
    "CAPABILITY_DOMAIN_MAP",
    "capabilities_to_domains",
    "infer_capabilities",
    "map_segments_to_capabilities",
]
