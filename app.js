var express = require('express'),
  bodyParser = require('body-parser'),
  methodOverride = require('method-override'),
  Person = require('./models/main.js').Person,
  app = express();



app.set("view engine", "ejs");
// Middleware
app.use(bodyParser.urlencoded());
app.use(methodOverride("_method"));



app.get("/people", function(req, res){
  Person.all(function(err, allPeople){
  res.render("people/index", {people: [allPeople]})
  });
});

app.get("/people/new", function(req, res){
  res.render("people/new")
});

app.get("/people/:id", function(req,res){
  People.all(function(err, foundPerson))
  res.render("people/show", {person: {foundPerson} });
});

app.get("/people/:id/edit", function(req,res){
  res.render("people/edit", {person: {} });
});



app.post("/people", function(req, res){
  res.redirect("/people")
});

app.delete("/people/:id", function(req, res){
  Person.all(function(err, deletePeople))
  res.redirect("/people");
});

app.put("/people/:id", function(req,res){
  res.redirect("/people");
})

app.listen(3000, function(){
  console.log("THE SERVER IS LISTENING ON localhost:3000");
});
