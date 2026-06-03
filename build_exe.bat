@echo off
setlocal

cd /d "%~dp0"

python -m PyInstaller --version >nul 2>nul
if errorlevel 1 (
  echo [ERROR] PyInstaller module not found in current Python.
  echo         Install it first: python -m pip install pyinstaller
  exit /b 1
)

python -c "import pydantic" >nul 2>nul
if errorlevel 1 (
  echo [INFO] Installing runtime dependency from requirements.txt...
  python -m pip install -r requirements.txt
  if errorlevel 1 exit /b 1
)

echo [1/3] Build frontend...
call npm run build
if errorlevel 1 exit /b 1

echo [2/3] Build ClawGuardLauncher.exe...
python -m PyInstaller --noconfirm --clean clawguard.spec
if errorlevel 1 exit /b 1

echo [3/3] Done.
echo Output: dist\ClawGuardLauncher.exe
endlocal
