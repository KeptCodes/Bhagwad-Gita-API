const mongoose = require("mongoose");

mongoose
  .connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
  })
  .then(() => {
    console.log("Connected to MongoDB");
    console.log("");
  })
  .catch((err) => {
    console.log("Error connecting to MongoDB", err);
  });
