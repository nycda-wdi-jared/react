var express = require("express");
var bodyParser = require("body-parser");
var nodemailer = require("nodemailer")

var path = require("path");

var app = express();

var PORT = process.env.PORT || 3000;

app.use(express.static("./client/public"));

app.use(bodyParser.json({ limit: '50mb'}));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname + "./../client/public/index.html"));
});

app.post('/api/email', function(req, res){
	var transporter = nodemailer.createTransport({
		service: 'Gmail',
		auth: {
			user: process.env.EMAIL,
			pass: process.env.EMAIL_PASS
		}
	});
	var mailOptions = {
	    from: '"Bob Saget" <nycda-teach@teachthis.com>',
	    subject: 'Contact Form',
	    to: process.env.EMAIL,
	    message: 'Name: ' + req.body.name + '\n' + 'Email: ' + req.body.email + '\n' + 'Message: ' + req.body.message,
	    html: '<p> ' + 'Name: ' + req.body.name + '<br>' + 'Email: ' + req.body.email + '<br>' + 'Message: ' + req.body.message + ' </p>'
	};
	transporter.sendMail(mailOptions, function(error, info){
	    if(error){
	        res.json({error: error});
	    } else {
			res.json({success: info});
	    }
	});
});

//wildcare route, when front end is refreshed, this defaults it to that page
//try the app without this route and refresh your page, see what happens
app.get("*", function(req, res) {
  res.sendFile(path.join(__dirname + "./../client/public/index.html"));
});

// Starting our express server
app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});
