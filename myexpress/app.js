var express = require('express');
var bodyParse = require('body-parser');
var path = require('path');
var port = 3000;
var app = express();

app.use(function(req,res,next){
	console.log('Time: ',Date.now());
	next();
})

app.use(bodyParse.json());
app.use(bodyParse.urlencoded({extended:false}));
app.use(express.static(path.join(__dirname,'public')));

app.get('/',function(req,res){
	res.send('Hello world!');
});

app.get('/about',function(req,res){
	res.send('about page');
});

app.listen(port);
console.log('server started on port '+port);
module.exports=app;