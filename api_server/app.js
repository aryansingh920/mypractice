const express = require('express');
const app = express();
const https = require('https');
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: true}));


app.get('/', function(req, res){
  res.sendFile( __dirname + "/index.html");

});
app.post("/",function(req,res){
  // console.log("post recieved");
  let city = (req.body.Cityname);
  https.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=270ac55f60575122811eb30890c194ae&units=metric`,function(response){
    // console.log(response);
    console.log(response.statusCode);
    response.on('data', function(data){
      // console.log(data);
      const parsedData = JSON.parse(data);
      // console.log(parsedData);
      // console.log(parsedData.main.temp);
      res.write(`<h1>The temperature in ${city} is ${parsedData.main.temp} °C</h1>`);
      res.write(`<h2>The weather is currently : ${parsedData.weather[0].description}</h2>`);
      res.write(`<img src="http://openweathermap.org/img/wn/${parsedData.weather[0].icon}@2x.png">`);
      res.send();
    });
  });
});



app.listen(7777 , function(){
  console.log("Server running at 7777");
});
