const jwt = require('jsonwebtoken');

// Make sure to set the secret in your environment variables
const JWT_SECRET = process.env.JWT_SECRET_KEY;

// Function to verify a JWT token
const verifyToken = (req, res, next) => {
    try {
        // Check if the token exists in cookies
        const token = req.cookies.token;
        if (!token) {
            return res.status(403).send({ message: "No token provided" });
        }

        // Verify the token using the JWT secret
        jwt.verify(token, JWT_SECRET, (err, decoded) => {
            if (err) {
                return res.status(401).send({ message: "Invalid or expired token" });
            }

            // Attach the decoded user info to the request object
            req.user = decoded;
            next(); // Proceed to the next middleware or route handler
        });
    } catch (error) {
        console.error("Error verifying token:", error);
        res.status(500).send({ message: "Server error while verifying token" });
    }
};

module.exports = verifyToken;
