var express = require("express");
var bodyParser = require("body-parser");

var path = require("path");

var app = express();

var PORT = process.env.PORT || 3000;

app.use(express.static("./public"));

app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname + "./public/index.html"));
});

//wildcare route, when front end is refreshed, this defaults it to that page
//try the app without this route and refresh your page, see what happens
app.get("*", function(req, res) {
  res.sendFile(path.join(__dirname + "/public/index.html"));
});

// Starting our express server
app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});
