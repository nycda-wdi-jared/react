// Include Server Dependencies
var express = require("express");
var bodyParser = require("body-parser");

var path = require("path");

// Create a new express app
var app = express();
// Sets an initial port. We'll use this later in our listener
var PORT = process.env.PORT || 8000;

//using sequelize for my database connection
var models = require('./models');
models.sequelize.sync();

app.use(express.static('./client/public'));

app.use(bodyParser.json({ limit: '50mb'}));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

var routes = require('./controller/routes.js');
app.use('/', routes);

// Starting our express server
app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});
