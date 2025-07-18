# Samaki Tanzania - Full Stack Fish Species Gallery

## 1. Prerequisites

- Node.js & npm
- MongoDB (local or Atlas)
- (Optional) Git

## 2. Backend Setup

```bash
cd backend
npm install
node scripts/import_fish.js     # Imports fish_sample.json data into MongoDB
node app.js                    # Starts backend on port 5000
```

## 3. Frontend Setup

```bash
cd frontend
npm install
npm start                      # Starts frontend on port 3000
```

## 4. Access the App

- Backend API: http://localhost:5000/api/fish
- Frontend UI: http://localhost:3000

## 5. Customization

- Add more fish to `backend/data/fish_sample.json`
- Extend components in `frontend/src/components`
- For deployment, use Vercel (frontend) and Heroku/DigitalOcean (backend).
