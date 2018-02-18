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

router.put('/api/update-message/:id', (req,res) => {
	console.log(req.body)
	models.Guestbook.update({message: req.body.message},{where:{id: req.params.id}}).then(function(success){
		models.Guestbook.findAll({order: [
            ['id', 'ASC']
        ]}).then(function(messages){
			res.json(messages)
		});
	}).catch(function(err){
		throw err
	});

});

router.get('*', (req,res) => {
	res.sendFile(path.join(__dirname, '../../client/public/index.html'));
});

module.exports = router;