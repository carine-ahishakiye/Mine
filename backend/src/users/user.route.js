const express = require('express');
const router = express.Router();
const User = require('./user.model');
const verifyToken = require('../middleware/verifyToken');
const generateToken = require('../middleware/generateToken'); // Ensure correct path

// Register route
router.post('/register', async (req, res) => {
    try {
        const { username, email, password } = req.body;

        // Check if the email is already registered
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).send({ message: "Email already registered" });
        }

        const user = new User({ username, email, password });
        await user.save();

        res.status(201).send({ message: "User registered successfully" });
    } catch (error) {
        console.error("Error registering user:", error);
        res.status(500).send({ message: "Server error, please try again later." });
    }
});

// Login route
router.post('/login', async (req, res) => {
    try {
        const { email, password } = req.body;

        const user = await User.findOne({ email });
        if (!user) {
            return res.status(400).send({ message: "User not found" });
        }

        const isMatch = await user.comparePassword(password);
        if (!isMatch) {
            return res.status(401).send({ message: "Invalid password" });
        }

        const token = generateToken(user._id);
        console.log("Generated Token:", token);

        res.cookie('token', token, { httpOnly: true, secure: process.env.NODE_ENV === "production" });

        res.status(200).send({
            message: "Logged in successfully",
            user: {
                _id: user._id,
                username: user.username,
                email: user.email,
                role: user.role,
                profileImage: user.profileImage || null, // Ensure consistency and avoid undefined errors
                bio: user.bio,
                profession: user.profession
            }
        });
    } catch (error) {
        console.error("Error logging in:", error);
        res.status(500).send({ message: "Server error, please try again later." });
    }
});




module.exports = router;
