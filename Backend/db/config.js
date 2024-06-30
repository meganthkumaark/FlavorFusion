const mongoose = require("mongoose");
mongoose
  .connect("mongodb://localhost:27017/db")
  .then(() => {
    console.log("mongodb://localhost:27017/db");
  })
  .catch((error) => {
    console.error("Error connecting to the database:", error);
  });
