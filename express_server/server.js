const express = require("express");
const app = express();
app.get('/', function (req, res){
    res.sendFile(__dirname+'/index.html');
});

app.get('/about', function (request, response){
    response.send("<p>onsectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud </p>");
});
app.listen(3000,function(){
    console.log("Server started")
});
