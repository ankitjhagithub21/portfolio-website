
const express = require("express");
const { registerAdmin, loginAdmin, logoutAdmin, getAdminProfile } = require("../controllers/adminController");
const isAuth = require("../middlewares/isAuth");
const router = express.Router();

router.post("/register", registerAdmin);
router.post("/login", loginAdmin)
router.post("/logout", logoutAdmin)
router.get("/", isAuth, getAdminProfile )

module.exports = router;
