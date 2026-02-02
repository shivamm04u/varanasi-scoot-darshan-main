# Baba Banarasi Dashboard System

A standalone Firebase-powered dashboard for managing bookings and users.

## Features

### User Dashboard (`index.html`)
- User registration and login
- Book tours directly
- View personal booking history
- Track booking status

### Admin Panel (`admin.html`)
- View all bookings
- Assign bookings to managers
- Update booking status (confirm/complete/cancel)
- View user statistics

### Manager Panel (`manager.html`)
- View assigned bookings only
- Update booking status
- Contact customer details

## Firebase Setup

### 1. Create Firebase Project
1. Go to [Firebase Console](https://console.firebase.google.com)
2. Create new project: "varanasi-scoot-darshan"
3. Enable Authentication (Email/Password)
4. Create Firestore Database

### 2. Create Admin User
1. Go to Authentication > Users
2. Add user with admin email
3. Copy the UID
4. Add document in Firestore: `users/{uid}`
   ```json
   {
     "name": "Admin Name",
     "email": "admin@example.com",
     "role": "admin",
     "createdAt": <timestamp>
   }
   ```

### 3. Deploy Firestore Rules
Copy contents of `firestore.rules` to Firebase Console > Firestore > Rules

### 4. Create Indexes
In Firestore > Indexes, create:
- Collection: `bookings`, Fields: `userId` (Asc), `createdAt` (Desc)
- Collection: `bookings`, Fields: `managerId` (Asc), `createdAt` (Desc)

## User Roles

| Role | Access |
|------|--------|
| `user` | Own bookings only |
| `manager` | Assigned bookings |
| `admin` | All bookings + user management |
| `super_admin` | Full system access |

## URLs

- User Dashboard: `/dashboard/index.html`
- Admin Panel: `/dashboard/admin.html`
- Manager Panel: `/dashboard/manager.html`

## Pricing Packages

- Half Day: ₹999
- Full Day: ₹1,999 (default)
