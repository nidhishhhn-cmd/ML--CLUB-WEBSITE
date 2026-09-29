@echo off
echo ========================================================
echo   SYNCING PRINCIPAL PHOTO (Dr. Shrinivasa Mayya D)
echo ========================================================
echo.

set "SRC=C:\Users\HP\.gemini\antigravity-ide\brain\52e51adf-fcd9-4d67-b5a9-2d78a9366505\.user_uploaded\media_1790705790687.jpg"

if not exist "%SRC%" (
    echo [ERROR] Source photo not found at:
    echo %SRC%
    pause
    exit /b 1
)

if not exist "images" mkdir "images"
if not exist "public\images" mkdir "public\images"
if not exist "dist\images" mkdir "dist\images"

copy /y "%SRC%" "images\principal_srinivasa_mayya.jpg" >nul
copy /y "%SRC%" "public\images\principal_srinivasa_mayya.jpg" >nul
copy /y "%SRC%" "dist\images\principal_srinivasa_mayya.jpg" >nul

echo [SUCCESS] Copied photo to:
echo   - images\principal_srinivasa_mayya.jpg
echo   - public\images\principal_srinivasa_mayya.jpg
echo   - dist\images\principal_srinivasa_mayya.jpg
echo.
echo Now refresh your browser (Ctrl + F5) to see the Principal's photo!
echo ========================================================
pause
