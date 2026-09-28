@echo off
setlocal enabledelayedexpansion

echo ========================================================
echo       ML CLUB WEBSITE - GITHUB PUSH HELPER (main)
echo ========================================================
echo.

:: 1. Check if git is installed
where git >nul 2>&1
if %errorlevel% neq 0 (
    echo [ERROR] Git is not installed or not in your PATH.
    echo Please install Git from https://git-scm.com/
    pause
    exit /b 1
)

:: 2. Initialize git if not already initialized
if not exist ".git" (
    echo [INFO] Initializing git repository at root...
    git init
)

:: 3. Set remote origin
echo [INFO] Configuring remote origin (https://github.com/nidhishhhn-cmd/ML--CLUB-WEBSITE.git)...
git remote remove origin >nul 2>&1
git remote add origin https://github.com/nidhishhhn-cmd/ML--CLUB-WEBSITE.git

:: 4. Stage files respecting .gitignore
echo [INFO] Staging all files (adhering to .gitignore)...
git add -A

:: 5. Commit changes if any exist
echo [INFO] Checking for changes to commit...
git diff-index --quiet HEAD >nul 2>&1
if %errorlevel% neq 0 (
    echo [INFO] Committing new changes...
    git commit -m "perf: buttery smooth 60fps intro video with hardware acceleration and paused background decoders"
) else (
    echo [INFO] No new changes to commit (working tree clean).
)

:: 6. Switch to main branch
echo [INFO] Setting active branch to 'main'...
git branch -M main

:: 7. Push to origin main
echo.
echo [INFO] Pushing main branch to GitHub origin...
git push -u origin main --force

echo.
if %errorlevel% equ 0 (
    echo ========================================================
    echo  SUCCESS! Your code has been pushed to 'main'.
    echo  View it at: https://github.com/nidhishhhn-cmd/ML--CLUB-WEBSITE/tree/main
    echo ========================================================
) else (
    echo ========================================================
    echo  [NOTE] If push was rejected because remote has changes,
    echo  you can run:
    echo     git pull origin main --rebase
    echo     git push -u origin main
    echo  Or force push if overriding:
    echo     git push -u origin main --force
    echo ========================================================
)

echo.
pause
