import express from "express";
import cors from "cors";

const app = express();
app.use(cors());

// Middleware
app.use(express.json());

// Mock product data
const products = [
  {
    id: 1,
    name: "Wireless Bluetooth Earbuds",
    description: "High-quality sound with noise cancellation and long battery life.",
    price: 2999,
    image: "https://via.placeholder.com/150",
  },
  {
    id: 2,
    name: "Smart Fitness Watch",
    description: "Tracks your heart rate, steps, sleep, and workouts.",
    price: 4999,
    image: "https://via.placeholder.com/150",
  },
  {
    id: 3,
    name: "Mechanical Gaming Keyboard",
    description: "RGB backlit keys with a tactile response for gaming enthusiasts.",
    price: 3499,
    image: "https://via.placeholder.com/150",
  },
  {
    id: 4,
    name: "4K Ultra HD Smart TV",
    description: "Enjoy stunning picture quality with built-in streaming apps.",
    price: 39999,
    image: "https://via.placeholder.com/150",
  },
  {
    id: 5,
    name: "Noise Cancelling Headphones",
    description: "Immerse yourself in music with active noise cancellation.",
    price: 7999,
    image: "https://via.placeholder.com/150",
  },
  {
    id: 6,
    name: "Gaming Mouse with RGB",
    description: "Ergonomic gaming mouse with programmable buttons.",
    price: 1999,
    image: "https://via.placeholder.com/150",
  },
  {
    id: 7,
    name: "Portable Power Bank",
    description: "10000mAh battery backup for your devices on the go.",
    price: 1299,
    image: "https://via.placeholder.com/150",
  },
  {
    id: 8,
    name: "Wireless Charging Pad",
    description: "Fast wireless charging for iPhone, Samsung, and more.",
    price: 1799,
    image: "https://via.placeholder.com/150",
  },
  {
    id: 9,
    name: "Laptop Cooling Pad",
    description: "Reduce overheating with a silent cooling fan.",
    price: 1599,
    image: "https://via.placeholder.com/150",
  },
  {
    id: 10,
    name: "Smart LED Light Strip",
    description: "Voice-controlled LED light strip with multiple colors.",
    price: 2299,
    image: "https://via.placeholder.com/150",
  },
  {
    id: 11,
    name: "Wireless Home Security Camera",
    description: "1080p security camera with night vision and motion detection.",
    price: 5999,
    image: "https://via.placeholder.com/150",
  },
  {
    id: 12,
    name: "Mini Projector",
    description: "Compact projector for movies and presentations.",
    price: 8999,
    image: "https://via.placeholder.com/150",
  },
  {
    id: 13,
    name: "USB-C Hub Adapter",
    description: "Expand your laptop’s connectivity with multiple ports.",
    price: 3499,
    image: "https://via.placeholder.com/150",
  },
  {
    id: 14,
    name: "External Hard Drive - 1TB",
    description: "Reliable storage solution for your important files.",
    price: 4999,
    image: "https://via.placeholder.com/150",
  },
  {
    id: 15,
    name: "Smart Air Purifier",
    description: "Removes dust, pollen, and smoke for cleaner air.",
    price: 10999,
    image: "https://via.placeholder.com/150",
  },
  {
    id: 16,
    name: "Digital Drawing Tablet",
    description: "Pressure-sensitive pen for artists and designers.",
    price: 6999,
    image: "https://via.placeholder.com/150",
  },
  {
    id: 17,
    name: "Smart Door Lock",
    description: "Keyless entry with fingerprint and app control.",
    price: 12999,
    image: "https://via.placeholder.com/150",
  },
  {
    id: 18,
    name: "Bluetooth Speaker",
    description: "Portable speaker with deep bass and waterproof design.",
    price: 3499,
    image: "https://via.placeholder.com/150",
  },
  {
    id: 19,
    name: "Car Dash Camera",
    description: "Full HD recording with night vision and motion detection.",
    price: 6999,
    image: "https://via.placeholder.com/150",
  },
  {
    id: 20,
    name: "Foldable Laptop Stand",
    description: "Ergonomic laptop stand for better posture and cooling.",
    price: 1999,
    image: "https://via.placeholder.com/150",
  },
];

// ✅ Route to get all products
app.get("/api/products", (req, res) => {
  res.json(products);
});

// ✅ Root route to check if the backend is running
app.get("/", (req, res) => {
  res.send("✅ Backend is running successfully!");
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server is running on http://localhost:${PORT}`);
});
