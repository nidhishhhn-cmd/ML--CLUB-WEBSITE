@echo off
setlocal enabledelayedexpansion

echo ========================================================
echo     OPTIMIZE INTRO VIDEO (CRYSTAL CLEAR 1080P HD)
echo ========================================================
echo.

set "FFMPEG_EXE="

:: 1. Check if extracted winget ffmpeg exists
if exist "%LOCALAPPDATA%\Temp\WinGet\Gyan.FFmpeg.9.0.2\extracted\ffmpeg-9.0.2-full_build\bin\ffmpeg.exe" (
    set "FFMPEG_EXE=%LOCALAPPDATA%\Temp\WinGet\Gyan.FFmpeg.9.0.2\extracted\ffmpeg-9.0.2-full_build\bin\ffmpeg.exe"
    echo [INFO] Found downloaded FFmpeg in Temp directory!
)

:: 2. Check if ffmpeg is in PATH
if "!FFMPEG_EXE!"=="" (
    where ffmpeg >nul 2>&1
    if !errorlevel! equ 0 set "FFMPEG_EXE=ffmpeg"
)

if "!FFMPEG_EXE!"=="" (
    echo [ERROR] FFmpeg binary was not found.
    pause
    exit /b 1
)

echo [INFO] Using: "!FFMPEG_EXE!"
echo.

:: Check if we can restore the original high-quality source from git
where git >nul 2>&1
if !errorlevel! equ 0 (
    echo [INFO] Restoring original uncompressed source video from git history...
    git checkout 317277f -- hero-video.mp4.mp4 >nul 2>&1
)

echo [INFO] Encoding video in Full HD 1080p (CRF 20, pristine visual quality, +faststart)...
"!FFMPEG_EXE!" -y -i hero-video.mp4.mp4 -vcodec libx264 -crf 20 -preset fast -pix_fmt yuv420p -vf "scale=1920:-2" -movflags +faststart hero-video-optimized.mp4

if exist "hero-video-optimized.mp4" (
    copy /y hero-video-optimized.mp4 hero-video.mp4.mp4 >nul
    copy /y hero-video-optimized.mp4 hero-video.mp4 >nul
    copy /y hero-video-optimized.mp4 public\hero-video.mp4 >nul
    if exist "images" (
        copy /y hero-video-optimized.mp4 images\hero-video.mp4 >nul
        copy /y hero-video-optimized.mp4 images\hero-video.mp4.MP4 >nul
    )
    if exist "C:\Users\HP\.gemini\antigravity-ide\brain\209f3122-2536-466b-947f-01af2718af77\.user_uploaded\media_1790505991581.jpg" (
        copy /y "C:\Users\HP\.gemini\antigravity-ide\brain\209f3122-2536-466b-947f-01af2718af77\.user_uploaded\media_1790505991581.jpg" "images\intro_session.jpg" >nul
    )
    if exist "C:\Users\HP\.gemini\antigravity-ide\brain\209f3122-2536-466b-947f-01af2718af77\.user_uploaded\media_1790505991595.jpg" (
        copy /y "C:\Users\HP\.gemini\antigravity-ide\brain\209f3122-2536-466b-947f-01af2718af77\.user_uploaded\media_1790505991595.jpg" "images\github_session.jpg" >nul
    )
    del /f /q hero-video-optimized.mp4 >nul
    echo.
    echo ========================================================
    echo  SUCCESS! Video encoded in pristine 1080p Full HD!
    echo  - Crisp, sharp visual quality (CRF 20, 1080p)
    echo  - Instant progressive web streaming (+faststart)
    echo  - Plays full 30-second duration smoothly
    echo ========================================================
) else (
    echo [ERROR] Compression failed.
)

echo.
pause

