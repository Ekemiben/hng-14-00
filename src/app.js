const express = require("express");
const cors = require("cors");
const classifyRoute = require("./routes/classify.route");

const app = express();

// Middleware
app.use(cors({ origin: "*" })); // REQUIRED
app.use(express.json());

// Routes
app.use("/api", classifyRoute);

// Health check
app.get("/", (req, res) => {
  res.send("API is running...");
});

// Global Error Handler
app.use((err, req, res, next) => {
  console.error(err);

  res.status(500).json({
    status: "error",
    message: "Internal Server Error",
  });
});

module.exports = app;