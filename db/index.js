const mongoose = require("mongoose");

mongoose
  .connect(
    process.env.MONGODB_URI || "mongodb://127.0.0.1:27017/bhagavad_gita",
    {
      useNewUrlParser: true,
    }
  )
  .then(() => {
    console.log("Connected to MongoDB");
    console.log("");
  })
  .catch((err) => {
    console.log("Error connecting to MongoDB", err);
  });
