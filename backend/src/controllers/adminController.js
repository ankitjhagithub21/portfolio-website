const Admin = require("../models/Admin");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const secret = process.env.JWT_SECRET || "your_secret_key";

const options = {
  httpOnly: true,
  secure: true,
  sameSite: "none",
  maxAge: 7 * 24 * 60 * 60 * 1000,
};

const generateToken = (userId) => {
  return jwt.sign({ id: userId }, secret, { expiresIn: "7d" });
};

const registerAdmin = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res
        .status(400)
        .json({ message: "Email and password are required.", success: false });
    }

    const alreadyPresent = await Admin.findOne({ email });

    if (alreadyPresent) {
      return res.status(400).json({ message: "Please login.", success: false });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const admin = await Admin.create({
      email,
      password: hashedPassword,
    });

    const token = generateToken(admin._id);

    res.cookie("token", token, options);

    res.status(201).json({
      message: "Admin registered successfully.",
      success: true,
      admin: {
        _id: admin._id,
        email: admin.email,
      },
    });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error in register admin", success: false });
  }
};

const loginAdmin = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res
        .status(400)
        .json({ message: "Email and password are required.", success: false });
    }

    const admin = await Admin.findOne({ email });

    if (!admin) {
      return res
        .status(400)
        .json({ message: "Admin not found.", success: false });
    }

    const isValidPassword = await bcrypt.compare(password, admin.password);

    if (!isValidPassword) {
      return res
        .status(400)
        .json({ message: "Wrong credentials.", success: false });
    }

    const token = generateToken(admin._id);

    res.cookie("token", token, options);

    res.status(200).json({
      message: "Login successfull.",
      success: true,
      admin: {
        _id: admin._id,
        email: admin.email,
      },
    });
  } catch (error) {
    res.status(500).json({ message: "Error in login admin", success: false });
  }
};

const logoutAdmin = async (req, res) => {
  return res
    .clearCookie("token")
    .status(200)
    .json({ message: "Logout successfull.", success: true });
};

const getAdminProfile = async (req, res) => {
  try {
    const admin = await Admin.findById(req.id).select("-password");

    if (!admin) {
        return res.status(404).json({message:"Admin not found.", success:false})
    }

    return res.status(200).json(admin);

  } catch (error) {}
};

module.exports = {
  loginAdmin,
  registerAdmin,
  logoutAdmin,
  getAdminProfile
};
