var express = require('express');
var path = require('path');
var bcrypt = require('bcryptjs');

var router = express.Router();

var models = require('./../models');
models.sequelize.sync();

router.get('/', function(req,res){
	res.sendFile(path.join(__dirname, '../../client/public/index.html'));
});

router.post('/api/matcher', (req,res) => {
	/*
		- query your database to find one field where the username in the database
		matches req.body.username
		- within that, res.json the bcrypt.compareSync
			- i.e. res.json(bcrypt.compareSync(password from client side, users password in the database))
	*/
});

router.get('*', (req,res) => {
	res.sendFile(path.join(__dirname, '../../client/public/index.html'));
});

module.exports = router;