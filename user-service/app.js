const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

const PORT = 3001;

app.get("/", (req, res) => {
  res.json({
    service: "User Service",
    status: "Running",
    users: [
      { id: 1, name: "Alice" },
      { id: 2, name: "Bob" }
    ]
  });
});

app.listen(PORT, () => {
  console.log(`User Service running on port ${PORT}`);
});