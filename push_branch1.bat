@echo off
setlocal enabledelayedexpansion

echo ========================================================
echo       ML CLUB WEBSITE - GITHUB PUSH HELPER (branch1)
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
    git commit -m "deploy: mobile-responsive layout for site and intro, deployment configuration, and optimized gitignore"
) else (
    echo [INFO] No new changes to commit (working tree clean).
)

:: 6. Switch to branch1
echo [INFO] Setting active branch to 'branch1'...
git branch -M branch1

:: 7. Push to origin branch1
echo.
echo [INFO] Pushing branch1 to GitHub origin...
git push -u origin branch1

echo.
if %errorlevel% equ 0 (
    echo ========================================================
    echo  SUCCESS! Your code has been pushed to 'branch1'.
    echo  View it at: https://github.com/nidhishhhn-cmd/ML--CLUB-WEBSITE/tree/branch1
    echo ========================================================
) else (
    echo ========================================================
    echo  [NOTE] Push exited with an error.
    echo  If authentication is needed:
    echo  - Run: gh auth login
    echo  - Or enter your GitHub username and Personal Access Token (PAT).
    echo ========================================================
)
pause
