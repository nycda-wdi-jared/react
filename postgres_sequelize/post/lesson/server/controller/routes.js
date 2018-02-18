var express = require('express');
var path = require('path');

var router = express.Router();

var models = require('./../models');
models.sequelize.sync();

router.get('/', function(req,res){
	res.sendFile(path.join(__dirname, '../../client/public/index.html'));
});

router.get('/api/messages', (req,res) => {
	//sending to the client in ascending id order
	models.Guestbook.findAll({order: [
            ['id', 'ASC']
    	]}).then(function(messages){
			res.json(messages);
	});
});

router.post('/api/message', (req,res) => {
	models.Guestbook.create({
		name: req.body.name,
		message: req.body.message
	}).then((post) => {
		/*
			You only have to res.json with react
			Look for the console.log in the callback in the Guestbook.jsx
		*/
		res.json(post)
	})
})

router.get('*', (req,res) => {
	res.sendFile(path.join(__dirname, '../../client/public/index.html'));
});

module.exports = router;