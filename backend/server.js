require("dotenv").config();  // Load .env variables
const express = require("express");
const connectDB = require("./config/db");

const app = express();
const PORT = process.env.PORT || 5000;

// Connect to Database
connectDB();

app.listen(PORT, () => {
    console.log(`🚀 Server running on port ${PORT}`);
});
