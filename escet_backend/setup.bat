@echo off
echo ========================================
echo ESCET Django Backend - Quick Setup
echo ========================================
echo.

echo Step 1: Creating virtual environment...
python -m venv venv
if errorlevel 1 (
    echo ERROR: Failed to create virtual environment
    pause
    exit /b 1
)

echo Step 2: Activating virtual environment...
call venv\Scripts\activate
if errorlevel 1 (
    echo ERROR: Failed to activate virtual environment
    pause
    exit /b 1
)

echo Step 3: Installing dependencies...
pip install -r requirements.txt
if errorlevel 1 (
    echo ERROR: Failed to install dependencies
    pause
    exit /b 1
)

echo Step 4: Running migrations...
python manage.py makemigrations
python manage.py migrate
if errorlevel 1 (
    echo ERROR: Failed to run migrations
    pause
    exit /b 1
)

echo Step 5: Seeding initial data...
python manage.py seed_data
if errorlevel 1 (
    echo ERROR: Failed to seed data
    pause
    exit /b 1
)

echo.
echo ========================================
echo Setup completed successfully!
echo ========================================
echo.
echo To start the server, run:
echo   python manage.py runserver
echo.
echo Admin Panel: http://localhost:8000/admin/
echo   Username: admin
echo   Password: admin123
echo.
echo API Base URL: http://localhost:8000/api/
echo.
pause
