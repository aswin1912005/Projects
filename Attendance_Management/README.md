# 📱 QR Code Based Attendance System

A smart attendance system built using **Node.js, Express, and
MongoDB**.\
The system allows students to scan a QR code to mark attendance
automatically using token-based authentication.

------------------------------------------------------------------------

## 🚀 Features

-   📸 QR Code based attendance
-   🔐 One-time login system
-   🔁 Automatic login on next scans
-   🗄️ MongoDB database storage
-   ❌ Duplicate attendance prevention
-   📱 Mobile-friendly design

------------------------------------------------------------------------

## 🏗️ System Architecture

Laptop → Displays QR Code\
Mobile → Scans QR Code\
Browser → Sends Token\
Node.js Server → Verifies\
MongoDB → Stores Attendance

------------------------------------------------------------------------

## ⚙️ Technologies Used

-   HTML, CSS, JavaScript
-   Node.js
-   Express.js
-   MongoDB
-   Mongoose

------------------------------------------------------------------------

## 🔄 How It Works

### 1️⃣ First Scan

-   Student scans QR code
-   Login page opens
-   Token generated after login
-   Token stored in browser (localStorage)
-   Attendance marked in MongoDB

### 2️⃣ Second Scan

-   Student scans same QR code
-   Stored token sent automatically
-   Server verifies token
-   Attendance marked without login

------------------------------------------------------------------------

## 🗄️ Database Structure

``` json
{
  "userid": "21MCA001",
  "password": "1234",
  "token": "generated_token",
  "attendance": [
    { "date": "2026-02-01" },
    { "date": "2026-02-02" }
  ]
}
```

------------------------------------------------------------------------

## 🛠️ Installation

### 1. Clone Repository

``` bash
git clone https://github.com/yourusername/qr-attendance-system.git
```

### 2. Install Dependencies

``` bash
npm install
```

### 3. Start Server

``` bash
node server.js
```

------------------------------------------------------------------------

## 📌 Future Improvements

-   JWT authentication
-   Admin dashboard
-   Time-limited QR codes
-   GPS-based verification
-   Cloud deployment using MongoDB Atlas

------------------------------------------------------------------------

## 📄 License

This project is developed for academic purposes.
