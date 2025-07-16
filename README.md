# 💱 Delex Pay – Crypto Trading Platform

Delex Pay is a secure and user-friendly crypto trading platform that allows users to buy and sell multiple cryptocurrencies (e.g. Bitcoin, USDT, Toncoin) with Naira. Built with HTML, CSS, JavaScript (frontend) and Node.js + MongoDB (backend), it offers both admin and user dashboards, secure authentication, and transaction history tracking.

---

## 🔗 Live URLs

- **Frontend (Vercel):** [https://delex-pay.vercel.app](https://delex-pay.vercel.app)
- **Backend API (Render):** `https://delex-api.onrender.com` *(example)*

---

## 🚀 Features

### 👤 User Side
- Register & Login with JWT authentication
- See account balance and virtual account number
- Live crypto price display
- Buy crypto form with conversion calculator
- Upload payment proof
- Transaction history with status (Pending → Approved → Processed)
- Downloadable receipt after transaction is completed

### 🛠 Admin Side
- Login as admin
- View all users and transactions
- Approve or complete buy/sell requests
- Receive email and WhatsApp notifications for new orders
- Dashboard analytics (Total Users, Total Volume Traded, Pending Transactions)

---

## 🧱 Tech Stack

- **Frontend:** HTML5, CSS3, JavaScript (Vanilla)
- **Backend:** Node.js, Express.js
- **Database:** MongoDB (via Mongoose)
- **Authentication:** JWT, Cookies
- **Email Alerts:** Nodemailer
- **WhatsApp Alerts:** Twilio API *(optional)*
- **Deployment:** 
  - Vercel (Frontend)
  - Render (Backend)

---

## 📁 Project Structure
delex-pay/
├── public/                # Frontend
│   ├── index.html
│   ├── register.html
│   ├── login.html
│   ├── dashboard.html
│   ├── admin.html
│   ├── css/
│   │   └── styles.css
│   ├── js/
│   │   ├── main.js
│   │   └── loadPartials.js
│   └── partials/
│       ├── navbar.html
│       └── footer.html
├── server/                # Backend
│   ├── index.js
│   ├── models/
│   │   └── User.js
│   ├── routes/
│   │   ├── auth.js
│   │   ├── buy.js
│   │   └── admin.js
│   ├── utils/
│   │   └── mailer.js
│   └── middlewares/
├── .env.example           # Sample env vars
├── .gitignore
├── package.json
├── README.md
