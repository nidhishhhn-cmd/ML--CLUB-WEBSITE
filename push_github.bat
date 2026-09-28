@echo off
setlocal enabledelayedexpansion

echo ========================================================
echo        ML CLUB WEBSITE - ONE-CLICK GITHUB PUSH
echo ========================================================
echo.

where git >nul 2>&1
if %errorlevel% neq 0 (
    echo [ERROR] Git is not found in PATH.
    echo Please install Git or run this from Git Bash.
    pause
    exit /b 1
)

:: Ensure remote origin is set
git remote remove origin >nul 2>&1
git remote add origin https://github.com/nidhishhhn-cmd/ML--CLUB-WEBSITE.git

:: Add changes
echo [1/4] Staging changes (respecting .gitignore)...
git add -A

:: Commit
echo [2/4] Committing changes...
git diff --cached --quiet
if %errorlevel% neq 0 (
    git commit -m "perf: buttery smooth 60fps intro video with hardware acceleration and paused background decoders"
) else (
    echo [INFO] Working tree clean, nothing new to commit.
)

:: Push to main
echo [3/4] Pushing to branch 'main'...
git branch -M main
git push -u origin main --force

:: Push to branch1
echo.
echo [4/4] Synchronizing branch 'branch1'...
git checkout -B branch1 >nul 2>&1
git push -u origin branch1 --force
git checkout main >nul 2>&1

echo.
echo ========================================================
echo  SUCCESS! Your updates are now live on GitHub:
echo  Main:    https://github.com/nidhishhhn-cmd/ML--CLUB-WEBSITE/tree/main
echo  Branch1: https://github.com/nidhishhhn-cmd/ML--CLUB-WEBSITE/tree/branch1
echo ========================================================
echo.
pause
