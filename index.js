require("dotenv").config();
require("./db");
const getRoutes = require("./routers/get.router");
// const morgan = require("morgan");
const express = require("express");
const cors = require("cors");
const http = require("http");

// constants
const app = express();
const PORT = process.env.PORT || 8080;

// express injections with middlewares
// app.use(morgan("common"));
app.use(cors());
app.use(express.json());
app.use("/api", getRoutes);

const server = http.createServer(app);

server.listen(PORT, () => {
  console.log(`"Server running on http://localhost:${PORT}/"`);
});
