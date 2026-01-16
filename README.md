# E.S. College of Engineering and Technology - Official Website

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)
[![React](https://img.shields.io/badge/React-19.2.3-61dafb.svg)](https://reactjs.org/)
[![Django](https://img.shields.io/badge/Django-5.0.1-092e20.svg)](https://www.djangoproject.com/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.8.2-3178c6.svg)](https://www.typescriptlang.org/)

Official website for E.S. College of Engineering and Technology, Villupuram. A modern, full-stack web application featuring a React + TypeScript frontend with glassmorphism design and a Django REST Framework backend.

## 🌟 Features

- **Modern UI/UX**: Premium glassmorphism design with smooth animations
- **25+ Pages**: Comprehensive information about the college
- **Admin Dashboard**: Secure admin panel for content management
- **RESTful API**: Django REST Framework backend with JWT authentication
- **Responsive Design**: Mobile-first approach for all devices
- **Fast Performance**: Optimized with Vite build system
- **Type Safety**: Full TypeScript implementation
- **AI Integration**: Google Gemini API integration for enhanced features

## 🏗️ Tech Stack

### Frontend

- **Framework**: React 19.2.3
- **Language**: TypeScript 5.8.2
- **Build Tool**: Vite 6.2.0
- **Routing**: React Router DOM 7.11.0
- **Animations**: Framer Motion 12.23.26
- **Icons**: Lucide React 0.562.0
- **AI**: Google GenAI 1.34.0

### Backend

- **Framework**: Django 5.0.1
- **API**: Django REST Framework 3.14.0
- **Authentication**: JWT (djangorestframework-simplejwt 5.3.1)
- **Database**: SQLite (development) / PostgreSQL (production ready)
- **CORS**: django-cors-headers 4.3.1
- **Image Processing**: Pillow 10.2.0

## 📁 Project Structure

```
ESCET/
├── 📄 Frontend (React + TypeScript)
│   ├── App.tsx                    # Main app with routing
│   ├── index.tsx                  # Entry point
│   ├── constants.tsx              # App constants
│   ├── types.ts                   # TypeScript types
│   ├── components/                # Reusable components
│   │   ├── Header.tsx
│   │   ├── Footer.tsx
│   │   ├── DepartmentCard.tsx
│   │   ├── NewsTimeline.tsx
│   │   ├── AdmissionEnquiryModal.tsx
│   │   └── ProtectedRoute.tsx
│   ├── pages/                     # 25 page components
│   │   ├── Home.tsx
│   │   ├── About.tsx
│   │   ├── Departments.tsx
│   │   ├── Contact.tsx
│   │   ├── admin/
│   │   │   ├── AdminLogin.tsx
│   │   │   └── AdminDashboard.tsx
│   │   └── ... (21 more pages)
│   ├── services/
│   │   └── api.ts                 # API service layer
│   └── public/
│       ├── images/
│       └── videos/
│
├── 🔧 Backend (Django REST API)
│   └── escet_backend/
│       ├── manage.py
│       ├── requirements.txt
│       ├── setup.bat              # Windows setup script
│       ├── start_server.bat       # Server start script
│       ├── db.sqlite3             # SQLite database
│       ├── escet_backend/         # Project settings
│       │   ├── settings.py
│       │   ├── urls.py
│       │   └── wsgi.py
│       └── apps/                  # 8 Django apps
│           ├── departments/
│           ├── news/
│           ├── facilities/
│           ├── gallery/
│           ├── management_team/
│           ├── enquiries/
│           ├── contact/
│           ├── scholarships/
│           └── authentication/
│
└── 📦 Configuration
    ├── package.json               # Frontend dependencies
    ├── tsconfig.json              # TypeScript config
    ├── vite.config.ts             # Vite config
    ├── .env.local                 # Frontend environment
    └── .gitignore                 # Git ignore rules
```

## 🚀 Quick Start

### Prerequisites

- **Node.js**: v18.0.0 or higher
- **Python**: 3.11 or higher
- **Git**: Latest version
- **npm**: Comes with Node.js

### Installation

#### 1. Clone the Repository

```bash
git clone https://github.com/subashkarthik/ESCET.git
cd ESCET
```

#### 2. Frontend Setup

```bash
# Install dependencies
npm install

# Create environment file
# Create .env.local in the root directory with:
# GEMINI_API_KEY=your_gemini_api_key_here

# Start development server
npm run dev
```

The frontend will be available at `http://localhost:3000`

#### 3. Backend Setup

```bash
# Navigate to backend directory
cd escet_backend

# Create virtual environment
python -m venv venv

# Activate virtual environment
# On Windows:
venv\Scripts\activate
# On macOS/Linux:
source venv/bin/activate

# Install dependencies
pip install -r requirements.txt

# Create .env file (copy from .env.example)
# Edit escet_backend/.env with your settings

# Run migrations
python manage.py migrate

# Create superuser (for admin access)
python manage.py createsuperuser

# Start development server
python manage.py runserver
```

The backend API will be available at `http://localhost:8000`

**Or use the Windows batch scripts:**

```bash
cd escet_backend
setup.bat          # One-time setup
start_server.bat   # Start the server
```

## 💻 Development

### Frontend Development

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Run linter
npm run lint
```

### Backend Development

```bash
cd escet_backend
venv\Scripts\activate  # Activate virtual environment

# Run development server
python manage.py runserver

# Create new migrations
python manage.py makemigrations

# Apply migrations
python manage.py migrate

# Access Django admin
# Navigate to http://localhost:8000/admin

# Run Django shell
python manage.py shell

# Seed sample data
python manage.py seed_data
```

## 🔌 API Documentation

### Base URL

```
http://localhost:8000/api
```

### Authentication

JWT-based authentication. Include token in headers:

```
Authorization: Bearer <access_token>
```

### Endpoints

#### Public Endpoints

| Endpoint                         | Method | Description              |
| -------------------------------- | ------ | ------------------------ |
| `/api/departments/`              | GET    | List all departments     |
| `/api/departments/{id}/`         | GET    | Get department details   |
| `/api/news/`                     | GET    | List news items          |
| `/api/news/?category={category}` | GET    | Filter news by category  |
| `/api/facilities/`               | GET    | List facilities          |
| `/api/gallery/images/`           | GET    | Get gallery images       |
| `/api/gallery/videos/`           | GET    | Get gallery videos       |
| `/api/management/`               | GET    | Get management team      |
| `/api/scholarships/`             | GET    | List scholarships        |
| `/api/enquiries/`                | POST   | Submit admission enquiry |
| `/api/contact/`                  | POST   | Submit contact form      |

#### Authentication Endpoints

| Endpoint                   | Method | Description          |
| -------------------------- | ------ | -------------------- |
| `/api/auth/login/`         | POST   | Admin login          |
| `/api/auth/logout/`        | POST   | Admin logout         |
| `/api/auth/token/refresh/` | POST   | Refresh access token |

### Example API Calls

**Login:**

```javascript
const response = await fetch("http://localhost:8000/api/auth/login/", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({
    username: "admin",
    password: "your_password",
  }),
});
```

**Get Departments:**

```javascript
const response = await fetch("http://localhost:8000/api/departments/");
const departments = await response.json();
```

**Submit Enquiry:**

```javascript
const response = await fetch("http://localhost:8000/api/enquiries/", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({
    first_name: "John",
    email: "john@example.com",
    phone: "1234567890",
    department: "CSE",
    comments: "Interested in admission",
  }),
});
```

## 📄 Available Pages

1. **Home** - Landing page with hero section
2. **About** - College information
3. **Vision** - Vision statement
4. **Mission** - Mission statement
5. **College Profile** - Detailed profile
6. **Chairman Message** - Message from chairman
7. **Principal Message** - Message from principal
8. **Departments** - List of departments
9. **Department Detail** - Individual department info
10. **Courses Offered** - Available courses
11. **Admission Overview** - Admission information
12. **Admission Procedure** - Step-by-step guide
13. **Eligibility Criteria** - Eligibility requirements
14. **Facilities** - Campus facilities
15. **Campus Life** - Student life
16. **Activities** - College activities
17. **Gallery** - Photo gallery
18. **Image Gallery** - Image collection
19. **Video Gallery** - Video collection
20. **Scholarship** - Scholarship information
21. **Mandatory Disclosure** - Legal disclosures
22. **AICTE EOA** - AICTE approval details
23. **Organization Chart** - College hierarchy
24. **Contact** - Contact information
25. **Admin Login** - Admin authentication
26. **Admin Dashboard** - Admin panel

## 🎨 Design System

The website uses a modern **glassmorphism** design system with:

- **Glass Effects**: Frosted glass backgrounds with blur
- **Smooth Animations**: Framer Motion for fluid transitions
- **Gradient Accents**: Modern color gradients
- **Responsive Layout**: Mobile-first design
- **Dark Mode Support**: Ready for dark theme
- **Accessibility**: WCAG compliant

## 🔒 Security

- JWT-based authentication
- CORS protection
- CSRF protection
- SQL injection prevention (Django ORM)
- XSS protection
- Secure password hashing
- Environment variable protection

## 🌐 Environment Variables

### Frontend (.env.local)

```env
GEMINI_API_KEY=your_gemini_api_key_here
```

### Backend (escet_backend/.env)

```env
SECRET_KEY=your-secret-key-here
DEBUG=True
DATABASE_ENGINE=django.db.backends.sqlite3
DATABASE_NAME=db.sqlite3
CORS_ALLOWED_ORIGINS=http://localhost:5173,http://localhost:3000
JWT_ACCESS_TOKEN_LIFETIME=60
JWT_REFRESH_TOKEN_LIFETIME=1440
```

## 📦 Build & Deployment

### Frontend Production Build

```bash
npm run build
```

Output will be in the `dist/` directory. Deploy to:

- Vercel
- Netlify
- GitHub Pages
- Any static hosting service

### Backend Deployment

1. **Update settings for production:**

   - Set `DEBUG=False`
   - Generate secure `SECRET_KEY`
   - Configure PostgreSQL database
   - Set allowed hosts
   - Configure static/media file serving

2. **Collect static files:**

   ```bash
   python manage.py collectstatic
   ```

3. **Deploy to:**
   - Heroku
   - Railway
   - DigitalOcean
   - AWS EC2
   - Any WSGI-compatible hosting

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👥 Team

**ESCET Development Team**

- Project Repository: [github.com/subashkarthik/ESCET](https://github.com/subashkarthik/ESCET)

## 📞 Support

For support, email: contact@escet.edu.in

## 🙏 Acknowledgments

- React Team for the amazing framework
- Django Team for the robust backend framework
- Framer Motion for smooth animations
- Lucide for beautiful icons
- All contributors and supporters

---

**Made with ❤️ for E.S. College of Engineering and Technology**
