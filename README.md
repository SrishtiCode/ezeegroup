# EZee Groups — MERN Stack Corporate Website

##  Brand Color System (6 Colors)

Extracted from EZee Store logo + added Sky Blue & White:

| Color | Hex | Source | Usage |
|-------|-----|--------|-------|
| Deep Emerald Green | #1A8A4A | Logo "E" | Primary brand, headings, navbar |
| Fresh Green | #2AB870 | Logo "Z" | Gradients, ticker |
| Mint Green | #3DD68C | Logo "ee" | Backgrounds, accents |
| Warm Orange | #E8883A | Logo "Store" | EZee Labs tag, accent CTA |
| Deep Sky Blue | #00BFFF | Added | CTA buttons, links, borders |
| White | #FFFFFF | Base | Backgrounds, cards |

---

##  Live Demo

- 🌐 Frontend: https://ezeegroup-beryl.vercel.app  
- ⚙️ Backend API: https://ezeegroup.onrender.com  

---

##  Setup (Local Development)

```bash
cd ezeegroup
npm run install-all
cd server && cp .env.example .env
cd .. && npm run dev

##  Pages

| Route | Page |
|-------|------|
| `/` | Home |
| `/about` | About EZee Groups |
| `/companies` | EZee Store + EZee Labs |
| `/innovation` | Innovation & Technology |
| `/vision` | Vision, Mission & Values |
| `/news` | News & Updates |
| `/careers` | Careers + Apply Form |
| `/contact` | Contact Us |

##  Tech Stack
- **Frontend:** React 18 + Vite + Framer Motion
- **Backend:** Express.js + MongoDB + Mongoose
- **Routing:** React Router DOM v6
- **Forms:** react-hot-toast + axios
