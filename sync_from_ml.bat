@echo off
echo ========================================================
echo  Syncing files from C:\ml to C:\ml2
echo ========================================================
echo.

if not exist "C:\ml\index.html" (
    echo [ERROR] C:\ml\index.html was not found!
    pause
    exit /b 1
)

echo [1/4] Copying index.html ...
copy /y "C:\ml\index.html" "C:\ml2\index.html"

echo [2/4] Copying styles and assets if present ...
if exist "C:\ml\index.css" copy /y "C:\ml\index.css" "C:\ml2\index.css"
if exist "C:\ml\hero-video.mp4" copy /y "C:\ml\hero-video.mp4" "C:\ml2\hero-video.mp4"
if exist "C:\ml\hero-video.mp4.mp4" copy /y "C:\ml\hero-video.mp4.mp4" "C:\ml2\hero-video.mp4.mp4"

echo [3/4] Copying folders (images, intro, assets) ...
if exist "C:\ml\images" xcopy /s /y /i /q "C:\ml\images" "C:\ml2\images"
if exist "C:\ml\intro" xcopy /s /y /i /q "C:\ml\intro" "C:\ml2\intro"
if exist "C:\ml\assets" xcopy /s /y /i /q "C:\ml\assets" "C:\ml2\assets"
if exist "C:\ml\public" xcopy /s /y /i /q "C:\ml\public" "C:\ml2\public"
if exist "C:\ml\src" xcopy /s /y /i /q "C:\ml\src" "C:\ml2\src"

echo [4/4] Sync complete!
echo ========================================================
echo  Successfully imported the entire site from C:\ml into C:\ml2!
echo ========================================================
pause
