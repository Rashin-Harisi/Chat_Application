const express = require("express");
const cors = require("cors");
const userRoutes = require("./routes/userRoutes");
const swaggerUi = require("swagger-ui-express");
const swaggerSpec = require("./config/swagger")

const app = express();
app.use(cors({
  origin: "http://localhost:5173",
}));
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Backend is working");
});
app.use("/users", userRoutes);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));
module.exports = app;