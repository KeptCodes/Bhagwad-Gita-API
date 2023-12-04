import express from "express";
import cors from "cors";
import routes from "./routes";
import db from "./config/db";
import dotenv from "dotenv";

dotenv.config();
db();

const app = express();

const PORT = process.env.PORT || 8080;

app.use(cors());
app.use(express.json());

app.use(routes);

app.listen(PORT, () => {
  console.log(`"Server running on http://localhost:${PORT}/"`);
});
