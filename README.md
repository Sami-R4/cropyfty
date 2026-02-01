# 🟢 Cropyfty – Mobile-Based Agricultural Marketplace

## Overview
Cropyfty is a **mobile-first marketplace** connecting **farmers directly with clients**. The app allows buyers to browse products and chat with farmers via WhatsApp. Farmers can manage listings, track views, and interact with clients.

**Tech Stack:**
- Frontend: React + TypeScript + Tailwind CSS
- Backend: Python (Flask)
- Database: MySQL

---

## Features

### **Client**
- Browse product listings in an Instagram-style feed
- View product details (images/videos, price, location)
- Bookmark favorite products
- View profile and saved products
- Chat with farmers via WhatsApp

### **Farmer**
- Dashboard with stats (total listings, views, messages)
- Add new products with photos/videos
- Manage existing listings (edit/delete)
- View profile and client interactions

### **Common**
- Mobile-first responsive design
- Clean, modern UI
- WhatsApp chat integration

---

## Project Structure

```
cropyfty/
│
├── frontend/          # React + TypeScript + Tailwind
│   ├── src/
│   │   ├── assets/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── services/      # API calls
│   │   ├── types/         # TypeScript interfaces
│   │   ├── App.tsx
│   │   └── main.tsx
│   ├── index.html
│   └── tsconfig.json
│
├── backend/           # Flask
│  
│
├── docs/              # System design, DB schema
├── ui/                # UI images / Figma exports
└── README.md
```

---

## Getting Started

1. Clone the repository:
```bash
git clone <repo_url>
```

2. **Frontend setup:**
```bash
cd frontend
npm install
npm run dev
```

3. **Backend setup:**
```bash
cd backend
python -m venv venv
source venv/bin/activate  # Linux/Mac
venv\Scripts\activate     # Windows
pip install -r requirements.txt
python run.py
```

4. Configure MySQL database connection in `backend/app/__init__.py`.

---

## Notes
- App is **mobile-first**, optimized for Android/iOS screens.
- WhatsApp chat integration replaces payment system.
- UI/UX designed to be clean, modern, and intuitive.
