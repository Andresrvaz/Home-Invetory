const express = require("express");
const bodyParser = require("body-parser")
const mongoose = require("mongoose");
const {v4: uuidv4 } = require("uuid");

const app = express();

app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));

app.set('view engine', 'ejs');
app.set('views','views');

mongoose.connect("mongodb://localhost:27017/homeInventoryApp")

const homeSchema = new mongoose.Schema({
    id: String,
    name: String,
    description: String,
    imageURL : String,
    quantity : Number
});

const HomeItem = mongoose.model("HomeItem",homeSchema)


app.get("/",(req,res) =>{
    res.render("home");
});

app.get("/myHome",(req,res) => {

    HomeItem.find({}, (err, foundItems) =>{   
     res.render("myHome",{foundItems: foundItems});
    });   

});

app.get("/myHome/items-managment",(req,res) =>{

    res.render("itemsManagment");

}).post("/myHome/items-managment",(req,res) =>{
    
    const newHomeItem = new HomeItem({
        id: uuidv4(),
        name: req.body.itemName,
        description: req.body.itemDescription,
        imageURL: req.body.imageURL,
        quantity: req.body.quantity
    });

    newHomeItem.save();

    res.redirect("/myHome")
});

app.post("/delete-item",(req,res) =>{

    HomeItem.findOneAndDelete(req.body.editBtn,(err,message) =>{
        if(err){
            console.log(err);
        } else {
            res.redirect("/myHome");
        }
    });
   
})

app.post("/edit-item",(req,res) => {
    
    res.redirect("/edit-item/id=" + req.body.editBtn)

});

app.get("/edit-item/id=:id",(req,res) =>{

    HomeItem.findOne({id:req.params.id}, (err,item) =>{
        if(err){
            console.log(err)
        } else {
            res.render("editSingleItem", {item : item})
        }
    })

    
});

app.post("/update-item",(req,res) =>{

    HomeItem.findOneAndUpdate({id:req.body.editBtn},{
        name: req.body.newItemName,
        description: req.body.newItemDescription,
        imageURL: req.body.newItemImageURL,
        quantity: req.body.newItemQuantity
    },(err,item) =>{
        if(err){
            console.log(err)
        } else {
            res.redirect("/myHome");
        }
    });

   
});

app.listen(5000, () => {
    console.log("Server up and running on port 5000")
});