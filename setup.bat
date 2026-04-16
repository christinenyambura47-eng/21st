@echo off
REM 21st Electronics - Project Setup Script for Windows

echo ================================
echo 21st Electronics Setup
echo ================================
echo.

REM Setup Backend
echo 📦 Setting up Backend...
cd backend
echo Installing backend dependencies...
call npm install
echo.

REM Create .env if not exists
if not exist .env (
    echo Creating .env file (please update with your Gmail credentials)...
    copy .env.example .env
)

echo ✅ Backend setup complete!
echo.
echo Backend Configuration:
echo - Edit backend\.env with your Gmail credentials
echo - SMTP_USER: your-email@gmail.com
echo - SMTP_PASSWORD: your-app-password
echo.

REM Setup Frontend
echo 📱 Setting up Frontend...
cd ..\twentyfirst-connect
echo Installing frontend dependencies...
call npm install
echo.

REM Create .env if not exists
if not exist .env (
    echo Creating .env file...
    copy .env.example .env
)

echo ✅ Frontend setup complete!
echo.

echo ================================
echo Setup Complete! ✨
echo ================================
echo.
echo To start development:
echo.
echo Terminal 1 (Backend):
echo   cd backend
echo   npm run dev
echo.
echo Terminal 2 (Frontend):
echo   cd twentyfirst-connect
echo   npm run dev
echo.
echo Frontend will be available at: http://localhost:5173
echo Backend will be available at: http://localhost:5000
echo.
echo 📧 Before running, ensure:
echo    1. Gmail 2-Step Verification is enabled
echo    2. Gmail App Password is generated
echo    3. Backend .env is updated with credentials
echo.
pause
