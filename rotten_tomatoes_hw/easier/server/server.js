var path = require('path');
var express = require('express');

var models = require('./models');
models.sequelize.sync();

var app = express();

var PORT = process.env.PORT || 8000;

app.use(express.static('./client/public'));
require('./controllers/routes.js')(app);

app.listen(PORT);