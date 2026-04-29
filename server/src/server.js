const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 3001;

app.use(cors({
  origin: "http://localhost:5173",
}));

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Backend is working");
});

app.get("/api/test", (req, res) => {
  res.json({
    message: "Hello from backend 👋",
  });
});

app.listen(PORT, "localhost", () => {
  console.log(`Backend running on http://localhost:${PORT}`);
});