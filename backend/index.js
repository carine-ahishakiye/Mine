const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 3000;

// Import the auth routes (ensure the path is correct)
const authRoutes = require('./src/users/user.route');

// Middleware setup
app.use(express.json({ limit: '25mb' }));
app.use(express.urlencoded({ extended: true, limit: '25mb' }));
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(
    cors({
        origin: 'http://localhost:5173',
        credentials: true,
    })
);

// Use the auth routes for the '/api/auth' route
app.use('/api/auth', authRoutes);

// MongoDB connection
(async () => {
    try {
        await mongoose.connect(process.env.DB_URL);
        console.log('✅ Connected to MongoDB successfully!');
    } catch (error) {
        console.error('❌ MongoDB Connection Error:', error);
        process.exit(1); // Exit process on connection failure
    }
})();

// Home route
app.get('/', (req, res) => {
    res.send('Pressure kills people wllh');
});

// Start the server
app.listen(port, () => {
    console.log(`🚀 Server running on port ${port}`);
});
