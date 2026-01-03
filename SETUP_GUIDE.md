# 🚀 Complete Setup Guide - ESCET Website with Backend & Admin

## 📋 Prerequisites

Before starting, ensure you have:
- ✅ **Node.js** v18+ (Download: https://nodejs.org)
- ✅ **MongoDB** (Download: https://www.mongodb.com/try/download/community)
  - OR use MongoDB Atlas (cloud): https://www.mongodb.com/cloud/atlas
- ✅ **Git** (optional): https://git-scm.com

---

## 🎯 Step-by-Step Setup

### **PART 1: Backend Setup**

#### 1. Navigate to Backend Directory
```powershell
cd d:\ESCET\backend
```

#### 2. Install Dependencies
```powershell
npm install
```

Expected packages (15+):
- express, mongoose, cors, dotenv
- bcryptjs, jsonwebtoken
- nodemailer, multer, cloudinary
- helmet, morgan, express-validator

#### 3. Configure Environment Variables
Create `.env` file:
```powershell
# Copy from example
Copy-Item .env.example .env

# Edit with notepad
notepad .env
```

**Minimum Required Configuration:**
```env
PORT=5000
NODE_ENV=development

# Local MongoDB
MONGODB_URI=mongodb://localhost:27017/escet_college

# JWT Secret (change this!)
JWT_SECRET=mySecretKey123!ChangeThis

# Email (Gmail example)
EMAIL_HOST=smtp.gmail.com
EMAIL_PORT=587
EMAIL_USER=your_email@gmail.com
EMAIL_PASSWORD=your_app_password
EMAIL_FROM=ESCET College <noreply@escet.in>

# Frontend URL
FRONTEND_URL=http://localhost:3000

# Admin Credentials
ADMIN_EMAIL=admin@escet.in
ADMIN_PASSWORD=Admin@123
```

#### 4. Start MongoDB

**Option A: Local MongoDB (Windows)**
```powershell
# Start MongoDB service
net start MongoDB

# Or run manually in new terminal
mongod --dbpath C:\data\db
```

**Option B: MongoDB Atlas (Cloud - Recommended)**
1. Sign up: https://www.mongodb.com/cloud/atlas
2. Create FREE cluster
3. Get connection string
4. Update `.env`:
   ```env
   MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/escet_college
   ```

#### 5. Seed the Database
```powershell
npm run seed
```

**Expected Output:**
```
✅ Connected to MongoDB
🗑️  Cleared existing data
👤 Created admin user: admin@escet.in
🏫 Seeded 7 departments
📰 Seeded 3 news items

✅ Database seeded successfully!

📋 Login Credentials:
   Email: admin@escet.in
   Password: Admin@123
```

#### 6. Start Backend Server
```powershell
npm run dev
```

**Expected Output:**
```
🚀 Server running in development mode on port 5000
✅ MongoDB Connected: localhost
```

**Test Backend:**
Open browser: http://localhost:5000/api/health

Should see:
```json
{
  "success": true,
  "message": "ESCET Backend API is running",
  "timestamp": "2025-12-29T..."
}
```

---

### **PART 2: Frontend Setup**

#### 1. Open New Terminal
Keep backend running, open new PowerShell window:
```powershell
cd d:\ESCET
```

#### 2. Install Frontend Dependencies
```powershell
npm install
```

#### 3. Update Frontend to Use Backend

Create `d:\ESCET\utils\api.ts`:
```typescript
const API_URL = 'http://localhost:5000/api';

export const api = {
  async get(endpoint: string) {
    const response = await fetch(`${API_URL}${endpoint}`);
    return response.json();
  },

  async post(endpoint: string, data: any) {
    const response = await fetch(`${API_URL}${endpoint}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    });
    return response.json();
  }
};
```

#### 4. Update AdmissionEnquiryModal Component
Edit `d:\ESCET\components\AdmissionEnquiryModal.tsx`:

Find the button (line ~102) and replace with:
```typescript
<button 
  onClick={async () => {
    const formData = {
      firstName: /* get from state */,
      email: /* get from state */,
      phone: /* get from state */,
      department: /* get from state */,
      comments: /* get from state */
    };
    
    const response = await fetch('http://localhost:5000/api/enquiries', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData)
    });
    
    const result = await response.json();
    if (result.success) {
      alert('Enquiry submitted successfully!');
      onClose();
    }
  }}
  className="..."
>
  Make An Request <ArrowRight size={18} />
</button>
```

#### 5. Start Frontend
```powershell
npm run dev
```

**Expected Output:**
```
  VITE v6.2.0  ready in 523 ms

  ➜  Local:   http://localhost:3000/
  ➜  Network: http://192.168.1.x:3000/
```

---

### **PART 3: Access Admin Dashboard**

#### 1. Open Admin Login
Navigate to: http://localhost:3000/#/admin/login

#### 2. Login
```
Email: admin@escet.in
Password: Admin@123
```

#### 3. Explore Admin Features

**Dashboard Features:**
- ✅ View/Edit/Delete Departments
- ✅ Manage News & Events
- ✅ Review Admission Enquiries
- ✅ Update Status (Pending → Contacted → Converted)
- ✅ Add Notes to Enquiries
- ✅ Real-time Statistics

---

## 🧪 Testing the Complete System

### Test 1: Submit Enquiry Form (Frontend)
1. Go to: http://localhost:3000
2. Click "Admission Open" button
3. Fill form and submit
4. Check MongoDB or Admin Dashboard

### Test 2: Create Department (Admin)
1. Login to Admin Dashboard
2. Go to "Departments" tab
3. Click "Add New"
4. Fill details and save
5. Check frontend - should appear

### Test 3: Publish News (Admin)
1. Go to "News & Events" tab
2. Click "Add New"
3. Create news article
4. Set "isPublished" to true
5. Check frontend homepage

### Test 4: Email Notifications
1. Configure email in `.env`
2. Submit enquiry form
3. Check inbox for notification

---

## 📊 Project Structure

```
d:\ESCET\
├── backend\                    # Backend API
│   ├── models\                 # MongoDB schemas
│   ├── routes\                 # API endpoints
│   ├── middleware\             # Auth & error handling
│   ├── config\                 # Database config
│   ├── seeders\                # Database seeder
│   ├── .env                    # Environment variables
│   ├── server.js               # Express server
│   └── package.json
│
├── components\                 # React components
├── pages\
│   ├── admin\                  # Admin dashboard
│   │   ├── AdminLogin.tsx
│   │   └── AdminDashboard.tsx
│   └── ...other pages
│
├── .env.local                  # Frontend env
├── App.tsx                     # Main app (updated with admin routes)
└── package.json
```

---

## 🔧 Common Issues & Solutions

### Issue 1: Backend won't start
```powershell
# Check MongoDB is running
net start MongoDB

# Or use MongoDB Atlas connection string

# Check port availability
netstat -ano | findstr :5000
```

### Issue 2: Frontend can't connect to backend
```
Error: ERR_CONNECTION_REFUSED
```

**Solution:**
1. Verify backend is running on port 5000
2. Check CORS settings in `server.js`
3. Update `FRONTEND_URL` in backend `.env`

### Issue 3: MongoDB connection error
```
MongoNetworkError: connect ECONNREFUSED
```

**Solution:**
```powershell
# Start MongoDB
mongod --dbpath C:\data\db

# Or use MongoDB Atlas
```

### Issue 4: Admin login fails
```
Error: Invalid credentials
```

**Solution:**
```powershell
# Re-seed database
cd backend
npm run seed
```

### Issue 5: Email not sending
**Solution:**
1. Enable 2FA on Gmail
2. Generate App Password: https://myaccount.google.com/apppasswords
3. Use App Password (not regular password) in `.env`

---

## 🚀 Production Deployment

### Backend Deployment (Railway/Render)
1. Push code to GitHub
2. Connect to Railway/Render
3. Add environment variables
4. Deploy

### Frontend Deployment (Vercel/Netlify)
1. Update API_URL to production backend
2. Push to GitHub
3. Deploy to Vercel/Netlify

---

## 📝 Quick Reference

### Backend URLs
- API Base: `http://localhost:5000/api`
- Health Check: `http://localhost:5000/api/health`

### Frontend URLs
- Homepage: `http://localhost:3000`
- Admin Login: `http://localhost:3000/#/admin/login`
- Admin Dashboard: `http://localhost:3000/#/admin/dashboard`

### Default Credentials
```
Email: admin@escet.in
Password: Admin@123
```

---

## 🎓 Next Steps

1. ✅ **Customize Content**: Edit departments, news in admin
2. ✅ **Replace Images**: Upload real college photos
3. ✅ **Configure Email**: Set up Gmail/SMTP for notifications
4. ✅ **Add Features**: Implement gallery, facilities CRUD
5. ✅ **Deploy**: Push to production servers

---

## 📞 Support Checklist

Before asking for help:
- [ ] MongoDB is running
- [ ] `.env` files are configured
- [ ] Backend is running on port 5000
- [ ] Frontend is running on port 3000
- [ ] Browser console shows no errors
- [ ] Database is seeded

---

## 🔐 Security Reminders

⚠️ **IMPORTANT**:
- Change `JWT_SECRET` before production
- Use strong admin password
- Never commit `.env` files
- Enable HTTPS in production
- Implement rate limiting
- Validate all user inputs

---

**Congratulations! 🎉**  
You now have a fully functional backend API with admin dashboard for ESCET College website!

For questions: Check backend logs with `npm run dev`
