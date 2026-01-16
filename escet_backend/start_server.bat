@echo off
echo Starting ESCET Django Backend Server...
echo.

REM Check if virtual environment exists
if not exist "venv\Scripts\activate.bat" (
    echo ERROR: Virtual environment not found!
    echo Please run setup.bat first.
    pause
    exit /b 1
)

REM Activate virtual environment
call venv\Scripts\activate

REM Start Django server
echo Server starting at http://localhost:8000/
echo.
echo Press Ctrl+C to stop the server
echo.
python manage.py runserver

pause
