@echo off
echo ========================================================
echo        ML CLUB WEBSITE - PUSH TO GITHUB & VERCEL
echo ========================================================
echo.

echo [Sync] Syncing NAVATVA website logo...
set "SRC_LOGO=C:\Users\HP\.gemini\antigravity-ide\brain\52e51adf-fcd9-4d67-b5a9-2d78a9366505\.user_uploaded\media_1790679439003.png"
if exist "%SRC_LOGO%" (
    copy /y "%SRC_LOGO%" "images\ml_club_logo.png" >nul
    copy /y "%SRC_LOGO%" "images\ml_club_logo.jpg" >nul
    if not exist "intro\assets" mkdir "intro\assets"
    copy /y "%SRC_LOGO%" "intro\assets\ml-club-logo.png" >nul
    copy /y "%SRC_LOGO%" "intro\assets\ml-club-logo.jpg" >nul
    echo [Sync] Copied new NAVATVA logo into images/ and intro/assets/
)

echo [Sync] Syncing Visionaries gallery photos...
set "SRC_INTRO=C:\Users\HP\.gemini\antigravity-ide\brain\52e51adf-fcd9-4d67-b5a9-2d78a9366505\.user_uploaded\media_1790703005599.jpg"
if not exist "%SRC_INTRO%" set "SRC_INTRO=C:\Users\HP\.gemini\antigravity-ide\brain\209f3122-2536-466b-947f-01af2718af77\.user_uploaded\media_1790505991581.jpg"
if exist "%SRC_INTRO%" (
    copy /y "%SRC_INTRO%" "images\intro_session.jpg" >nul
    echo [Sync] Copied intro_session.jpg into images/
)

set "SRC_GITHUB=C:\Users\HP\.gemini\antigravity-ide\brain\52e51adf-fcd9-4d67-b5a9-2d78a9366505\.user_uploaded\media_1790702907184.jpg"
if not exist "%SRC_GITHUB%" set "SRC_GITHUB=C:\Users\HP\.gemini\antigravity-ide\brain\209f3122-2536-466b-947f-01af2718af77\.user_uploaded\media_1790505991595.jpg"
if exist "%SRC_GITHUB%" (
    copy /y "%SRC_GITHUB%" "images\github_session.jpg" >nul
    echo [Sync] Copied github_session.jpg into images/
)

echo [Sync] Syncing Principal photo (Dr. Shrinivasa Mayya D)...
set "SRC_PRINCIPAL=C:\Users\HP\.gemini\antigravity-ide\brain\52e51adf-fcd9-4d67-b5a9-2d78a9366505\.user_uploaded\media_1790705790687.jpg"
if exist "%SRC_PRINCIPAL%" (
    copy /y "%SRC_PRINCIPAL%" "images\principal_srinivasa_mayya.jpg" >nul
    copy /y "%SRC_PRINCIPAL%" "public\images\principal_srinivasa_mayya.jpg" >nul
    copy /y "%SRC_PRINCIPAL%" "dist\images\principal_srinivasa_mayya.jpg" >nul
    echo [Sync] Copied principal_srinivasa_mayya.jpg into images/
)

echo [Sync] Ensuring video file formats (hero-video.mp4, video.mp4)...
if exist "images\hero-video.mp4.mp4" (
    if not exist "images\hero-video.mp4" copy /y "images\hero-video.mp4.mp4" "images\hero-video.mp4" >nul
    if not exist "images\video.mp4" copy /y "images\hero-video.mp4.mp4" "images\video.mp4" >nul
)

echo [1/4] Setting remote URL to https://github.com/nidhishhhn-cmd/ML--CLUB-WEBSITE.git ...
git remote set-url origin https://github.com/nidhishhhn-cmd/ML--CLUB-WEBSITE.git 2>nul || git remote add origin https://github.com/nidhishhhn-cmd/ML--CLUB-WEBSITE.git

echo [2/4] Staging all files (.gitignore, index.html, images, intro, vercel.json, build scripts)...
git add .gitignore
git add -A

echo [3/4] Committing changes...
git commit -m "feat: update faculty cards layout with zero blank space, add inverted focus ring cursor, remove main site bg music, update gitignore" 2>nul

echo [4/4] Pushing branch main to GitHub...
git branch -M main
git push -u origin main

if %ERRORLEVEL% NEQ 0 (
    echo.
    echo [INFO] Remote had existing divergent commits. Force pushing...
    git push -u origin main --force
)

if %ERRORLEVEL% EQU 0 (
    echo.
    echo ========================================================
    echo  SUCCESS! Code pushed to GitHub:
    echo  https://github.com/nidhishhhn-cmd/ML--CLUB-WEBSITE
    echo.
    echo  If your Vercel project is linked to this GitHub repo,
    echo  Vercel will now automatically build and deploy your site!
    echo ========================================================
) else (
    echo.
    echo ========================================================
    echo  Push failed. Check your internet connection or GitHub login.
    echo ========================================================
)
pause
