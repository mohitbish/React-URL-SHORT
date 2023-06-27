const express = require("express");
const app = express();
const mongoose = require("mongoose");
const PORT = 8888;
var cors = require('cors')
const Url_data = require('./Model/Url-Data')
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
  
  
  await Url_data.create({ full: req.body.data })
  console.log("added")

});

app.get('/getdata', async (req, res) => {
   const data = await Url_data.find()
  res.send(data)
  
})


app.listen(PORT, () => console.log("Server is running on ", PORT));
