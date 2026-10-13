# Deploy script for Matthew Veres's Portfolio (GitHub Pages)
# Runs the Jekyll build locally and deploys the static files directly to the gh-pages branch.

$ErrorActionPreference = "Stop"

Write-Host "========================================" -ForegroundColor Cyan
Write-Host "  Building Jekyll Production Site...    " -ForegroundColor Cyan
Write-Host "========================================" -ForegroundColor Cyan

# Run Jekyll production build in WSL Ubuntu
wsl -u root sh -c "cd /mnt/c/Users/thebe/Documents/guelph/misc/mveres01.github.io && JEKYLL_ENV=production bundle exec jekyll build"
if ($LASTEXITCODE -ne 0) {
    Write-Error "Jekyll build failed. Please check the output above."
    exit 1
}

# Ensure .nojekyll exists so GitHub Pages serves raw HTML/CSS/assets directly
New-Item -ItemType File -Path _site\.nojekyll -Force | Out-Null

Write-Host "`nDeploying to gh-pages branch..." -ForegroundColor Cyan

git -C _site init | Out-Null
git -C _site checkout -b gh-pages | Out-Null
git -C _site add -A | Out-Null
git -C _site commit -m "Deploy site to gh-pages from local build" | Out-Null
git -C _site remote add origin https://github.com/mveres01/mveres01.github.io.git | Out-Null
git -C _site push --force origin gh-pages

# Clean up temporary .git inside _site
Remove-Item -Recurse -Force _site\.git

Write-Host "`n============================================================" -ForegroundColor Green
Write-Host "  Successfully deployed!                                    " -ForegroundColor Green
Write-Host "  Live at: https://mveres01.github.io/                      " -ForegroundColor Green
Write-Host "============================================================" -ForegroundColor Green
