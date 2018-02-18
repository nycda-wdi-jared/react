var express = require('express');
var path = require('path');

var router = express.Router();

var models = require('./../models');
models.sequelize.sync();

router.get('/', function(req,res){
	res.sendFile(path.join(__dirname, '../../client/public/index.html'));
});

router.get('/api/images', (req, res) => {
	models.Image.findAll({order: [
            ['id', 'ASC']
    	]}).then((images) => {
			res.json(images)
	})
})

router.post('/api/image', (req, res) => {
	models.Image.create({
		image_src: req.body.image_src
	}).then((image) => {
		models.Image.findAll({order: [
            ['id', 'ASC']
    	]}).then((images) => {
			res.json(images)
		})
	}).catch((err) => {
		res.json({error: err})
	})
})

router.get('*', (req,res) => {
	res.sendFile(path.join(__dirname, '../../client/public/index.html'));
});

module.exports = router;