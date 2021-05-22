const express = require('express');
const app = express();//express initialize
const https = require('https');
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");//use ejs with express
app.use(express.static('public'));
let forminputs=["p1","p2","p3"];
const date = require(__dirname+"/date.js");
console.log(date.getdate());
console.log(date.getday());



app.get("/",function(req, res){
    res.render("list",{
        listtitle : date.getday(),
        forminputs:forminputs,
    });
});

app.post('/',function(req,res){
    let forminput = req.body.newitem;
    if(forminput!=="")
        if(req.body.button === "Work"){
            api_name_list.push(forminput+"\n");
            res.redirect("/work");
        }
    else{
            forminputs.push(forminput);
            res.redirect("/");
        }
});
let api_name;
let api_name_list = [];
// api_name = prompt("Enter : \n");
app.get(`/work`,function(req,res){
    res.render("list",{
       listtitle : `Work List`,
       forminputs : api_name_list,
    });
})
app.get('/about',function(req,res){
   res.render("about");
});
// app.post(`/work`,function (req,res){
//     let apl = req.body.newitem;
//     if(apl!=="")
//         api_name_list.push(apl+"\n");
//     res.redirect(`/`);
// });

// app.post('/r',function(req,res){
//     let forminput = req.body.newitem;
//     forminputs.pop(forminput);
//     res.redirect("/")
// });


app.listen(process.env.PORT || 3000 ,function(){
    console.log("localhost:3000");
});
