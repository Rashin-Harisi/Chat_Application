const app = require("./app");
const connectDB = require("./config/db");

const PORT = 3001;
connectDB()

app.listen(PORT, "localhost", () => {
  console.log(`Backend running on http://localhost:${PORT}`);
});