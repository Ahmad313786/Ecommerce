import jwt from 'jsonwebtoken'

const authUser = async (req, res, next) => {
  try {
    // Get token from Authorization header
    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      return res.status(401).json({ success: false, message: "Not Authorized, login again" });
    }

    const token = authHeader.split(' ')[1];

    // Verify token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    // Attach user ID to request body (or req.user if preferred)
    req.body.userId = decoded.id;

    next();
  } catch (error) {
    console.log("Auth Error:", error.message);
    res.status(401).json({ success: false, message: "Invalid or expired token" });
  }
}

export default authUser;
