import express from "express";

const app = express();

// Middleware
app.use(express.json());

// ✅ Add this route to handle the root URL
app.get("/", (req, res) => {
  res.send("Backend is running successfully!");
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
