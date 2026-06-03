from __future__ import annotations

from pathlib import Path

import click
from dotenv import load_dotenv
from rich.console import Console

from agentdojo.static_analysis import RepositoryAuditor
from agentdojo.static_analysis.reporting import render_repository_audit_markdown, write_repository_audit_bundle


CONSOLE = Console()
PROJECT_ROOT = Path(__file__).resolve().parents[3]


@click.command()
@click.argument("repository_root", type=click.Path(exists=True, file_okay=False, path_type=Path))
@click.option(
    "--output-dir",
    type=click.Path(file_okay=False, path_type=Path),
    default=None,
    help="Optional directory where JSON and Markdown reports should be written.",
)
@click.option(
    "--task-text",
    default="Audit repository assets for security and code issues.",
    show_default=True,
    help="Task context forwarded to markdown/svg static auditing.",
)
@click.option(
    "--print-markdown/--no-print-markdown",
    default=True,
    show_default=True,
    help="Print the Markdown report to stdout after auditing.",
)
def main(repository_root: Path, output_dir: Path | None, task_text: str, print_markdown: bool) -> None:
    load_dotenv(PROJECT_ROOT / ".env")
    auditor = RepositoryAuditor(user_task_text=task_text)
    result = auditor.audit_repository(repository_root).to_dict()

    if output_dir is not None:
        json_path, markdown_path = write_repository_audit_bundle(result, output_dir)
        CONSOLE.print(f"Wrote JSON report to: {json_path}")
        CONSOLE.print(f"Wrote Markdown report to: {markdown_path}")

    if print_markdown:
        CONSOLE.print(render_repository_audit_markdown(result))


if __name__ == "__main__":
    main()
