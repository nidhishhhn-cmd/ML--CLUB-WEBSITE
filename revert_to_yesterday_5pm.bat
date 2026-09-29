@echo off
setlocal enabledelayedexpansion

echo ========================================================
echo   ML CLUB WEBSITE - REVERT TO YESTERDAY (5:00 PM)
echo ========================================================
echo.

:: 1. Verify Git
where git >nul 2>&1
if %errorlevel% neq 0 (
    echo [ERROR] Git is not found in your PATH.
    pause
    exit /b 1
)

:: 2. Create a safety backup branch of the current state
echo [1/3] Creating safety backup branch 'backup_before_revert'...
git branch -f backup_before_revert HEAD
echo       Saved current work to branch 'backup_before_revert'.
echo.

:: 3. Reset main branch to commit 3a3602ba (as of yesterday 5:00 PM)
echo [2/3] Reverting code to commit 3a3602ba (Yesterday ~5:00 PM)...
git reset --hard 3a3602ba22d7b38a70e71d6914bc78863aa4e5a0

:: 4. Clean untracked generated files from last night
echo [3/3] Cleaning untracked build artifacts from yesterday evening...
if exist "build-static.js" del /f /q "build-static.js"
if exist "vercel.json" del /f /q "vercel.json"

echo.
echo ========================================================
echo  SUCCESS! Your workspace is reverted to yesterday 5:00 PM.
echo.
echo  Target Commit: 3a3602ba (feat: update website and gitignore)
echo  Backup branch: 'backup_before_revert' (contains all recent work)
echo ========================================================
echo.
echo If you also want to push this reverted version to GitHub, run:
echo    git push origin main --force
echo.
pause
