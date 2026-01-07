const { body } = require("express-validator");

exports.createEnquiryValidation = [
  body("clientName")
    .trim()
    .notEmpty()
    .withMessage("Client name is required")
    .isLength({ min: 2 })
    .withMessage("Client name must be at least 2 characters"),

  body("projectName")
    .trim()
    .notEmpty()
    .withMessage("Project name is required"),

  body("phone")
    .trim()
    .notEmpty()
    .withMessage("Phone number is required")
    .isMobilePhone()
    .withMessage("Invalid phone number"),

  body("budget")
    .notEmpty()
    .withMessage("Budget is required"),

  body("description")
    .trim()
    .notEmpty()
    .withMessage("Description is required")
    .isLength({ min: 10 })
    .withMessage("Description must be at least 10 characters"),

  body("links")
    .optional()
    .isURL()
    .withMessage("Invalid URL"),
];

exports.updateEnquiryValidation = [
  body("clientName").optional().trim().notEmpty(),
  body("projectName").optional().trim().notEmpty(),
  body("phone").optional().isMobilePhone(),
  body("budget").optional().notEmpty(),
  body("description").optional().isLength({ min: 10 }),
  body("links").optional().isURL(),
];
