const jwt = require('jsonwebtoken');
const User = require('../users/user.model');

const JWT_SECRET = process.env.JWT_SECRET_KEY;

const generateToken = async (userId) => {
    try {
        if (!JWT_SECRET) {
            throw new Error("JWT secret key is not defined in environment variables.");
        }

        const user = await User.findById(userId).select("role"); // Fetch only necessary data
        if (!user) {
            throw new Error("User not found");
        }

        // Generate the token
        return jwt.sign(
            { userId: user._id, role: user.role },
            JWT_SECRET,
            { expiresIn: '1h' }
        );
    } catch (error) {
        console.error("Error generating token:", error);
        throw error; // Re-throw error to handle it where it's called
    }
};

module.exports = generateToken;
