const express = require("express");
const cors = require("cors");
const axios = require("axios");

const app = express();

app.use(cors());

const PORT = 3000;
// Home Route
app.get("/", (req, res) => {
  res.json({
    message: "🚀 Production Kubernetes Platform API Gateway",
    status: "Running",
    endpoints: {
      users: "/users",
      products: "/products",
      orders: "/orders"
    }
  });
});

// User Service
app.get("/users", async (req, res) => {
  try {
    const response = await axios.get("http://localhost:3001");
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: "User Service unavailable" });
  }
});

// Product Service
app.get("/products", async (req, res) => {
  try {
    const response = await axios.get("http://localhost:3002");
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: "Product Service unavailable" });
  }
});

// Order Service
app.get("/orders", async (req, res) => {
  try {
    const response = await axios.get("http://localhost:3003");
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: "Order Service unavailable" });
  }
});

app.listen(PORT, () => {
  console.log(`API Gateway running on port ${PORT}`);
});