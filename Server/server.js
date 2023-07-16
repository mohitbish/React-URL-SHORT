const express = require("express");
const app = express();
const mongoose = require("mongoose");
var cors = require("cors");
const Url_data = require("./Model/Url-Data");
var bodyParser = require("body-parser");

app.use(cors({origin: "https://url-short.onrender.com"}));

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("DB Connetion Successfull");
  })
  .catch((err) => {
    console.log(err.message);
  });

app.post("/submitroute", async (req, res) => {
  await Url_data.create({ full: req.body.data });
  console.log("added");
});

app.get("/getdata", async (req, res) => {
  const data = await Url_data.find();
  res.send(data);
});
app.post("/delete", async (req, res) => {
  await Url_data.deleteOne({ short: req.body.data });
});

app.listen(process.env.PORT, () => console.log("Server is running on ", process.env.PORT));
