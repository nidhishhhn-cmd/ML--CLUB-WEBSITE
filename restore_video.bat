@echo off
setlocal enabledelayedexpansion

echo ========================================================
echo     ML CLUB - RESTORE 27-SECOND INTRO VIDEO
echo ========================================================
echo.

set "FOUND="

:: 1. Search for video.mp4 in C:\ml or Downloads or Desktop
echo [1/3] Searching for video.mp4 in common folders...

if exist "C:\ml\images\video.mp4" (
    set "FOUND=C:\ml\images\video.mp4"
) else if exist "C:\ml\images\hero-video.mp4" (
    set "FOUND=C:\ml\images\hero-video.mp4"
) else if exist "C:\ml\video.mp4" (
    set "FOUND=C:\ml\video.mp4"
) else if exist "%USERPROFILE%\Downloads\video.mp4" (
    set "FOUND=%USERPROFILE%\Downloads\video.mp4"
) else if exist "%USERPROFILE%\Desktop\video.mp4" (
    set "FOUND=%USERPROFILE%\Desktop\video.mp4"
)

if not "!FOUND!"=="" (
    echo [INFO] Found video at: "!FOUND!"
    echo Copying to images\video.mp4 and images\hero-video.mp4.MP4 ...
    copy /y "!FOUND!" "images\video.mp4" >nul
    copy /y "!FOUND!" "images\hero-video.mp4.MP4" >nul
    copy /y "!FOUND!" "images\hero-video.mp4" >nul
    goto :success
)

:: 2. If not found in external folders, restore from Git history (branch backup_before_revert or commit 36c8452 / e2a7de7 / 317277f)
echo [2/3] Checking Git history for original 27-30s Full HD video...
where git >nul 2>&1
if %ERRORLEVEL% equ 0 (
    git checkout backup_before_revert -- hero-video.mp4.mp4 2>nul
    if not exist "hero-video.mp4.mp4" (
        git checkout e2a7de7 -- hero-video.mp4.mp4 2>nul
    )
    if not exist "hero-video.mp4.mp4" (
        git checkout 317277f -- hero-video.mp4.mp4 2>nul
    )
    
    if exist "hero-video.mp4.mp4" (
        echo [INFO] Successfully restored full video from Git history!
        copy /y hero-video.mp4.mp4 images\hero-video.mp4.MP4 >nul
        copy /y hero-video.mp4.mp4 images\video.mp4 >nul
        copy /y hero-video.mp4.mp4 images\hero-video.mp4 >nul
        del /f /q hero-video.mp4.mp4 >nul
        goto :success
    )
)

:success
echo.
echo ========================================================
if exist "images\hero-video.mp4.MP4" (
    echo  SUCCESS! Video is ready in images\ folder!
    echo  - images\hero-video.mp4.MP4
    echo  - images\video.mp4
    echo.
    echo  Now refresh http://localhost:5173/intro/ or intro/index.html!
) else (
    echo  Could not automatically find the 27s video.
    echo  Please copy your 27-second video file to:
    echo     c:\ml2\images\video.mp4
)
echo ========================================================
echo.
pause
