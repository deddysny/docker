const express = require('express');
const app = express();

const bodyParser = require('body-parser')
const cors = require('cors')

const mongoose = require('mongoose')
// DB Config
const db = require("./database").mongoURI;

// connection to mongodb
mongoose
  .connect(db, { useNewUrlParser: true,useFindAndModify: false,useUnifiedTopology: true })
  .then(() => {
    console.log("MongoDB Connected");
  })
  .catch(err => {
    console.log(err);
  });

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
//Cross Origin
app.use(cors())
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,PATCH,OPTIONS');
  res.header("Access-Control-Allow-Headers", "Origin, Content-Type, Accept");
  next();
});

var name = process.env.NAME || '';
var MONGO_HOST = process.env.MONGO_HOST || 'localhost';
var MONGO_PORT = process.env.MONGO_PORT || '27017';
var PORT = process.env.PORT || 9000;

app.get('/', (req,res)=>{
    res.send('server '+name+' PORT '+ PORT+' run docker '+MONGO_HOST+' PORT '+ MONGO_PORT )
})

const userRoute = require('./routes/users')
app.use('/users', userRoute);

app.listen(PORT, ()=>{
    console.log('server run on PORT '+ PORT)
})