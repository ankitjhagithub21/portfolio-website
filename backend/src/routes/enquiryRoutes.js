
const express = require("express");
const router = express.Router();
const {
  createEnquiry,
  getEnquiries,
  updateEnquiry,
  deleteEnquiry,
} = require("../controllers/enquiryController");
const isAuth = require("../middlewares/isAuth");

router.post("/", createEnquiry);
router.get("/", isAuth , getEnquiries);
router.put("/:id",isAuth ,updateEnquiry);
router.delete("/:id", isAuth ,deleteEnquiry);

module.exports = router;
