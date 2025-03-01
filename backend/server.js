const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db"); // ✅ This should now work
require("dotenv").config();

// Connect to MongoDB
connectDB();

const app = express();
app.use(express.json());
app.use(cors());

// Example API Route
app.get("/", (req, res) => {
  res.send("Backend is running!");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
