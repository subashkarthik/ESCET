@echo off
echo ========================================
echo    ESCET Backend Server Startup
echo ========================================
echo.

REM Check if node_modules exists
if not exist "node_modules\" (
    echo [INFO] Installing dependencies...
    call npm install
    echo.
)

REM Check if .env exists
if not exist ".env" (
    echo [WARNING] .env file not found!
    echo [INFO] Creating from .env.example...
    copy .env.example .env
    echo.
    echo [IMPORTANT] Please edit .env file with your configuration!
    echo Press any key to open .env file...
    pause > nul
    notepad .env
    echo.
)

REM Ask if user wants to seed database
echo Do you want to seed the database? (Y/N)
set /p SEED_DB=
if /i "%SEED_DB%"=="Y" (
    echo [INFO] Seeding database...
    call npm run seed
    echo.
)

echo [INFO] Starting development server...
echo [INFO] Server will run on http://localhost:5000
echo [INFO] Press Ctrl+C to stop the server
echo.

call npm run dev
