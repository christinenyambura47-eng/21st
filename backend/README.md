# 21st Electronics Backend Server

Express.js backend server for handling form submissions and email notifications.

## Setup Instructions

### 1. Install Dependencies

```bash
npm install
```

### 2. Configure Environment Variables

Create a `.env` file in the backend directory with the following variables:

```env
# Server Configuration
PORT=5000
NODE_ENV=development

# Email Configuration (Gmail)
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your-email@gmail.com
SMTP_PASSWORD=your-app-password
SMTP_FROM=noreply@21stelectronics.co.ke

# Recipient Emails
CONTACT_EMAIL=info@21stelectronics.co.ke
SUPPORT_EMAIL=support@21stelectronics.co.ke

# Frontend URL
FRONTEND_URL=http://localhost:5173
```

### 3. Gmail App Password Setup

1. Enable 2-Step Verification on your Gmail account
2. Go to [Google Account Security](https://myaccount.google.com/security)
3. Create an App Password for "Mail" on "Windows Computer"
4. Copy the generated password to `SMTP_PASSWORD` in `.env`

### 4. Run the Server

**Development:**
```bash
npm run dev
```

**Production:**
```bash
npm start
```

The server will run on `http://localhost:5000` by default.

## API Endpoints

### Contact Form
- **POST** `/api/contact/submit`
- Request body:
```json
{
  "firstName": "John",
  "lastName": "Doe",
  "email": "john@example.com",
  "phone": "+254720000000",
  "message": "Your message here"
}
```

### Quote Request
- **POST** `/api/quote/submit`
- Request body:
```json
{
  "firstName": "John",
  "lastName": "Doe",
  "email": "john@example.com",
  "phone": "+254720000000",
  "address": "Nairobi, Kenya",
  "plan": "Home 10Mbps"
}
```

## Response Format

### Success Response
```json
{
  "success": true,
  "message": "Your message has been sent successfully...",
  "data": {
    "firstName": "John",
    "email": "john@example.com"
  }
}
```

### Error Response
```json
{
  "success": false,
  "errors": [
    {
      "msg": "Validation error message",
      "param": "fieldName"
    }
  ]
}
```

## Features

- Form validation using express-validator
- Email notifications to company
- Confirmation emails to users
- CORS support for frontend integration
- Error handling and logging
- Environment-based configuration
