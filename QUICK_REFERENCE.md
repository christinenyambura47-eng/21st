# Quick Reference Guide

## 🚀 Starting Development

### Windows
```bash
# Run setup script once
setup.bat

# Then in Terminal 1 (Backend)
cd backend
npm run dev

# Terminal 2 (Frontend)
cd twentyfirst-connect
npm run dev
```

### Mac/Linux
```bash
# Run setup script once
chmod +x setup.sh
./setup.sh

# Then in Terminal 1 (Backend)
cd backend
npm run dev

# Terminal 2 (Frontend)
cd twentyfirst-connect
npm run dev
```

## 📋 Project Commands

### Frontend Commands
```bash
cd twentyfirst-connect

# Development
npm run dev          # Start dev server (http://localhost:5173)

# Building
npm run build        # Build for production
npm run preview      # Preview production build

# Testing & Linting
npm run test         # Run tests
npm run test:watch   # Watch mode
npm run lint         # Check for linting errors
```

### Backend Commands
```bash
cd backend

# Development
npm run dev          # Start dev server with nodemon (http://localhost:5000)
npm start            # Start production server

# Note: Install nodemon globally if needed
npm install -g nodemon
```

## 🌐 URLs

| Service | URL |
|---------|-----|
| Frontend | http://localhost:5173 |
| Backend API | http://localhost:5000 |
| Contact API | http://localhost:5000/api/contact/submit |
| Quote API | http://localhost:5000/api/quote/submit |
| Health Check | http://localhost:5000/api/health |

## 📝 Important Files

### Configuration
- `frontend/.env` - Frontend API URL
- `backend/.env` - Email and server configuration

### Source Code
- `frontend/src/lib/api.ts` - API integration
- `frontend/src/components/ContactSection.tsx` - Contact form
- `frontend/src/components/EnquireModal.tsx` - Quote form
- `backend/routes/contact.js` - Contact form route
- `backend/routes/quote.js` - Quote form route
- `backend/utils/emailService.js` - Email service

### Documentation
- `SETUP_GUIDE.md` - Complete setup instructions
- `IMPLEMENTATION_SUMMARY.md` - What was implemented
- `backend/README.md` - Backend documentation

## ✅ Checklist for First Run

- [ ] Install Node.js and npm
- [ ] Clone/open project
- [ ] Run `setup.bat` (Windows) or `setup.sh` (Mac/Linux)
- [ ] Update `backend/.env` with Gmail credentials
- [ ] Start backend: `cd backend && npm run dev`
- [ ] Start frontend: `cd twentyfirst-connect && npm run dev`
- [ ] Open http://localhost:5173 in browser
- [ ] Test contact form
- [ ] Test quote form

## 🐛 Debugging Tips

### Frontend Issues
```javascript
// Check API calls in browser console
// Open DevTools: F12
// Go to Network tab to see requests
// Check console for errors

// Common issues:
- API_BASE_URL wrong in .env
- Backend not running
- CORS errors (check backend .env FRONTEND_URL)
```

### Backend Issues
```bash
# Check terminal output for errors
# Verify .env variables are set
# Test API directly:
curl http://localhost:5000/api/health

# Check email credentials
# Enable less secure apps if using Gmail
```

## 📧 Gmail Setup (Important!)

1. Enable 2-Step Verification:
   - Go to https://myaccount.google.com/security
   - Click "2-Step Verification"
   - Follow setup steps

2. Generate App Password:
   - Go to https://myaccount.google.com/apppasswords
   - Select "Mail" and "Windows Computer"
   - Copy the 16-character password
   - Paste in `backend/.env` as `SMTP_PASSWORD`

## 🚀 Deployment

### Frontend (Vercel/Netlify)
```bash
npm run build
# Upload the dist/ folder
```

### Backend (Heroku/Railway/Render)
```bash
# Set environment variables in platform
# Push code (automatic deploy)
# Or run: npm start
```

## 🔗 Navigation Links

All these links work on frontend:
- `/` - Home
- `/products` - Products page
- `/coverage` - Coverage page
- `/about` - About page
- `/contact` - Contact page
- `/faq` - FAQ page
- `/#products` - Jump to products on home
- `/#support` - Jump to contact on home

## 💡 Development Tips

1. **Keep both servers running**: Frontend and backend must run simultaneously
2. **Hot reload**: Changes auto-refresh in development
3. **Check console**: Browser console shows frontend errors
4. **Check terminal**: Terminal shows backend errors
5. **Test forms locally**: Before deployment, test all forms
6. **Use DevTools**: Network tab shows API responses

## 📞 Contact Information

- **Phone**: +254720778496
- **Email**: info@21stelectronics.co.ke
- **Location**: CityView Ngara, Nairobi, Kenya - Ground Floor

## ❓ FAQ

**Q: Backend not connecting to frontend?**
A: Check CORS in backend .env, ensure FRONTEND_URL matches your frontend URL

**Q: Forms not submitting?**
A: Check .env files, ensure backend is running, check browser console for errors

**Q: Emails not sending?**
A: Verify Gmail credentials, check if App Password is correct, enable less secure apps

**Q: Port already in use?**
A: Change PORT in backend .env or kill process using the port

---

For more details, see:
- SETUP_GUIDE.md
- IMPLEMENTATION_SUMMARY.md
- backend/README.md
