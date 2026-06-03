@echo off
setlocal
cd /d "%~dp0"
if not exist ".\ClawGuardLauncher.exe" (
  echo [ERROR] ClawGuardLauncher.exe not found.
  pause
  exit /b 1
)
if not exist ".\samples" (
  echo [ERROR] samples directory not found.
  pause
  exit /b 1
)
start "" ".\ClawGuardLauncher.exe"
