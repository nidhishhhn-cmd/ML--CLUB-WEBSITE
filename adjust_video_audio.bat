@echo off
setlocal enabledelayedexpansion

echo ========================================================
echo   ML CLUB - LOWER INTRO VIDEO BG MUSIC (FFMPEG)
echo ========================================================
echo.

set "FFMPEG="
set "GYAN=%LOCALAPPDATA%\Temp\WinGet\Gyan.FFmpeg.9.0.2\extracted\ffmpeg-9.0.2-full_build\bin\ffmpeg.exe"

if exist "%GYAN%" (
    set "FFMPEG=%GYAN%"
) else (
    where ffmpeg >nul 2>&1
    if !ERRORLEVEL! equ 0 set "FFMPEG=ffmpeg"
)

if "!FFMPEG!"=="" (
    echo [INFO] FFmpeg not found in path. Browser-level volume has already been
    echo        set to low (25%%) in index.html and intro/index.html.
    echo.
    pause
    exit /b 0
)

echo [INFO] Found FFmpeg at: "!FFMPEG!"
echo [INFO] Processing images\hero-video.mp4.mp4 ...
echo [INFO] Lowering background music by -16dB while boosting breaking block SFX by +10dB...

if exist "images\hero-video.mp4.mp4" (
    set "INPUT_VID=images\hero-video.mp4.mp4"
) else if exist "images\hero-video.mp4" (
    set "INPUT_VID=images\hero-video.mp4"
) else if exist "images\video.mp4" (
    set "INPUT_VID=images\video.mp4"
) else (
    echo [ERROR] No video found in images\ folder.
    pause
    exit /b 1
)

"!FFMPEG!" -y -i "!INPUT_VID!" -c:v copy -af "equalizer=f=350:width_type=h:width=250:g=-16,equalizer=f=800:width_type=h:width=400:g=-14,equalizer=f=3300:width_type=h:width=1200:g=10,equalizer=f=6200:width_type=h:width=2000:g=8,volume=0.55" "images\hero-video-lowbg.mp4"

if exist "images\hero-video-lowbg.mp4" (
    copy /y "images\hero-video-lowbg.mp4" "images\hero-video.mp4.mp4" >nul
    copy /y "images\hero-video-lowbg.mp4" "images\hero-video.mp4" >nul
    copy /y "images\hero-video-lowbg.mp4" "images\video.mp4" >nul
    if not exist "public" mkdir "public"
    copy /y "images\hero-video-lowbg.mp4" "public\hero-video.mp4" >nul
    del /f /q "images\hero-video-lowbg.mp4" >nul
    echo.
    echo ========================================================
    echo  SUCCESS! Video audio track updated:
    echo  - Background music lowered significantly (-16dB)
    echo  - Breaking block sound effects boosted (+10dB)
    echo  - Visual 1080p stream untouched (-c:v copy)
    echo ========================================================
) else (
    echo [WARN] FFmpeg processing was skipped.
)

echo.
pause
