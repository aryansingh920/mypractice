//jshint esversion:6

const express = require("express");
const app = express();
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({extended: true}));
app.get('/', function(req, res) {
  // res.send("<h2>Hello world</h2>");
  res.sendFile(__dirname + "/index.html");
});
app.post('/', function(req, res){
  var num1 = Number(req.body.num1);
  var num2 = Number(req.body.num2);
  let sum = num1 + num2;
  res.send(`Sum : ${sum} .`);
});
app.listen(3000, function() {
  console.log("Server started");
});
