const express = require("express");
const router = express.Router();

const {
  createEnquiry,
  getEnquiries,
  updateEnquiry,
  deleteEnquiry,
} = require("../controllers/enquiryController");

const isAuth = require("../middlewares/isAuth");
const validate = require("../middlewares/validate");

const {
  createEnquiryValidation,
  updateEnquiryValidation,
} = require("../validators/enquiryValidator");

// CREATE (Public)
router.post(
  "/",
  createEnquiryValidation,
  validate,
  createEnquiry
);

// READ (Admin / Auth)
router.get("/", isAuth, getEnquiries);

// UPDATE
router.put(
  "/:id",
  isAuth,
  updateEnquiryValidation,
  validate,
  updateEnquiry
);

// DELETE
router.delete("/:id", isAuth, deleteEnquiry);

module.exports = router;
