# 404 Error Troubleshooting Guide

## Common 404 Issues & Solutions

### Issue 1: Frontend Routes Not Working (Most Common)
**Symptoms:** 404 when navigating to `/plans`, `/products`, `/contact`, etc.

**Solution:** 
- ✅ vercel.json rewrites configured correctly (FIXED)
- Verify in Vercel Settings → Deployment:
  - Build Command: `cd twentyfirst-connect && npm run build`
  - Output Directory: `twentyfirst-connect/dist`

**Fix:** Redeploy on Vercel after code push

---

### Issue 2: API Endpoints Returning 404
**Symptoms:** 404 when submitting contact form or quote form

**Check:**
1. **Backend Deployed?**
   - Is your backend running on Railway/Render/Heroku?
   - Get the backend URL (e.g., `https://21st-electronics-api.railway.app`)

2. **Environment Variable Set in Vercel**
   - Go to Vercel Project → Settings → Environment Variables
   - Add: `VITE_API_BASE_URL` = `https://your-backend-url.railway.app/api`
   - Example value: `https://21st-electronics-api.railway.app/api`

3. **Redeploy Frontend**
   - After adding env variable, redeploy on Vercel
   - Or manually trigger: Deployments → Re-deploy

---

### Issue 3: Check Backend API Connectivity

**Test Backend Endpoints:**

```bash
# Replace with your actual backend URL
curl https://your-backend-url.railway.app/api/contact/submit

# Should return error (no data) but NOT 404
# If you get 404, backend isn't running
```

**If Backend Returns 404:**
- Backend isn't deployed correctly
- Check Railway/Render/Heroku deployment logs
- Ensure `npm start` command is running the backend

---

### Issue 4: Verify Frontend Build

**Test Build Locally:**
```bash
cd twentyfirst-connect
npm run build
npm run preview
```

Visit `http://localhost:4173` and test all routes

---

## Quick Fix Checklist

- [ ] Updated vercel.json with correct `VITE_API_BASE_URL` environment variable
- [ ] Backend deployed and running on Railway/Render/Heroku
- [ ] Backend URL added to Vercel Environment Variables
- [ ] Frontend redeployed after environment variable changes
- [ ] All routes work at `https://your-vercel-url/plans`, `/products`, `/contact`, etc.
- [ ] Contact form successfully submits (if backend is deployed)

---

## Step-by-Step Fix

### Step 1: Update Vercel Environment Variable
1. Go to https://vercel.com/dashboard
2. Select your 21st Electronics project
3. Click "Settings" → "Environment Variables"
4. Add/Update:
   - Name: `VITE_API_BASE_URL`
   - Value: `https://your-backend-api-url/api` (replace with actual URL)
   - Environments: Production, Preview, Development
5. Click "Save"

### Step 2: Redeploy Frontend
1. In Vercel Dashboard → Deployments
2. Click the "..." menu on latest deployment
3. Select "Redeploy"
4. Wait for build to complete

### Step 3: Test All Routes
Visit your deployed site and test:
- ✓ `/` - Home page
- ✓ `/plans` - Plans page
- ✓ `/products` - Products page
- ✓ `/coverage` - Coverage page
- ✓ `/about` - About page
- ✓ `/faq` - FAQ page
- ✓ `/contact` - Contact page
- ✓ Form submission (if backend deployed)

---

## Backend Deployment (If Not Done Yet)

### Deploy to Railway (Recommended)
1. Go to https://railway.app
2. Create Account → Connect GitHub
3. Create New Project → Select Repository
4. Click "Deploy Now"
5. Railway auto-detects Node.js backend
6. Get your Railway URL from deployments
7. Add to Vercel as `VITE_API_BASE_URL`

---

## Error ID Explanation
Your error: `404: NOT_FOUND` with ID `cpt1::g92v4-1776325071779-d5e704d952fc`

This is likely Vercel's response when:
- A rewrite destination doesn't exist, OR
- An API endpoint returns 404

**Solution:** Ensure `vercel.json` rewrites are processing all routes to `index.html`

