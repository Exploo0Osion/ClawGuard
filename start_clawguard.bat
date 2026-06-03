@echo off
setlocal
cd /d "%~dp0"

if exist ".\dist\ClawGuardLauncher.exe" (
  start "" ".\dist\ClawGuardLauncher.exe"
  exit /b 0
)

echo ClawGuardLauncher.exe not found, fallback to Python launcher...
python launcher.py
