const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors({
  origin: "http://localhost:5173",
}));

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Backend is working");
});

app.get("/api/test", (req, res) => {
  res.json({ message: "Hello from backend 👋" });
});

module.exports = app;