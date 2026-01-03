# 🧪 API Testing Guide

## Quick Test with Browser

### 1. Health Check
Open in browser:
```
http://localhost:5000/api/health
```

Expected:
```json
{
  "success": true,
  "message": "ESCET Backend API is running",
  "timestamp": "2025-12-29T..."
}
```

---

## Testing with PowerShell

### Login (Get JWT Token)
```powershell
$body = @{
    email = "admin@escet.in"
    password = "Admin@123"
} | ConvertTo-Json

$response = Invoke-RestMethod -Uri "http://localhost:5000/api/auth/login" `
    -Method POST `
    -ContentType "application/json" `
    -Body $body

$token = $response.data.token
Write-Host "Token: $token"
```

### Get Departments (Public)
```powershell
Invoke-RestMethod -Uri "http://localhost:5000/api/departments"
```

### Create Department (Admin - requires token)
```powershell
$headers = @{
    "Authorization" = "Bearer $token"
    "Content-Type" = "application/json"
}

$newDept = @{
    id = "test"
    name = "Test Department"
    shortName = "TEST"
    hod = "Dr. Test"
    description = "Test description"
    labs = @("Lab 1", "Lab 2")
    image = "https://via.placeholder.com/400"
    seats = 30
    duration = "4 Years"
} | ConvertTo-Json

Invoke-RestMethod -Uri "http://localhost:5000/api/departments" `
    -Method POST `
    -Headers $headers `
    -Body $newDept
```

### Submit Enquiry (Public)
```powershell
$enquiry = @{
    firstName = "John Doe"
    email = "john@example.com"
    phone = "9876543210"
    department = "CSE"
    comments = "Interested in CSE program"
} | ConvertTo-Json

Invoke-RestMethod -Uri "http://localhost:5000/api/enquiries" `
    -Method POST `
    -ContentType "application/json" `
    -Body $enquiry
```

---

## Testing with cURL (Git Bash)

### Login
```bash
curl -X POST http://localhost:5000/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{"email":"admin@escet.in","password":"Admin@123"}'
```

### Get Departments
```bash
curl http://localhost:5000/api/departments
```

### Create News (with token)
```bash
TOKEN="your_jwt_token_here"

curl -X POST http://localhost:5000/api/news \
  -H "Authorization: Bearer $TOKEN" \
  -H "Content-Type: application/json" \
  -d '{
    "title": "Test News",
    "description": "This is a test news item",
    "category": "Event",
    "date": "2024-12-29",
    "isPublished": true
  }'
```

---

## Postman Collection

### Setup
1. Create new Collection: "ESCET API"
2. Add Environment:
   - Variable: `baseUrl` = `http://localhost:5000/api`
   - Variable: `token` = (will be set after login)

### Requests

#### 1. Login
```
POST {{baseUrl}}/auth/login
Body (JSON):
{
  "email": "admin@escet.in",
  "password": "Admin@123"
}

Tests (to save token):
pm.environment.set("token", pm.response.json().data.token);
```

#### 2. Get All Departments
```
GET {{baseUrl}}/departments
```

#### 3. Create Department
```
POST {{baseUrl}}/departments
Headers:
  Authorization: Bearer {{token}}
Body (JSON):
{
  "id": "new-dept",
  "name": "New Department",
  "shortName": "NEWDEPT",
  "hod": "Dr. New HOD",
  "description": "Description here",
  "labs": ["Lab 1", "Lab 2"],
  "image": "https://via.placeholder.com/400",
  "seats": 60,
  "duration": "4 Years"
}
```

#### 4. Get All News
```
GET {{baseUrl}}/news
```

#### 5. Create News
```
POST {{baseUrl}}/news
Headers:
  Authorization: Bearer {{token}}
Body (JSON):
{
  "title": "New Event",
  "description": "Event description",
  "category": "Event",
  "date": "2024-12-30",
  "isPublished": true,
  "isPinned": false
}
```

#### 6. Submit Enquiry
```
POST {{baseUrl}}/enquiries
Body (JSON):
{
  "firstName": "Test Student",
  "email": "test@example.com",
  "phone": "9876543210",
  "department": "CSE",
  "comments": "Want to join CSE"
}
```

#### 7. Get All Enquiries (Admin)
```
GET {{baseUrl}}/enquiries
Headers:
  Authorization: Bearer {{token}}
```

#### 8. Get Enquiry Stats
```
GET {{baseUrl}}/enquiries/stats
Headers:
  Authorization: Bearer {{token}}
```

#### 9. Update Enquiry Status
```
PUT {{baseUrl}}/enquiries/{{enquiry_id}}/status
Headers:
  Authorization: Bearer {{token}}
Body (JSON):
{
  "status": "contacted"
}
```

#### 10. Send Contact Message
```
POST {{baseUrl}}/contact
Body (JSON):
{
  "name": "Visitor Name",
  "email": "visitor@example.com",
  "message": "I have a question about admissions"
}
```

---

## Expected Response Formats

### Success Response
```json
{
  "success": true,
  "data": { ... },
  "count": 10,          // Optional: for lists
  "message": "..."      // Optional: for operations
}
```

### Error Response
```json
{
  "success": false,
  "message": "Error description",
  "stack": "..."        // Only in development
}
```

---

## Common HTTP Status Codes

| Code | Meaning | When Used |
|------|---------|-----------|
| 200 | OK | Successful GET/PUT |
| 201 | Created | Successful POST |
| 400 | Bad Request | Validation error |
| 401 | Unauthorized | Missing/invalid token |
| 403 | Forbidden | Insufficient permissions |
| 404 | Not Found | Resource doesn't exist |
| 500 | Server Error | Internal error |

---

## Testing Checklist

### Public Endpoints (No Auth Required)
- [ ] GET /api/health
- [ ] POST /api/auth/login
- [ ] GET /api/departments
- [ ] GET /api/departments/:id
- [ ] GET /api/news
- [ ] POST /api/enquiries
- [ ] POST /api/contact

### Admin Endpoints (Requires Token)
- [ ] GET /api/auth/me
- [ ] POST /api/departments
- [ ] PUT /api/departments/:id
- [ ] DELETE /api/departments/:id
- [ ] POST /api/news
- [ ] PUT /api/news/:id
- [ ] DELETE /api/news/:id
- [ ] GET /api/enquiries
- [ ] GET /api/enquiries/stats
- [ ] PUT /api/enquiries/:id/status

---

## Troubleshooting

### Issue: 401 Unauthorized
**Solution:** Include JWT token in Authorization header
```
Authorization: Bearer YOUR_TOKEN_HERE
```

### Issue: 404 Not Found
**Solution:** Check endpoint URL and ensure backend is running

### Issue: 400 Bad Request
**Solution:** Check request body matches schema requirements

### Issue: CORS Error
**Solution:** Verify FRONTEND_URL in backend .env matches your frontend

---

## Load Testing (Optional)

### Using Apache Bench (ab)
```bash
# Test health endpoint
ab -n 1000 -c 10 http://localhost:5000/api/health

# Test departments endpoint
ab -n 500 -c 5 http://localhost:5000/api/departments
```

### Using Artillery
```bash
npm install -g artillery

# Create artillery.yml
artillery quick --count 10 --num 100 http://localhost:5000/api/health
```

---

Happy Testing! 🧪
