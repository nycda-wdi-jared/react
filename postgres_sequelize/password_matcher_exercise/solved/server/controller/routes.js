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
	models.User.findOne({where: {username: req.body.username}}).then((user) => {
		res.json(bcrypt.compareSync(req.body.password, user.password_hash));
	});
});

router.get('*', (req,res) => {
	res.sendFile(path.join(__dirname, '../../client/public/index.html'));
});

module.exports = router;