const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

const PORT = 3002;

app.get("/", (req, res) => {
  res.json({
    service: "Product Service",
    status: "Running",
    products: [
      {
        id: 1,
        name: "Laptop",
        price: 70000
      },
      {
        id: 2,
        name: "Mouse",
        price: 800
      }
    ]
  });
});

app.listen(PORT, () => {
  console.log(`Product Service running on port ${PORT}`);
});