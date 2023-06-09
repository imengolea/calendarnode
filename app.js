const express = require('express');
const bodyPareser = require('body-parser');
const mongoose = require('mongoose');
const md5=require("md5");

 
const app = express();

app.use(bodyPareser.urlencoded({extended: true}));
app.use(express.static('public'));

app.set('view engine', 'ejs');
mongoose.set('strictQuery', false);
mongoose.connect("mongodb://127.0.0.1:27017/calenderDB",
{useNewUrlParser: true, useUnifiedTopology: true});

const adminSchema =({
    email:String,
    password:String,   
  });
  const Admin = mongoose.model('Admin', adminSchema);



app.get('/', function(req, res){
    res.render('home')
});

app.get('/appartF2', function(req, res){
    res.render('appartF2')
});

app.get('/appartF31', function(req, res){
    res.render('appartF31')
});

app.get('/appartF32', function(req, res){
    res.render('appartF32')
});

app.get('/appartF33', function(req, res){
    res.render('appartF33')
});

app.get('/appartF4', function(req, res){
    res.render('appartF4')
});

app.get('/adminlogin', function(req, res){
    res.render('adminlogin')
});
app.post("/adminlogin",function(req,res){
    const email = req.body.adminemail;
    const password = req.body.password;
    Admin.findOne({email:email}) .then(function(foundAdmin){
        if(foundAdmin){
            if(foundAdmin.password === password){
                res.render("admin")
            }
        }  
    })
    .catch(function(err){
        console.log(err);
      }) 

})

app.get("/logout", function(req, res){
    res.redirect("/");
  });

app.listen(3000, function(){
    console.log('server started on port 3000')
});