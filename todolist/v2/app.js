//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require('mongoose');
// const date = require(__dirname + "/date.js");

const app = express();

mongoose.set('useNewUrlParser', true);
// mongoose.set('useCreateIndex', true);
mongoose.set('useFindAndModify',false);
mongoose.set('useUnifiedTopology', true);
mongoose.connect("mongodb://localhost:27017/todolistDB");

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(express.static("public"));

// const items = ["Buy Food", "Cook Food", "Eat Food"];
// const workItems = [];

const itemsSchema = {
  name: String,
};
const Item = mongoose.model("Item", itemsSchema);
const item1 = new Item({
  name: "Eat food",
});
const item2 = new Item({
  name: "Drink Water",
});
const item3 = new Item({
  name: "Study",
});
const defaultitems = [item1, item2, item3];


// to insert original items


const listSchema = {
  name:String,
  items:[itemsSchema],
}
const List = mongoose.model("List",listSchema);



app.get("/", function(req, res) {
  Item.find({}, function(err, items) {
    if (items.length === 0) {
      Item.insertMany(defaultitems, function(err) {
        if (err) {
          console.log(err);
        }
      });
      res.redirect('/');
    }
    if (err)
      console.log(err);
    else
      // console.log(items);
    res.render("list", {
      listTitle: "Today",
      newListItems: items
    });
  });
  // const day = date.getDate();
});

app.post("/", function(req, res) {

  const itemname = req.body.newItem;
  const listname = req.body.list;
  const item = new Item({
    name:itemname,
  });
  if(listname==="Today"){
    item.save();
    res.redirect('/');
  }
  else{
    List.findOne({name:listname},function(err,foundlist){
      foundlist.items.push(item);
      foundlist.save();
      res.redirect('/'+listname);
    });
  }


});


app.get("/:customListName",function(req, res){
  const customlist = req.params.customListName;
  List.findOne({name:customlist},function(err,foundList){
    if(!err){
      if(!foundList){
        const list = new List({
          name:customlist,
          items:defaultitems
        });
        list.save();
        res.redirect('/'+customlist);
      }
      else{
        res.render("list",{
          listTitle: foundList.name,
          newListItems:foundList.items
        });
      }
    }
  });
});

app.post("/delete",function (req,res) {
  console.log(req.body.checkbox);
  Item.findByIdAndDelete(req.body.checkbox,function (err) {
    if(err){
      console.log(err);
    }
    else{
      console.log("delete");
      res.redirect('/');
    }
  });
});

app.get("/about", function(req, res) {
  res.render("about");
});

app.listen(3000, function() {
  console.log("Server started on port 3000");
});
