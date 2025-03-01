require("dotenv").config();
const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");
const surveyRoutes = require("./routes/survey");

// Connect to Database
connectDB();

const app = express();
app.use(express.json());
app.use(cors());

// Routes
app.use("/api/survey", surveyRoutes);

// Handle 404 Errors
app.use((req, res) => {
    res.status(404).json({ error: "❌ Route Not Found" });
});

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
