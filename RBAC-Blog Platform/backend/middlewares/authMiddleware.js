const jwt = require("jsonwebtoken");
const User = require("../models/User");

// Verify token middleware
const verifyToken = (req, res, next) => {
  const token = req.header("Authorization")?.split(" ")[1];
  if (!token) {
    return res.status(401).json({ message: "Unauthorized" });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded; // Attach the user to the request object
    next();
  } catch (error) {
    return res.status(401).json({ message: "Invalid token" });
  }
};

// Verify admin middleware
const verifyAdmin = async (req, res, next) => {
  const user = await User.findById(req.user._id);
  if (user.role !== "admin") {
    return res.status(403).json({ message: "Access denied" });
  }
  next();
};

module.exports = { verifyToken, verifyAdmin };
