import mongoose from "mongoose";

const dbUrl = process.env.MONGODB_URI as string;

const db = () => {
  mongoose
    .connect(dbUrl, {})
    .then(() => {
      console.log("Connected to MongoDB");
      console.log("");
    })
    .catch((err) => {
      console.log("Error connecting to MongoDB", err);
    });
};
export default db;
