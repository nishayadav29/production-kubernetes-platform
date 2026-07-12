const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

const PORT = 3003;

app.get("/", (req, res) => {
  res.json({
    service: "Order Service",
    status: "Running",
    orders: [
      { orderId: 101, product: "Laptop" },
      { orderId: 102, product: "Mouse" }
    ]
  });
});

app.listen(PORT, () => {
  console.log(`Order Service running on port ${PORT}`);
});