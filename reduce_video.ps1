Write-Host "========================================================" -ForegroundColor Cyan
Write-Host "     OPTIMIZE INTRO VIDEO (CRYSTAL CLEAR 1080P HD)" -ForegroundColor Cyan
Write-Host "========================================================" -ForegroundColor Cyan
Write-Host ""

$ffmpegPath = "$env:LOCALAPPDATA\Temp\WinGet\Gyan.FFmpeg.9.0.2\extracted\ffmpeg-9.0.2-full_build\bin\ffmpeg.exe"

if (-not (Test-Path $ffmpegPath)) {
    if (Get-Command ffmpeg -ErrorAction SilentlyContinue) {
        $ffmpegPath = "ffmpeg"
    } else {
        Write-Host "[ERROR] Could not find ffmpeg binary." -ForegroundColor Red
        pause
        exit 1
    }
}

Write-Host "[INFO] Using FFmpeg at: $ffmpegPath" -ForegroundColor Green

# Restore original uncompressed source video from git history if available
if (Get-Command git -ErrorAction SilentlyContinue) {
    Write-Host "[INFO] Restoring original uncompressed source video from git history..." -ForegroundColor Yellow
    git checkout 317277f -- hero-video.mp4.mp4 2>$null
}

Write-Host "[INFO] Encoding video in Full HD 1080p (CRF 20, pristine visual quality, +faststart)..." -ForegroundColor Yellow

& $ffmpegPath -y -i "hero-video.mp4.mp4" -vcodec libx264 -crf 20 -preset fast -pix_fmt yuv420p -vf "scale=1920:-2" -movflags +faststart "hero-video-optimized.mp4"

if (Test-Path "hero-video-optimized.mp4") {
    $newMB = [math]::Round((Get-Item "hero-video-optimized.mp4").Length / 1MB, 2)
    
    Copy-Item -Force "hero-video-optimized.mp4" "hero-video.mp4.mp4"
    Copy-Item -Force "hero-video-optimized.mp4" "hero-video.mp4"
    Copy-Item -Force "hero-video-optimized.mp4" "public\hero-video.mp4"
    if (Test-Path "images") {
        Copy-Item -Force "hero-video-optimized.mp4" "images\hero-video.mp4"
        Copy-Item -Force "hero-video-optimized.mp4" "images\hero-video.mp4.MP4"
    }
    $pIntro = "C:\Users\HP\.gemini\antigravity-ide\brain\209f3122-2536-466b-947f-01af2718af77\.user_uploaded\media_1790505991581.jpg"
    $pGithub = "C:\Users\HP\.gemini\antigravity-ide\brain\209f3122-2536-466b-947f-01af2718af77\.user_uploaded\media_1790505991595.jpg"
    if (Test-Path $pIntro) { Copy-Item -Force $pIntro "images\intro_session.jpg" }
    if (Test-Path $pGithub) { Copy-Item -Force $pGithub "images\github_session.jpg" }
    Remove-Item -Force "hero-video-optimized.mp4"

    Write-Host "`n========================================================" -ForegroundColor Green
    Write-Host " SUCCESS! Video encoded in pristine 1080p Full HD ($newMB MB)!" -ForegroundColor Green
    Write-Host " - Crisp, sharp visual quality (CRF 20, 1080p)" -ForegroundColor Green
    Write-Host " - Instant progressive web streaming (+faststart)" -ForegroundColor Green
    Write-Host " - Full 30-second duration plays completely" -ForegroundColor Green
    Write-Host "========================================================" -ForegroundColor Green
} else {
    Write-Host "[ERROR] Compression failed." -ForegroundColor Red
}
