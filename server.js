var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');

var port = process.env.PORT || 3000
var app = express();

app.use( express.static( __dirname + '/Frontend' ));

app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());

app.get('/', function(req,res){
    
    res.sendFile(path.join(__dirname, 'Frontend', 'index.html'));
    
});

app.get('/cv', function(req,res){
    
    res.sendFile(path.join(__dirname, 'Frontend', 'cv.html'));
    
});

app.get('/services', function(req,res){
    
    res.sendFile(path.join(__dirname, 'Frontend', 'services.html'));
    
});

app.get('/clients', function(req,res){
    
    res.sendFile(path.join(__dirname, 'Frontend', 'clients.html'));
    
});

app.get('/contacts', function(req,res){
    
    res.sendFile(path.join(__dirname, 'Frontend', 'contact.html'));
    
});


//Error Handling
app.get('/*', function(req,res){
    
    
    res.sendFile(path.join(__dirname, 'Frontend', 'error.html'));
    
    
});

app.listen(port, function(){
    
    console.log("Server Running on Port 3000!");
    
});