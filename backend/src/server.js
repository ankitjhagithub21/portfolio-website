require("dotenv").config();
const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db.js");

const app = express();

app.use(cors({
  origin:process.env.FRONTEND_URL || "http://localhost:5173",
  credentials:true
}));
app.use(express.json());


app.use("/api/enquiries", require("./routes/enquiryRoutes.js"));

connectDB()

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => console.log(`Server running on ${PORT}`));
