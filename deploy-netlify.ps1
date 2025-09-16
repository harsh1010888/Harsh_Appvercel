# ChartDash Netlify Deployment Script
Write-Host "🌐 Starting ChartDash deployment to Netlify..." -ForegroundColor Green

# Check if we're in the right directory
if (-not (Test-Path "package.json")) {
    Write-Host "❌ Error: package.json not found. Make sure you're in the project root directory." -ForegroundColor Red
    exit 1
}

# Install dependencies
Write-Host "📦 Installing dependencies..." -ForegroundColor Yellow
npm install

if ($LASTEXITCODE -ne 0) {
    Write-Host "❌ Failed to install dependencies." -ForegroundColor Red
    exit 1
}

# Build the project
Write-Host "🔨 Building project for production..." -ForegroundColor Yellow
npm run build

# Check if build was successful
if ($LASTEXITCODE -eq 0) {
    Write-Host "✅ Build completed successfully!" -ForegroundColor Green
    Write-Host "📁 Built files are in the 'dist' directory" -ForegroundColor Cyan
    Write-Host ""
    Write-Host "🌐 Ready for Netlify deployment!" -ForegroundColor Green
    Write-Host ""
    Write-Host "Deployment Options:" -ForegroundColor Yellow
    Write-Host "1. 🚀 Manual Drag & Drop:" -ForegroundColor White
    Write-Host "   - Go to https://app.netlify.com/drop" -ForegroundColor White
    Write-Host "   - Drag and drop the 'dist' folder" -ForegroundColor White
    Write-Host ""
    Write-Host "2. 📱 Netlify CLI:" -ForegroundColor White
    Write-Host "   - Install: npm install -g netlify-cli" -ForegroundColor White
    Write-Host "   - Deploy: netlify deploy --prod --dir=dist" -ForegroundColor White
    Write-Host ""
    Write-Host "3. 🔄 Git Integration:" -ForegroundColor White
    Write-Host "   - Push to GitHub/GitLab" -ForegroundColor White
    Write-Host "   - Connect repository in Netlify dashboard" -ForegroundColor White
    Write-Host "   - Automatic deployments on push" -ForegroundColor White
} else {
    Write-Host "❌ Build failed. Please check the errors above." -ForegroundColor Red
    exit 1
}
