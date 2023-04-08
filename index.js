require("dotenv").config();
require("./db");
const getRoutes = require("./routers/get.router");
const morgan = require("morgan");
const express = require("express");
const cors = require("cors");

// constants
const app = express();
const PORT = process.env.PORT || 8080;

// express injections with middlewares
app.use(morgan("dev"));
app.use(cors());
app.use(express.json());
app.use("/api", getRoutes);

app.listen(PORT, () => {
  console.log("");
  console.log(`Server is running on port ${PORT}`);
  console.log(`http://localhost:${PORT}`);
  console.log("");
});
