@echo off
echo ========================================================
echo   SYNCING VISIONARIES PHOTOS TO IMAGES FOLDER
echo ========================================================
echo.

set "SRC_INTRO=C:\Users\HP\.gemini\antigravity-ide\brain\52e51adf-fcd9-4d67-b5a9-2d78a9366505\.user_uploaded\media_1790703005599.jpg"
if not exist "%SRC_INTRO%" set "SRC_INTRO=C:\Users\HP\.gemini\antigravity-ide\brain\209f3122-2536-466b-947f-01af2718af77\.user_uploaded\media_1790505991581.jpg"

set "SRC_GITHUB=C:\Users\HP\.gemini\antigravity-ide\brain\52e51adf-fcd9-4d67-b5a9-2d78a9366505\.user_uploaded\media_1790702907184.jpg"
if not exist "%SRC_GITHUB%" set "SRC_GITHUB=C:\Users\HP\.gemini\antigravity-ide\brain\209f3122-2536-466b-947f-01af2718af77\.user_uploaded\media_1790505991595.jpg"

if not exist "images" mkdir "images"
if not exist "public\images" mkdir "public\images"
if not exist "dist\images" mkdir "dist\images"

copy /y "%SRC_INTRO%" "images\intro_session.jpg" >nul
copy /y "%SRC_INTRO%" "public\images\intro_session.jpg" >nul
copy /y "%SRC_INTRO%" "dist\images\intro_session.jpg" >nul

copy /y "%SRC_GITHUB%" "images\github_session.jpg" >nul
copy /y "%SRC_GITHUB%" "public\images\github_session.jpg" >nul
copy /y "%SRC_GITHUB%" "dist\images\github_session.jpg" >nul

if exist "images\hero-video.mp4.mp4" (
    if not exist "images\hero-video.mp4" copy /y "images\hero-video.mp4.mp4" "images\hero-video.mp4" >nul
    if not exist "images\video.mp4" copy /y "images\hero-video.mp4.mp4" "images\video.mp4" >nul
)

set "SRC_PRINCIPAL=C:\Users\HP\.gemini\antigravity-ide\brain\52e51adf-fcd9-4d67-b5a9-2d78a9366505\.user_uploaded\media_1790705790687.jpg"
if exist "%SRC_PRINCIPAL%" (
    copy /y "%SRC_PRINCIPAL%" "images\principal_srinivasa_mayya.jpg" >nul
    copy /y "%SRC_PRINCIPAL%" "public\images\principal_srinivasa_mayya.jpg" >nul
    copy /y "%SRC_PRINCIPAL%" "dist\images\principal_srinivasa_mayya.jpg" >nul
)

echo [SUCCESS] Synced:
echo   - images\principal_srinivasa_mayya.jpg (Dr. Shrinivasa Mayya D, Principal)
echo   - images\intro_session.jpg (Introduction to ML Club)
echo   - images\github_session.jpg (Session on Git and GitHub)
echo.
echo Refresh your browser tab to see the photos!
echo ========================================================
pause
