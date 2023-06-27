const express = require("express");
const app = express();
const mongoose = require("mongoose");
const PORT = 8888;
const MANGO_URL = "mongodb://localhost:27017/Url-short";

mongoose
  .connect(MANGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("DB Connetion Successfull");
  })
  .catch((err) => {
    console.log(err.message);
  });

app.listen(PORT, () => console.log("Server is running on ", PORT));
