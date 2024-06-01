const express = require('express');
const app = express();
const path = require('path');

app.use(express.static(path.join(__dirname,'public')));
app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.set('view engine', 'ejs');

app.get("/", function(req,res){
    res.render("index");
});

app.post("/create", function(req,res){
    
})


app.listen(3000,function(req,res){
    console.log("server is working");
})

