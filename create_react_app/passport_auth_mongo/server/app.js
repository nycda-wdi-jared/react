// server/app.js
const express = require('express');
const morgan = require('morgan');
const path = require('path');
const bodyParser = require('body-parser')
const pkg = require('../package.json')
const app = express();

var cookieParser = require('cookie-parser');
var passport = require('passport');
var session = require('express-session');
var SequelizeStore = require('connect-session-sequelize')(session.Store);
var MongoStore = require('connect-mongo')(session);
//const db = require('../db')

const mongoose = require('mongoose');

const name = process.env.DATABASE_NAME || pkg.name;

const url = process.env.MONGO_URL || `mongodb://localhost/${name}`;
mongoose.connect(url)

app.use(cookieParser())
// app.use(session({
// 	secret: 'lesson',
// 	store: new SequelizeStore({
// 		db: db
//  	}),
//  	resave: true,
//  	saveUninitialized: false
// }));
app.use(session({
    secret: 'foo',
    store: new MongoStore({mongooseConnection: mongoose.connection})
}));
app.use(passport.initialize());
app.use(passport.session());

// Setup logger
app.use(morgan(':remote-addr - :remote-user [:date[clf]] ":method :url HTTP/:http-version" :status :res[content-length] :response-time ms'));
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
//json parser
app.use(bodyParser.json())
// Serve static assets
app.use(express.static(path.resolve(__dirname, '..', 'build')))
// Serve our api
.use('/api', require('./api'))

// Always return the main index.html, so react-router render the route in the client
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '..', 'build', 'index.html'));
});

module.exports = app;
