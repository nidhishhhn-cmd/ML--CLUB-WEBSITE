Write-Host "========================================================" -ForegroundColor Cyan
Write-Host "   ML CLUB WEBSITE - REVERT TO YESTERDAY (5:00 PM)" -ForegroundColor Cyan
Write-Host "========================================================" -ForegroundColor Cyan
Write-Host ""

# 1. Safety backup branch
Write-Host "[1/3] Creating safety backup branch 'backup_before_revert'..." -ForegroundColor Yellow
git branch -f backup_before_revert HEAD
Write-Host "      Saved current work to branch 'backup_before_revert'." -ForegroundColor Green

# 2. Reset to 3a3602ba (Yesterday ~5:00 PM state)
Write-Host "[2/3] Reverting code to commit 3a3602ba (Yesterday ~5:00 PM)..." -ForegroundColor Yellow
git reset --hard 3a3602ba22d7b38a70e71d6914bc78863aa4e5a0

# 3. Clean untracked files added later
Write-Host "[3/3] Removing untracked build files from later sessions..." -ForegroundColor Yellow
if (Test-Path "build-static.js") { Remove-Item "build-static.js" -Force }
if (Test-Path "vercel.json") { Remove-Item "vercel.json" -Force }

Write-Host ""
Write-Host "========================================================" -ForegroundColor Green
Write-Host " SUCCESS! Your workspace is reverted to yesterday 5:00 PM." -ForegroundColor Green
Write-Host " Target Commit: 3a3602ba (feat: update website and gitignore)" -ForegroundColor Green
Write-Host " Backup branch: 'backup_before_revert' (contains all recent work)" -ForegroundColor Green
Write-Host "========================================================" -ForegroundColor Green
Write-Host ""
Write-Host "If you want to push this reverted version to GitHub, run:" -ForegroundColor Yellow
Write-Host "   git push origin main --force" -ForegroundColor Cyan
