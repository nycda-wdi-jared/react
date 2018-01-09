// Include Server Dependencies
var express = require("express");
var path = require("path");

// Create a new express app
var app = express();
// Sets an initial port. We'll use this later in our listener
var PORT = process.env.PORT || 3000;

app.use(express.static("./public"));

app.get("/", function(req, res) {
  res.sendFile(__dirname + "./public/index.html");
});

app.get("*", function(req, res) {
  res.sendFile(path.join(__dirname + "./public/index.html"));
});

// Starting our express server
app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});
