const express = require('express');
const bodyPareser = require('body-parser');
const mongoose = require('mongoose');

 
const app = express();

app.use(bodyPareser.urlencoded({extended: true}));
app.use(express.static('public'));

app.set('view engine', 'ejs');
mongoose.set('strictQuery', false);
mongoose.connect("mongodb://127.0.0.1:27017/calenderDB",
{useNewUrlParser: true, useUnifiedTopology: true});





app.get('/', function(req, res){
    res.render('home')
});

app.get('/appartement/:appart', function(req, res){
    const requestedTitle = _.lowerCase(req.params.appart);
    res.render('appart', {
        title: requestedTitle,
    })
});


app.listen(3000, function(){
    console.log('server started on port 3000')
});