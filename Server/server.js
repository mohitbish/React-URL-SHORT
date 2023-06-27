const express = require("express");
const app = express();
const mongoose = require("mongoose");
const PORT = 8888;
var cors = require('cors')
const MANGO_URL = "mongodb://localhost:27017/Url-short";
var bodyParser = require('body-parser')



app.use(cors())


// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

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


app.post('/submitroute', async(req, res)=>{
  
  console.log(req.body)

});


app.listen(PORT, () => console.log("Server is running on ", PORT));
