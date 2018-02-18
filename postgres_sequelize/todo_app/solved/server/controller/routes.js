var express = require('express');
var path = require('path');

var router = express.Router();

var models = require('./../models');
models.sequelize.sync();

router.get('/', function(req,res){
	res.sendFile(path.join(__dirname, '../../client/public/index.html'));
});

router.post('/api/post-task', (req,res) => {
	if(req.body.task !== ''){
		models.Todo.create({
			task: req.body.task,
			completed: req.body.completed
		}).then(function(message){
			models.Todo.findAll({order: [
		            ['id', 'ASC']
		        ]}).then(function(tasks){
					res.json(tasks);
			});
		});
	} else {
		res.json({message: "null task"})
	}
});

router.get('/api/tasks', (req,res) => {
	models.Todo.findAll({order: [
            ['id', 'ASC']
        ]}).then(function(tasks){
		res.json(tasks);
	});
});

router.get('/api/completed-tasks', (req,res) => {
	models.Todo.findAll(
		{
	    	where: 
	    	{
	    		completed: true
	    	}
	    }
	).then(function(tasks){
		console.log(tasks)
		res.json(tasks);
	});
});

router.get('/api/incomplete-tasks', (req,res) => {
	models.Todo.findAll(
		{
	    	where: 
	    	{
	    		completed: false
	    	}
	    }
	).then(function(tasks){
		console.log(tasks)
		res.json(tasks);
	});
});

router.put('/api/update-status/:id', (req,res) => {
	models.Todo.update(
		{
			completed: req.body.completed
		},
		{
			where:
			{
				id: req.params.id
			}
		}
	).then(function(success){
		models.Todo.findAll({order: [
            ['id', 'ASC']
        ]}).then(function(tasks){
			res.json(tasks)
		});
	}).catch(function(err){
		throw err
	});
});

router.get('*', (req,res) => {
	res.sendFile(path.join(__dirname, '../../client/public/index.html'));
});

module.exports = router;