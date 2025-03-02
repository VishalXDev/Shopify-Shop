import express from "express";

const app = express();
import cors from "cors";
app.use(cors());

app.get("/api/products", (req, res) => {
  res.json([
    { id: 1, name: "Product A" },
    { id: 2, name: "Product B" },
  ]);
});

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
