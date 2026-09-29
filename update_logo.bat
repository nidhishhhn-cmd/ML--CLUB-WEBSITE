@echo off
echo ========================================================
echo         UPDATING WEBSITE LOGO (NAVATVA EMBLEM)
echo ========================================================
echo.

set "SRC_LOGO=C:\Users\HP\.gemini\antigravity-ide\brain\52e51adf-fcd9-4d67-b5a9-2d78a9366505\.user_uploaded\media_1790679439003.png"

if exist "%SRC_LOGO%" (
    echo [1/4] Copying logo to images\ml_club_logo.png ...
    copy /y "%SRC_LOGO%" "images\ml_club_logo.png" >nul
    echo [2/4] Copying logo to images\ml_club_logo.jpg ...
    copy /y "%SRC_LOGO%" "images\ml_club_logo.jpg" >nul
    
    if not exist "intro\assets" mkdir "intro\assets"
    echo [3/4] Copying logo to intro\assets\ml-club-logo.png ...
    copy /y "%SRC_LOGO%" "intro\assets\ml-club-logo.png" >nul
    echo [4/4] Copying logo to intro\assets\ml-club-logo.jpg ...
    copy /y "%SRC_LOGO%" "intro\assets\ml-club-logo.jpg" >nul
    
    if exist "dist\images" (
        copy /y "%SRC_LOGO%" "dist\images\ml_club_logo.png" >nul
        copy /y "%SRC_LOGO%" "dist\images\ml_club_logo.jpg" >nul
    )
    if exist "dist\intro\assets" (
        copy /y "%SRC_LOGO%" "dist\intro\assets\ml-club-logo.png" >nul
        copy /y "%SRC_LOGO%" "dist\intro\assets\ml-club-logo.jpg" >nul
    )
    echo.
    echo ========================================================
    echo  SUCCESS! NAVATVA logo successfully copied to all directories.
    echo ========================================================
) else (
    echo ERROR: Source logo file not found at %SRC_LOGO%
)

echo.
pause
