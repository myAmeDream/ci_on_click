#!/bin/bash

echo "================================================"
echo "CI on Click Extension - Verification Script"
echo "================================================"
echo ""

# Check if Node.js is installed
echo "1. Checking Node.js installation..."
if command -v node &> /dev/null; then
    echo "   ✓ Node.js version: $(node --version)"
else
    echo "   ✗ Node.js is not installed"
    exit 1
fi

# Check if npm is installed
echo "2. Checking npm installation..."
if command -v npm &> /dev/null; then
    echo "   ✓ npm version: $(npm --version)"
else
    echo "   ✗ npm is not installed"
    exit 1
fi

# Check if dependencies are installed
echo "3. Checking dependencies..."
if [ -d "node_modules" ]; then
    echo "   ✓ Dependencies are installed"
else
    echo "   ✗ Dependencies are not installed"
    echo "   → Run: npm install"
    exit 1
fi

# Check if extension is compiled
echo "4. Checking compilation..."
if [ -f "out/extension.js" ]; then
    echo "   ✓ Extension is compiled"
else
    echo "   ✗ Extension is not compiled"
    echo "   → Run: npm run compile"
    exit 1
fi

# Check if build.sh exists and is executable
echo "5. Checking demo build script..."
if [ -f "build.sh" ]; then
    if [ -x "build.sh" ]; then
        echo "   ✓ build.sh exists and is executable"
    else
        echo "   ⚠ build.sh exists but is not executable"
        echo "   → Run: chmod +x build.sh"
    fi
else
    echo "   ✗ build.sh does not exist"
fi

# Test build.sh commands
echo "6. Testing build.sh commands..."
if [ -x "build.sh" ]; then
    echo "   Testing: ./build.sh ut"
    ./build.sh ut > /dev/null 2>&1
    if [ $? -eq 0 ]; then
        echo "   ✓ build.sh ut works"
    else
        echo "   ✗ build.sh ut failed"
    fi
fi

echo ""
echo "================================================"
echo "Verification Complete!"
echo "================================================"
echo ""
echo "Next steps:"
echo "1. Open this project in VS Code"
echo "2. Press F5 to start debugging"
echo "3. Test the extension in the new window"
echo ""
echo "For detailed instructions, see QUICKSTART.md"
echo "================================================"
