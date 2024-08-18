const express = require("express");
const cors = require("cors");

// Initialize Express
const app = express();
app.use(express.json());
app.use(cors());

// Sample API Endpoint
app.get("/", (req, res) => {
  console.log("API hit: /");
  res.send("Hello from the backend!");
});

app.listen(process.env.PORT || 3000);
