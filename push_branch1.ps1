Write-Host "========================================================" -ForegroundColor Cyan
Write-Host "      ML CLUB WEBSITE - GITHUB PUSH HELPER (branch1)" -ForegroundColor Cyan
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

# 6. Set active branch to branch1
Write-Host "[INFO] Setting active branch to 'branch1'..." -ForegroundColor Yellow
git branch -M branch1

# 7. Push to origin branch1
Write-Host "[INFO] Pushing branch1 to GitHub origin..." -ForegroundColor Yellow
git push -u origin branch1

if ($LASTEXITCODE -eq 0) {
    Write-Host "`n========================================================" -ForegroundColor Green
    Write-Host " SUCCESS! Your code has been pushed to 'branch1'." -ForegroundColor Green
    Write-Host " View at: https://github.com/nidhishhhn-cmd/ML--CLUB-WEBSITE/tree/branch1" -ForegroundColor Green
    Write-Host "========================================================" -ForegroundColor Green
} else {
    Write-Host "`n========================================================" -ForegroundColor Red
    Write-Host " Git push exited with code $LASTEXITCODE." -ForegroundColor Red
    Write-Host " If authentication is required, log in with your GitHub PAT, SSH, or 'gh auth login'." -ForegroundColor Red
    Write-Host "========================================================" -ForegroundColor Red
}
