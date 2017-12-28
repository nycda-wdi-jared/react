var express = require('express');
var app = express();

var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var bcrypt = require('bcrypt-nodejs');
var passport = require('passport');
var session = require('express-session');
// var session = require('cookie-session')
var SequelizeStore = require('connect-session-sequelize')(session.Store);
var LocalStrategy = require('passport-local').Strategy;
var routes = require('./controllers/routes.js');
var flash = require('connect-flash');

var models = require('./models');
models.sequelize.sync();

app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.text());
app.use(bodyParser.json());

app.use(express.static('./client/public'));
app.use('/', routes);

var PORT = process.env.PORT || 8000;

app.listen(PORT);