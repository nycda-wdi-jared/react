var express = require('express');
var path = require('path');

var router = express.Router();

var models = require('./../models');
models.sequelize.sync();

router.get('/', function(req,res){
	res.sendFile(path.join(__dirname, '../../client/public/index.html'));
});

router.post('/api/post-task', (req,res) => {
	/*
		If the task entered is null, then res.json an object with a message statingthat
		If the task entered is not null:
			- Add it to the todo table
				- set task to the task entered
				- set completed to false
		In the callback of the post, query all of the todos and res.json the callback from that get
		Bonus: order the get callback by id
	*/
});

router.get('/api/tasks', (req,res) => {
	//query all of the todos and res.json the callback from that get
	//Bonus: order the get callback by id
});

router.get('/api/completed-tasks', (req,res) => {
	//query all of the todos where completed is true and res.json the callback from that get
});

router.get('/api/incomplete-tasks', (req,res) => {
	//query all of the todos where completed is false and res.json the callback from that get
});

router.put('/api/update-status/:id', (req,res) => {
	/*
		update completed in the todo table to req.body.completed
		where the id is the id params

		In the callback of the update, query all of the todos and res.json the callback from that get
		Bonus: order the get callback by id
	*/
});

router.get('*', (req,res) => {
	res.sendFile(path.join(__dirname, '../../client/public/index.html'));
});

module.exports = router;