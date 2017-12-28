var express = require('express');
var app = express();

var bodyParser = require('body-parser');

var routes = require('./controllers/routes.js');

var session = require('express-session');

var models = require('./models');
models.sequelize.sync();

app.use(express.static('./client/public'));

app.use(session({
    secret: 'allthesmallthings',
    saveUninitialized: false,
    resave: false
}));

app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({ 
	limit: '50mb',
	extended: true, 
	parameterLimit:50000}));
app.use(bodyParser.text());
app.use(bodyParser.json());

app.use('/', routes);

var PORT = process.env.PORT || 8000;

app.listen(PORT, function () {
  console.log('app listening on port: ' + PORT);
});