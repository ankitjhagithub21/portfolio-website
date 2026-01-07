const jwt = require("jsonwebtoken");

const secret = process.env.JWT_SECRET || "your_secret_key";

const isAuth = async (req, res, next) => {
  try {
    const token = req.cookies.token;

    if (!token) {
      return res
        .status(401)
        .json({ message: "Token missing.", success: false });
    }

    const decoded = await jwt.verify(token, secret);

    if (!decoded || !decoded.id) {
      return res
        .status(401)
        .json({ message: "Invalid or expired token.", success: false });
    }

    req.id = decoded.id;

    next();
  } catch (error) {
    res.status(401).json({ message: "Unauthorized.", success: false });
  }
};

module.exports = isAuth;
