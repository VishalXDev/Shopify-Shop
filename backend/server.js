import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import mongoose from "mongoose";
import surveyRoutes from "./routes/survey.js"; // ✅ Ensure correct extension

dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());

mongoose
  .connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("✅ MongoDB Connected"))
  .catch((err) => console.error("❌ MongoDB Connection Error:", err));

app.get("/", (req, res) => {
  res.send("🚀 Backend is running!");
});

app.use("/api/survey", surveyRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
