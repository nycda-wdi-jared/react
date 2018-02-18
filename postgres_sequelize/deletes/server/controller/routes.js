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

router.delete('/api/delete-message/:id', (req,res) => {
	models.Guestbook.destroy({where: {id: req.params.id}}).then(() => {
		models.Guestbook.findAll({order: [
            ['id', 'ASC']
        ]}).then(function(messages){
			res.json(messages)
		})
	})
});

router.get('*', (req,res) => {
	res.sendFile(path.join(__dirname, '../../client/public/index.html'));
});

module.exports = router;