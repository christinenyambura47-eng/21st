# 21st Electronics - Complete Setup Guide

## Project Structure

```
21st_Electronics/
├── backend/                 # Express.js server
│   ├── routes/
│   │   ├── contact.js      # Contact form route
│   │   └── quote.js        # Quote request route
│   ├── utils/
│   │   └── emailService.js # Email handling
│   ├── server.js           # Main server file
│   ├── package.json
│   ├── .env                # Environment variables
│   └── README.md
│
└── twentyfirst-connect/    # React + Vite frontend
    ├── src/
    │   ├── components/
    │   │   ├── ContactSection.tsx
    │   │   ├── EnquireModal.tsx
    │   │   └── GoogleMapSection.tsx
    │   ├── pages/
    │   │   ├── Index.tsx
    │   │   ├── Contact.tsx
    │   │   ├── Products.tsx
    │   │   ├── Coverage.tsx
    │   │   ├── About.tsx
    │   │   └── FAQ.tsx
    │   ├── lib/
    │   │   └── api.ts      # API integration
    │   └── App.tsx
    ├── .env                # Environment variables
    └── package.json
```

## Quick Start

### Frontend Setup

1. Navigate to the frontend directory:
```bash
cd twentyfirst-connect
```

2. Install dependencies:
```bash
npm install
# or
bun install
```

3. Start the development server:
```bash
npm run dev
# or
bun run dev
```

The frontend will be available at `http://localhost:5173`

### Backend Setup

1. Navigate to the backend directory:
```bash
cd ../backend
```

2. Install dependencies:
```bash
npm install
```

3. Configure environment variables:
   - Copy `.env.example` to `.env`
   - Update the following values:
     - `SMTP_USER`: Your Gmail address
     - `SMTP_PASSWORD`: Your Gmail App Password
     - Other email settings as needed

4. Start the development server:
```bash
npm run dev
```

The backend will be available at `http://localhost:5000`

## Environment Variables

### Frontend (.env)
```env
VITE_API_BASE_URL=http://localhost:5000/api
```

### Backend (.env)
```env
PORT=5000
NODE_ENV=development
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your-email@gmail.com
SMTP_PASSWORD=your-app-password
SMTP_FROM=noreply@21stelectronics.co.ke
CONTACT_EMAIL=info@21stelectronics.co.ke
SUPPORT_EMAIL=support@21stelectronics.co.ke
FRONTEND_URL=http://localhost:5173
```

## Features

### Pages Implemented
- ✅ Home (Index)
- ✅ Products
- ✅ Coverage
- ✅ About
- ✅ Contact
- ✅ FAQ

### Components
- ✅ Navigation with responsive menu
- ✅ Logo (linkable to home)
- ✅ Hero Section
- ✅ Pricing Section
- ✅ Features Section
- ✅ Contact Form with email submission
- ✅ Quote Request Form
- ✅ Google Map Integration
- ✅ Footer
- ✅ Chatbot
- ✅ Back to Top button

### API Routes
- `POST /api/contact/submit` - Contact form submission
- `POST /api/quote/submit` - Quote request submission

### Form Validation
- Email format validation
- Phone number validation (Kenyan format)
- Required field validation
- Message length validation

### Email Features
- Transactional emails to company
- Confirmation emails to users
- HTML formatted emails
- Gmail integration

## Link Configuration

All pages and components are already linkable:

- **Logo**: Links to home page (`/`)
- **Navigation**:
  - Home: `/`
  - Plans: `/#products`
  - Products: `/products`
  - Coverage: `/coverage`
  - About: `/about`
  - FAQ: `/faq`
  - Contact: `/contact`
- **Contact Button**: Links to `/contact`
- **Get Connected**: Opens quote modal

## Contact Information

- **Phone**: +254720778496
- **Email**: info@21stelectronics.co.ke
- **Location**: CityView Ngara, Nairobi, Kenya - Ground Floor

## Troubleshooting

### Email Not Sending
1. Check Gmail account 2-Step Verification is enabled
2. Generate App Password from Google Account
3. Verify SMTP credentials in `.env`
4. Check backend server logs

### CORS Issues
1. Ensure `FRONTEND_URL` in backend `.env` matches your frontend URL
2. Frontend and backend should use same protocol (http/https)

### Form Not Submitting
1. Check browser console for errors
2. Verify backend is running on correct port
3. Check network tab in browser DevTools
4. Ensure API endpoint URL is correct in frontend `.env`

## Deployment

### Frontend (Vercel/Netlify)
```bash
npm run build
```

### Backend (Heroku/Railway/Render)
```bash
npm install
npm start
```

Update environment variables on deployment platform for production URLs.

## Development Tips

- Use `npm run dev` in both frontend and backend for hot reload
- Check browser console for frontend errors
- Check terminal output for backend errors
- Use browser DevTools Network tab to inspect API calls
- Test forms locally before deployment

## Support

For issues or questions, contact us at:
- 📞 +254720778496
- 📧 info@21stelectronics.co.ke
