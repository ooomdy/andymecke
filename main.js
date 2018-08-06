var express = require('express');
var app = express();


app.use(express.static('public'));

app.get("/", function(req, res){
  res.render('index.ejs');
});

app.get("/home", function(req, res){
  res.render('index.ejs');
});

app.get("/career", function(req, res){
  res.render('career.ejs');
});

app.get("/projects", function(req, res){
  res.render('projects.ejs');
});

app.get("/connections", function(req, res){
  res.render('connections.ejs');
});

app.get("/about-me", function(req, res){
  res.render('about-me.ejs');
});

app.get("/collection", function(req, res){
  res.render('collection.ejs');
});

app.get("*", function(req, res){
  res.send('Nope');
});
app.listen(8080, () => {
  console.log('Server is up on 8080');
});
