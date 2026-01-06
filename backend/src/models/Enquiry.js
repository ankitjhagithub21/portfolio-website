const mongoose = require("mongoose");

const enquirySchema = new mongoose.Schema({
  clientName: { type: String, required: true },
  projectName: { type: String, required: true },
  phone: { type: String, required: true },
  description: { type: String, required: true },
  budget: { type: String, required: true },
  links: { type: String },
}, { timestamps: true, versionKey:false });

const Enquiry =  mongoose.model("Enquiry", enquirySchema);

module.exports = Enquiry
