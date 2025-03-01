const express = require("express");
const cors = require("cors");
const surveyRoutes = require("./routes/survey"); // Import routes

require("dotenv").config();
const mongoose = require("mongoose");

const app = express();
app.use(express.json());
app.use(cors());

mongoose
  .connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("✅ MongoDB Connected"))
  .catch((err) => console.error("❌ MongoDB Connection Error:", err));

// ✅ Add this root route
app.get("/", (req, res) => {
  res.send("🚀 Backend is running!");
});

// ✅ Ensure API routes are correctly loaded
app.use("/api/survey", surveyRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
