# E.S. College of Engineering and Technology - Official Website

[![React](https://img.shields.io/badge/React-19.2.3-blue.svg)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.8.2-blue.svg)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-6.2.0-purple.svg)](https://vitejs.dev/)
[![License](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)

Modern, responsive website for E.S. College of Engineering and Technology (ESCET), located in Villupuram, Tamil Nadu.

## 🎓 About ESCET

E.S. College of Engineering and Technology is a leading educational institution dedicated to nurturing future engineers. Approved by AICTE and affiliated to Anna University, we offer 7 engineering programs with 660 total seats.

## ✨ Features

- 🎨 Modern glassmorphism UI design
- 📱 Fully responsive across all devices
- ⚡ Lightning-fast performance with Vite
- 🤖 AI-powered campus navigator chatbot
- 🖼️ Dynamic image and video galleries
- 📧 Admission enquiry system
- 🔐 Admin dashboard for content management
- 🎯 SEO optimized

## 🛠️ Tech Stack

### Frontend

- **React 19.2.3** - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool
- **Tailwind CSS** - Styling
- **Framer Motion** - Animations
- **React Router** - Navigation
- **Lucide React** - Icons

### Backend

- **Node.js** - Runtime
- **Express** - Web framework
- **MongoDB** - Database
- **JWT** - Authentication
- **Bcrypt** - Password hashing
- **Nodemailer** - Email service

## 🚀 Quick Start

### Prerequisites

- Node.js 18+
- MongoDB (local or Atlas)
- npm or yarn

### Installation

1. **Clone the repository**

```bash
git clone https://github.com/subashkarthik/ESCET.git
cd ESCET
```

2. **Install frontend dependencies**

```bash
npm install
```

3. **Install backend dependencies**

```bash
cd backend
npm install
```

4. **Configure environment variables**

```bash
# Frontend - create .env.local
cp .env.example .env.local

# Backend - create .env
cd backend
cp .env.example .env
```

5. **Update environment variables**

- Add your MongoDB URI
- Add JWT secret
- Add email credentials (optional)
- Add Cloudinary credentials (optional)

### Running the Application

**Development mode:**

```bash
# Frontend (from root)
npm run dev

# Backend (from backend folder)
cd backend
npm run dev
```

**Production build:**

```bash
npm run build
npm run preview
```

The application will be available at:

- Frontend: http://localhost:3000
- Backend API: http://localhost:5000

## 📁 Project Structure

```
ESCET/
├── components/          # Reusable React components
├── pages/              # Page components
├── backend/            # Express backend
│   ├── config/        # Database configuration
│   ├── models/        # Mongoose models
│   ├── routes/        # API routes
│   └── middleware/    # Auth & error handling
├── public/            # Static assets
│   └── images/        # Image files
├── constants.tsx      # App constants & data
├── types.ts          # TypeScript types
└── App.tsx           # Main app component
```

## 🎯 Available Scripts

### Frontend

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build

### Backend

- `npm start` - Start production server
- `npm run dev` - Start with nodemon
- `npm run seed` - Seed database with admin user

## 🔑 Default Admin Credentials

```
Email: admin@escet.in
Password: Admin@123
```

**⚠️ Change these in production!**

## 📚 API Documentation

API endpoints are available at `/api`:

- `POST /api/auth/login` - User login
- `POST /api/auth/register` - Register new user (admin only)
- `GET /api/departments` - Get all departments
- `GET /api/news` - Get news/events
- `POST /api/enquiries` - Submit admission enquiry
- `POST /api/contact` - Submit contact form

Full API documentation: [BACKEND_ADMIN_SUMMARY.md](BACKEND_ADMIN_SUMMARY.md)

## 🤝 Contributing

We welcome contributions! Please see [CONTRIBUTING.md](CONTRIBUTING.md) for details.

## 📄 License

This project is licensed under the MIT License - see [LICENSE](LICENSE) file for details.

## 📞 Contact

**E.S. College of Engineering and Technology**

- 📍 NO.249/C, E.S.Nagar, NH-45, Villupuram - 605601
- 📞 +91 94867 22474
- 📧 admin@escet.in
- 🌐 www.escet.in

## 🙏 Acknowledgments

- Anna University for affiliation
- AICTE for approval
- All faculty and staff members
- Student community

---

**Made with ❤️ by ESCET Development Team**
