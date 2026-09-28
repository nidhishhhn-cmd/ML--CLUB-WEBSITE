Write-Host "========================================================" -ForegroundColor Cyan
Write-Host "        ML CLUB WEBSITE - GITHUB PUSH HELPER (main)" -ForegroundColor Cyan
Write-Host "========================================================" -ForegroundColor Cyan

# 1. Verify Git
if (-not (Get-Command git -ErrorAction SilentlyContinue)) {
    Write-Host "[ERROR] Git was not found in PATH. Please install Git from https://git-scm.com/" -ForegroundColor Red
    pause
    exit 1
}

# 2. Initialize git if not already initialized
if (-not (Test-Path ".git")) {
    Write-Host "[INFO] Initializing git repository at root..." -ForegroundColor Yellow
    git init
}

# 3. Configure remote origin
Write-Host "[INFO] Configuring remote origin..." -ForegroundColor Yellow
try {
    git remote remove origin 2>$null
} catch {}
git remote add origin https://github.com/nidhishhhn-cmd/ML--CLUB-WEBSITE.git

# 4. Stage all files (cleanly respects .gitignore)
Write-Host "[INFO] Staging all files..." -ForegroundColor Yellow
git add -A

# 5. Commit if changes exist
$status = git status --porcelain
if ($status) {
    Write-Host "[INFO] Committing changes..." -ForegroundColor Yellow
    git commit -m "deploy: mobile-responsive layout for site and intro, deployment configuration, and optimized gitignore"
} else {
    Write-Host "[INFO] Working tree clean. Ready to push." -ForegroundColor Cyan
}

# 6. Set active branch to main
Write-Host "[INFO] Setting active branch to 'main'..." -ForegroundColor Yellow
git branch -M main

# 7. Push to origin main
Write-Host "[INFO] Pushing main branch to GitHub origin..." -ForegroundColor Yellow
git push -u origin main

if ($LASTEXITCODE -eq 0) {
    Write-Host "`n========================================================" -ForegroundColor Green
    Write-Host " SUCCESS! Your code has been pushed to 'main'." -ForegroundColor Green
    Write-Host " View at: https://github.com/nidhishhhn-cmd/ML--CLUB-WEBSITE/tree/main" -ForegroundColor Green
    Write-Host "========================================================" -ForegroundColor Green
} else {
    Write-Host "`n========================================================" -ForegroundColor Yellow
    Write-Host " If push was rejected because remote has existing commits, run:" -ForegroundColor Yellow
    Write-Host "   git pull origin main --rebase" -ForegroundColor Cyan
    Write-Host "   git push -u origin main" -ForegroundColor Cyan
    Write-Host " Or if overwriting with current workspace:" -ForegroundColor Yellow
    Write-Host "   git push -u origin main --force" -ForegroundColor Cyan
    Write-Host "========================================================" -ForegroundColor Yellow
}
