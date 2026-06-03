@echo off
setlocal
cd /d "%~dp0"
if not exist ".\ClawGuardLauncher.exe" (
  echo [ERROR] ClawGuardLauncher.exe not found in current folder.
  pause
  exit /b 1
)
set "CLAWGUARD_NO_BROWSER="
start "" ".\ClawGuardLauncher.exe"
