# ESCET Backend API

Complete backend solution for ESCET College Website with RESTful API and Admin Dashboard.

## 🚀 Quick Start

### 1. Install Dependencies
```bash
cd backend
npm install
```

### 2. Environment Setup
Create a `.env` file from the example:
```bash
cp .env.example .env
```

Edit `.env` with your configuration:
```env
# MongoDB Connection
MONGODB_URI=mongodb://localhost:27017/escet_college
# Or use MongoDB Atlas for cloud database

# JWT Secret (change this!)
JWT_SECRET=your_random_secret_key_here

# Email Configuration (for form notifications)
EMAIL_USER=your_email@gmail.com
EMAIL_PASSWORD=your_app_specific_password

# Cloudinary (optional - for image uploads)
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_key
CLOUDINARY_API_SECRET=your_secret
```

### 3. Install & Start MongoDB

**Windows:**
1. Download MongoDB: https://www.mongodb.com/try/download/community
2. Install and run MongoDB as a service
3. Or run manually: `mongod --dbpath C:\data\db`

**Alternative: Use MongoDB Atlas (Cloud)**
1. Create free account: https://www.mongodb.com/cloud/atlas
2. Create cluster
3. Get connection string and add to `.env`

### 4. Seed the Database
```bash
npm run seed
```

This creates:
- ✅ Admin user (admin@escet.in / Admin@123)
- ✅ All 7 departments
- ✅ Sample news items

### 5. Start the Server
```bash
# Development mode with auto-restart
npm run dev

# Production mode
npm start
```

Server will run on: **http://localhost:5000**

---

## 📡 API Endpoints

### Authentication
| Method | Endpoint | Description | Access |
|--------|----------|-------------|--------|
| POST | `/api/auth/login` | Admin login | Public |
| POST | `/api/auth/register` | Create new admin | Admin |
| GET | `/api/auth/me` | Get current user | Private |
| GET | `/api/auth/users` | List all users | Admin |

**Login Example:**
```json
POST /api/auth/login
{
  "email": "admin@escet.in",
  "password": "Admin@123"
}

Response:
{
  "success": true,
  "data": {
    "_id": "...",
    "name": "Admin User",
    "email": "admin@escet.in",
    "role": "admin",
    "token": "jwt_token_here"
  }
}
```

### Departments
| Method | Endpoint | Description | Access |
|--------|----------|-------------|--------|
| GET | `/api/departments` | Get all active departments | Public |
| GET | `/api/departments/:id` | Get single department | Public |
| POST | `/api/departments` | Create department | Admin |
| PUT | `/api/departments/:id` | Update department | Admin |
| DELETE | `/api/departments/:id` | Delete department | Admin |

### News & Events
| Method | Endpoint | Description | Access |
|--------|----------|-------------|--------|
| GET | `/api/news` | Get published news | Public |
| GET | `/api/news/all` | Get all news | Admin |
| GET | `/api/news/:id` | Get single news | Public |
| POST | `/api/news` | Create news | Admin |
| PUT | `/api/news/:id` | Update news | Admin |
| DELETE | `/api/news/:id` | Delete news | Admin |

### Enquiries
| Method | Endpoint | Description | Access |
|--------|----------|-------------|--------|
| POST | `/api/enquiries` | Submit enquiry | Public |
| GET | `/api/enquiries` | Get all enquiries | Admin |
| GET | `/api/enquiries/stats` | Get stats | Admin |
| GET | `/api/enquiries/:id` | Get single enquiry | Admin |
| PUT | `/api/enquiries/:id/status` | Update status | Admin |
| POST | `/api/enquiries/:id/notes` | Add note | Private |
| DELETE | `/api/enquiries/:id` | Delete enquiry | Admin |

### Contact Form
| Method | Endpoint | Description | Access |
|--------|----------|-------------|--------|
| POST | `/api/contact` | Send contact message | Public |

---

## 🔐 Authentication

All admin endpoints require JWT token in header:
```javascript
headers: {
  'Authorization': 'Bearer YOUR_JWT_TOKEN',
  'Content-Type': 'application/json'
}
```

---

## 🗄️ Database Models

### User Schema
```javascript
{
  name: String,
  email: String (unique),
  password: String (hashed),
  role: 'admin' | 'staff',
  isActive: Boolean,
  timestamps: true
}
```

### Department Schema
```javascript
{
  id: String (unique),
  name: String,
  shortName: String,
  hod: String,
  hodEmail: String,
  description: String,
  labs: [String],
  image: String,
  seats: Number,
  duration: String,
  isActive: Boolean,
  timestamps: true
}
```

### News Schema
```javascript
{
  title: String,
  description: String,
  category: 'Event' | 'Seminar' | 'Achievement' | 'Notification',
  date: Date,
  image: String,
  content: String,
  isPublished: Boolean,
  isPinned: Boolean,
  timestamps: true
}
```

### Enquiry Schema
```javascript
{
  firstName: String,
  email: String,
  phone: String,
  department: String,
  comments: String,
  status: 'pending' | 'contacted' | 'converted' | 'rejected',
  notes: [{
    text: String,
    addedBy: ObjectId (User),
    createdAt: Date
  }],
  timestamps: true
}
```

---

## 📧 Email Configuration

### Gmail Setup:
1. Enable 2-Factor Authentication
2. Generate App Password: https://myaccount.google.com/apppasswords
3. Add to `.env`:
```env
EMAIL_USER=your_email@gmail.com
EMAIL_PASSWORD=generated_app_password
```

---

## 🛠️ Available Scripts

```bash
npm start          # Start production server
npm run dev        # Start development server (nodemon)
npm run seed       # Seed database with initial data
```

---

## 🔧 Troubleshooting

### MongoDB Connection Error
```bash
# Start MongoDB service
net start MongoDB

# Or run manually
mongod --dbpath C:\data\db
```

### Port Already in Use
Change PORT in `.env`:
```env
PORT=5001
```

### Email Not Sending
- Check Gmail App Password
- Verify EMAIL_USER and EMAIL_PASSWORD in `.env`
- Check firewall settings

---

## 📝 Testing API with Postman

1. Import collection (create in Postman):
   - Base URL: `http://localhost:5000/api`
   - Add endpoints as documented above

2. Test Login:
   ```
   POST http://localhost:5000/api/auth/login
   Body: { "email": "admin@escet.in", "password": "Admin@123" }
   ```

3. Copy token from response

4. Use token in other requests:
   ```
   Header: Authorization: Bearer YOUR_TOKEN
   ```

---

## 🚀 Deployment

### Deploy to Heroku
```bash
heroku create escet-backend
heroku config:set MONGODB_URI="your_atlas_connection"
heroku config:set JWT_SECRET="your_secret"
git push heroku main
```

### Deploy to Railway/Render
1. Connect GitHub repo
2. Add environment variables
3. Deploy automatically

---

## 📞 Support

For issues or questions:
- Check MongoDB is running
- Verify `.env` configuration
- Check server logs: `npm run dev`

---

## 🔒 Security Notes

⚠️ **IMPORTANT**: 
- Change `JWT_SECRET` in production
- Use strong admin password
- Enable HTTPS in production
- Rate limit API endpoints
- Validate all inputs

---

Built with ❤️ for ESCET College
