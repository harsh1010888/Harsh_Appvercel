#!/bin/bash

# ChartDash Deployment Script
echo "🚀 Starting ChartDash deployment process..."

# Check if we're in the right directory
if [ ! -f "package.json" ]; then
    echo "❌ Error: package.json not found. Make sure you're in the project root directory."
    exit 1
fi

# Install dependencies
echo "📦 Installing dependencies..."
npm install

# Build the project
echo "🔨 Building project for production..."
npm run build

# Check if build was successful
if [ $? -eq 0 ]; then
    echo "✅ Build completed successfully!"
    echo "📁 Built files are in the 'dist' directory"
    echo ""
    echo "🌐 Ready for deployment!"
    echo "- You can deploy the 'dist' folder to any static hosting service"
    echo "- Or use 'npx vercel' to deploy to Vercel"
    echo "- Or push to GitHub and connect to Vercel for automatic deployments"
else
    echo "❌ Build failed. Please check the errors above."
    exit 1
fi
