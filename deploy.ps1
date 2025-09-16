# ChartDash Deployment Script for Windows
Write-Host "🚀 Starting ChartDash deployment process..." -ForegroundColor Green

# Check if we're in the right directory
if (-not (Test-Path "package.json")) {
    Write-Host "❌ Error: package.json not found. Make sure you're in the project root directory." -ForegroundColor Red
    exit 1
}

# Install dependencies
Write-Host "📦 Installing dependencies..." -ForegroundColor Yellow
npm install

# Build the project
Write-Host "🔨 Building project for production..." -ForegroundColor Yellow
npm run build

# Check if build was successful
if ($LASTEXITCODE -eq 0) {
    Write-Host "✅ Build completed successfully!" -ForegroundColor Green
    Write-Host "📁 Built files are in the 'dist' directory" -ForegroundColor Cyan
    Write-Host ""
    Write-Host "🌐 Ready for deployment!" -ForegroundColor Green
    Write-Host "- You can deploy the 'dist' folder to any static hosting service" -ForegroundColor White
    Write-Host "- Or use 'npx vercel' to deploy to Vercel" -ForegroundColor White
    Write-Host "- Or push to GitHub and connect to Vercel for automatic deployments" -ForegroundColor White
} else {
    Write-Host "❌ Build failed. Please check the errors above." -ForegroundColor Red
    exit 1
}
