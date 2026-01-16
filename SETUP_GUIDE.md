# ESCET Project - Quick Setup Guide

This guide will help you get the ESCET project up and running in minutes.

## 📋 Prerequisites Checklist

Before you begin, ensure you have:

- ✅ **Node.js** v18.0.0 or higher ([Download](https://nodejs.org/))
- ✅ **Python** 3.11 or higher ([Download](https://www.python.org/))
- ✅ **Git** ([Download](https://git-scm.com/))
- ✅ **Code Editor** (VS Code recommended)

## 🚀 5-Minute Setup

### Step 1: Clone the Repository

```bash
git clone https://github.com/subashkarthik/ESCET.git
cd ESCET
```

### Step 2: Frontend Setup (2 minutes)

```bash
# Install dependencies
npm install

# Create environment file
echo GEMINI_API_KEY=your_api_key_here > .env.local

# Start the frontend
npm run dev
```

✅ **Frontend running at:** http://localhost:3000

### Step 3: Backend Setup (3 minutes)

**Option A: Using Windows Batch Scripts (Recommended)**

```bash
cd escet_backend
setup.bat          # One-time setup (installs everything)
start_server.bat   # Start the server
```

**Option B: Manual Setup**

```bash
cd escet_backend

# Create virtual environment
python -m venv venv

# Activate virtual environment
venv\Scripts\activate

# Install dependencies
pip install -r requirements.txt

# Copy environment file
copy .env.example .env

# Run migrations
python manage.py migrate

# Create admin user
python manage.py createsuperuser

# Start server
python manage.py runserver
```

✅ **Backend running at:** http://localhost:8000

## 🎯 Quick Test

1. **Frontend**: Open http://localhost:3000
2. **Backend API**: Open http://localhost:8000/api/departments/
3. **Admin Panel**: Open http://localhost:8000/admin

## 🔑 Environment Variables

### Frontend (.env.local)

```env
GEMINI_API_KEY=your_gemini_api_key_here
```

Get your Gemini API key from: https://makersuite.google.com/app/apikey

### Backend (escet_backend/.env)

The `.env` file is created automatically by `setup.bat`. Default values:

```env
SECRET_KEY=django-insecure-dev-key-change-this-in-production-12345
DEBUG=True
DATABASE_ENGINE=django.db.backends.sqlite3
DATABASE_NAME=db.sqlite3
CORS_ALLOWED_ORIGINS=http://localhost:5173,http://localhost:3000,http://127.0.0.1:5173
JWT_ACCESS_TOKEN_LIFETIME=60
JWT_REFRESH_TOKEN_LIFETIME=1440
```

## 🛠️ Common Commands

### Frontend

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run preview  # Preview production build
npm run lint     # Run linter
```

### Backend

```bash
cd escet_backend
venv\Scripts\activate                  # Activate virtual environment

python manage.py runserver             # Start server
python manage.py makemigrations        # Create migrations
python manage.py migrate               # Apply migrations
python manage.py createsuperuser       # Create admin user
python manage.py shell                 # Django shell
python manage.py seed_data             # Seed sample data
```

## 🐛 Troubleshooting

### PowerShell Script Execution Error

If you get "running scripts is disabled" error:

```powershell
# Run PowerShell as Administrator
Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser
```

### Port Already in Use

**Frontend (Port 3000):**

```bash
# Kill process on Windows
netstat -ano | findstr :3000
taskkill /PID <PID> /F
```

**Backend (Port 8000):**

```bash
# Kill process on Windows
netstat -ano | findstr :8000
taskkill /PID <PID> /F
```

### Module Not Found Errors

**Frontend:**

```bash
rm -rf node_modules package-lock.json
npm install
```

**Backend:**

```bash
cd escet_backend
venv\Scripts\activate
pip install -r requirements.txt --upgrade
```

### Database Issues

```bash
cd escet_backend
venv\Scripts\activate

# Reset database (WARNING: Deletes all data)
del db.sqlite3
python manage.py migrate
python manage.py createsuperuser
```

## 📚 Next Steps

1. **Explore the Code**: Check out the project structure in README.md
2. **Read API Docs**: See available endpoints in README.md
3. **Customize**: Update content in the frontend pages
4. **Add Data**: Use Django admin to add departments, news, etc.
5. **Deploy**: Follow deployment guide in README.md

## 🆘 Need Help?

- 📖 **Full Documentation**: See [README.md](README.md)
- 📝 **Changelog**: See [CHANGELOG.md](CHANGELOG.md)
- 🐛 **Issues**: [GitHub Issues](https://github.com/subashkarthik/ESCET/issues)
- 📧 **Email**: contact@escet.edu.in

## ✅ Verification Checklist

After setup, verify everything works:

- [ ] Frontend loads at http://localhost:3000
- [ ] Backend API responds at http://localhost:8000/api/
- [ ] Admin panel accessible at http://localhost:8000/admin
- [ ] No console errors in browser
- [ ] API calls work (check Network tab)
- [ ] Can navigate between pages
- [ ] Forms submit successfully

## 🎉 You're Ready!

Your ESCET development environment is now set up and running!

**Happy Coding! 🚀**

---

_Setup time: ~5 minutes | Last updated: 2026-01-16_
