$src = "C:\Users\HP\.gemini\antigravity-ide\brain\52e51adf-fcd9-4d67-b5a9-2d78a9366505\.user_uploaded\media_1790679439003.png"

if (Test-Path $src) {
    Write-Host "[1/4] Copying logo to images\ml_club_logo.png..." -ForegroundColor Cyan
    Copy-Item $src "images\ml_club_logo.png" -Force
    Write-Host "[2/4] Copying logo to images\ml_club_logo.jpg..." -ForegroundColor Cyan
    Copy-Item $src "images\ml_club_logo.jpg" -Force
    
    if (-not (Test-Path "intro\assets")) {
        New-Item -ItemType Directory -Path "intro\assets" -Force | Out-Null
    }
    Write-Host "[3/4] Copying logo to intro\assets\ml-club-logo.png..." -ForegroundColor Cyan
    Copy-Item $src "intro\assets\ml-club-logo.png" -Force
    Write-Host "[4/4] Copying logo to intro\assets\ml-club-logo.jpg..." -ForegroundColor Cyan
    Copy-Item $src "intro\assets\ml-club-logo.jpg" -Force

    if (Test-Path "dist\images") {
        Copy-Item $src "dist\images\ml_club_logo.png" -Force
        Copy-Item $src "dist\images\ml_club_logo.jpg" -Force
    }
    if (Test-Path "dist\intro\assets") {
        Copy-Item $src "dist\intro\assets\ml-club-logo.png" -Force
        Copy-Item $src "dist\intro\assets\ml-club-logo.jpg" -Force
    }
    Write-Host "`nSUCCESS: NAVATVA logo successfully updated across all website directories!" -ForegroundColor Green
} else {
    Write-Warning "Source logo file not found at $src"
}
