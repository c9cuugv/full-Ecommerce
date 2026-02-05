# Full E-Commerce Application

A full-stack e-commerce application built with React, Node.js, Express, and MongoDB.

## Project Structure

```
Rapple-main/
├── backend/        # Node.js/Express API server
├── frontend/       # React customer-facing application
├── admin-app/      # React admin dashboard
└── SECURITY.md     # Security documentation and recommendations
```

## Recent Security Improvements ✅

This repository has undergone a comprehensive security audit and the following critical issues have been fixed:

### Fixed Issues:
- ✅ JWT secret inconsistency resolved (standardized to `JWT_SECRET`)
- ✅ Removed hardcoded localhost URLs in password reset emails
- ✅ Removed hardcoded email sender addresses
- ✅ Configured CORS to restrict origins
- ✅ Protected admin endpoints with proper authentication
- ✅ Removed sensitive console.log statements
- ✅ Added production-safe error handling (no stack traces exposed)
- ✅ Created `.env.example` for environment variable documentation
- ✅ Enhanced `.gitignore` for sensitive files

See [SECURITY.md](./SECURITY.md) for detailed security documentation and production deployment recommendations.

## Prerequisites

- Node.js (v14 or higher)
- MongoDB (v4.4 or higher)
- npm or yarn

## Setup Instructions

### 1. Clone the Repository

```bash
git clone https://github.com/c9cuugv/full-Ecommerce.git
cd full-Ecommerce/Rapple-main
```

### 2. Backend Setup

```bash
cd backend

# Install dependencies
npm install

# Copy environment example file
cp .env.example .env

# Edit .env file with your configuration
# REQUIRED: Set strong JWT_SECRET, database URL, email credentials, etc.
nano .env  # or use your preferred editor

# Start the backend server
npm start

# For development with auto-reload
npm run server
```

**Important Backend Environment Variables:**
- `JWT_SECRET`: Strong random secret (32+ characters)
- `MONGODB_URL`: MongoDB connection string
- `MAIL_ID` & `MP`: Email credentials for sending emails
- `FRONTEND_URL`: Frontend URL for CORS and email links
- `CLOUDINARY_*`: Cloudinary credentials for image uploads
- `RAZORPAY_*`: Payment gateway credentials

See `backend/.env.example` for complete list.

### 3. Frontend Setup

```bash
cd ../frontend

# Install dependencies
npm install

# Create .env file
echo "REACT_APP_API_URL=http://localhost:4000/api/" > .env

# Start the frontend
npm start
```

### 4. Admin App Setup

```bash
cd ../admin-app

# Install dependencies
npm install

# Create .env file
echo "REACT_APP_API_URL=http://localhost:4000/api/" > .env

# Start the admin app
npm start
```

## Running the Full Stack

1. **Start MongoDB**: Ensure MongoDB is running on your system
2. **Start Backend**: `cd backend && npm start` (runs on port 4000)
3. **Start Frontend**: `cd frontend && npm start` (runs on port 3000)
4. **Start Admin**: `cd admin-app && npm start` (runs on port 3001 or next available)

## API Endpoints

### Authentication
- `POST /api/user/register` - Register new user
- `POST /api/user/login` - User login
- `POST /api/user/admin-login` - Admin login
- `POST /api/user/forgot-password-token` - Request password reset
- `PUT /api/user/reset-password/:token` - Reset password

### Products
- `GET /api/product` - Get all products
- `GET /api/product/:id` - Get single product
- `POST /api/product` - Create product (Admin)
- `PUT /api/product/:id` - Update product (Admin)
- `DELETE /api/product/:id` - Delete product (Admin)

### Cart & Orders
- `POST /api/user/cart` - Add to cart
- `GET /api/user/cart` - Get user cart
- `POST /api/user/order/checkout` - Checkout
- `GET /api/user/getmyorders` - Get user orders

### Admin
- `GET /api/user/all-users` - Get all users (Admin only)
- `GET /api/user/getallorders` - Get all orders (Admin only)
- `PUT /api/user/updateorder/:id` - Update order status (Admin only)

See API documentation for complete endpoint list.

## Security Features

- JWT-based authentication with refresh tokens
- Password hashing with bcrypt
- Environment-based CORS configuration
- Protected admin routes
- Input validation and sanitization (recommended to enhance)
- Secure error handling (no stack traces in production)

## Production Deployment Checklist

Before deploying to production, ensure you:

1. ✅ Set all environment variables in `.env.example`
2. ✅ Use strong, unique `JWT_SECRET` (32+ random characters)
3. ✅ Enable HTTPS/SSL certificates
4. ✅ Configure proper CORS origins
5. ✅ Set `NODE_ENV=production`
6. ⚠️ Add security headers (helmet) - **Recommended**
7. ⚠️ Implement rate limiting - **Recommended**
8. ⚠️ Add input validation - **Recommended**
9. ⚠️ Set up monitoring and logging - **Recommended**
10. ⚠️ Configure database backups - **Required**

See [SECURITY.md](./SECURITY.md) for detailed production recommendations.

## Technology Stack

### Backend
- Node.js & Express
- MongoDB with Mongoose
- JWT for authentication
- Bcrypt for password hashing
- Cloudinary for image storage
- Razorpay for payments
- Nodemailer for emails

### Frontend
- React 18
- Redux Toolkit for state management
- React Router for navigation
- Axios for API calls
- Formik & Yup for form handling
- React Bootstrap & custom CSS

### Admin Dashboard
- React 18
- Ant Design components
- Redux Toolkit
- React Quill for rich text editing
- Charts for analytics

## Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature-name`
3. Commit your changes: `git commit -am 'Add feature'`
4. Push to the branch: `git push origin feature-name`
5. Submit a pull request

## Security

For security issues, please see [SECURITY.md](./SECURITY.md) for reporting procedures and security best practices.

## License

ISC License

## Author

Sravyanth

## Support

For support, email support@yourcompany.com or open an issue in the repository.
