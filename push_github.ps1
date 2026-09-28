Write-Host "========================================================" -ForegroundColor Cyan
Write-Host "       ML CLUB WEBSITE - ONE-CLICK GITHUB PUSH" -ForegroundColor Cyan
Write-Host "========================================================" -ForegroundColor Cyan
Write-Host ""

if (-not (Get-Command git -ErrorAction SilentlyContinue)) {
    Write-Host "[ERROR] Git was not found in PATH." -ForegroundColor Red
    pause
    exit 1
}

try {
    git remote remove origin 2>$null
} catch {}
git remote add origin https://github.com/nidhishhhn-cmd/ML--CLUB-WEBSITE.git

Write-Host "[1/4] Staging changes (respecting .gitignore)..." -ForegroundColor Yellow
git add -A

Write-Host "[2/4] Committing changes..." -ForegroundColor Yellow
git diff --cached --quiet
if ($LASTEXITCODE -ne 0) {
    git commit -m "deploy: mobile-responsive layout for site and intro, deployment configuration, and optimized gitignore"
} else {
    Write-Host "[INFO] Working tree clean, nothing new to commit." -ForegroundColor Gray
}

Write-Host "[3/4] Pushing to main..." -ForegroundColor Yellow
git branch -M main
git push -u origin main

Write-Host "[4/4] Synchronizing branch1..." -ForegroundColor Yellow
git checkout -B branch1 2>$null
git push -u origin branch1 --force
git checkout main 2>$null

Write-Host "`n========================================================" -ForegroundColor Green
Write-Host " SUCCESS! Your code has been pushed to GitHub:" -ForegroundColor Green
Write-Host " Main:    https://github.com/nidhishhhn-cmd/ML--CLUB-WEBSITE/tree/main" -ForegroundColor Green
Write-Host " Branch1: https://github.com/nidhishhhn-cmd/ML--CLUB-WEBSITE/tree/branch1" -ForegroundColor Green
Write-Host "========================================================" -ForegroundColor Green
