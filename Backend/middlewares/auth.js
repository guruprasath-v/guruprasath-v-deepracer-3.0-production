import jwt from 'jsonwebtoken';

const ADMIN_SECRET_KEY = "AdminSecretKey";
const USER_SECRET_KEY = "UserSecretKey";

export const verifyToken = (req, res, next) => {
  const token = req.cookies.jwt;

  if (!token) {
    console.log("No token provided");
    return res.status(401).json({ message: "Access Denied: Unauthorized" });
  }

  try {
    const decoded = jwt.verify(token, ADMIN_SECRET_KEY);
    if (decoded.role !== 'admin') {
      return res.status(403).json({ message: "Forbidden: Not an admin" });
    }
    req.user = decoded; // Storing the decoded token data (e.g., userId) in req.user
    next(); // Proceed to the next middleware or route handler
  } catch (err) {
    console.log("Invalid token:", err.message);
    return res.status(401).json({ message: "Invalid Token" });
  }
};

export const verifyTokenUser = (req, res, next) => {
  const token = req.cookies.jwt;

  if (!token) {
    console.log("No token provided");
    return res.status(401).json({ message: "Access Denied: Unauthorized" });
  }

  try {
    const decoded = jwt.verify(token, USER_SECRET_KEY);
    if (decoded.role !== 'user') {
      console.log("Not Auth");
      return res.status(403).json({ message: "Forbidden: Not a user" });
    }
    req.user = decoded; // Storing the decoded token data (e.g., userId) in req.user
    next(); // Proceed to the next middleware or route handler
  } catch (err) {
    console.log("Invalid token:", err.message);
    return res.status(401).json({ message: "Invalid Token" });
  }
};
