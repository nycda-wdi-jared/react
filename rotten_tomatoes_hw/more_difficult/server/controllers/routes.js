var path = require('path');

var LocalStrategy = require('passport-local').Strategy;
var bcrypt = require('bcrypt-nodejs');

var models = require('../models');
var request = require('request');

module.exports = (app, passport) => {

	app.get('/', function(req,res){
		res.sendFile(path.join(__dirname, './../../client/public/index.html'));
	});

	app.get('/api/sign-up', function(req,res){
		if(req.user){
			res.json({message: 'signed-in', user_id: req.user.id});
		}
	});

	app.get('/api/sign-in', function(req,res){
		if(req.user){
			res.json({message: 'signed-in', user_id: req.user.id});
		}
	});

	app.post('/api/sign-up', function(req,res,next){
		passport.authenticate('local-signup', function(err, user, info){
			if (err) {
				return next(err);
			} else {
				res.json({user: user, info: info})
			}
		})(req, res, next);
	});

	app.post('/api/sign-in', function(req,res,next){
		passport.authenticate('local-signin', function(err, user, info){
		    if (err) {
		      	return next(err);
		    }
		    if (!user) {
		    	return res.status(401).json({ success : false, message : 'authentication failed', info: info });
		    }
		    req.login(user, function(err){
				if(err){
					return next(err);
				}
		      	return res.status(200).json({ success : true, message : 'authentication succeeded', object : user });        
			});
	  	})(req, res, next);
	});

	app.get('/api/signed-in', (req,res) => {
		if(req.user){
			res.json({message: 'signed-in', user: req.user});
		} else {
			res.json({message: 'no req.user'})
		}
	})

	app.delete('/api/logout', function (req, res) {
		req.session.destroy(function(){
			res.status(204).send();
		});
	});

	app.get('/api/movies', (req, res) => {
		models.Movie.findAll({order: [
            ['id', 'ASC']
    	]}).then((movies) => {
			res.json(movies)
		})
	});

	app.get('/api/add-movies', (req, res) => {
	    let api_url = "http://omdbapi.com?apikey=40e9cece&s=reservoir+dogs&r=json"
	    request(api_url, (err, results, html) => {
	    	var body = JSON.parse(html)
	    	models.Movie.create({
	    		title: body.Search[0].Title,
	    		year: body.Search[0].Year,
	    		imdbID: body.Search[0].imdbID,
	    		poster: body.Search[0].Poster
	    	}).then((cb) => {
	    		res.json(cb)
	    	})
	    })
	});

	app.put('/api/update-likers/:movie', (req, res) => {
		models.Comment.update(req.body.comment, {where: {id: req.body.comment_id}}).then((updated) => {
			models.Comment.findAll({order: [
		            ['id', 'ASC']
		        ]}).then(function(messages){
		        	var split = req.params.movie.split("+");
		        	for(var i = 0; i < split.length; i++){
		        		split[i] = split[i].charAt(0).toUpperCase() + split[i].substring(1, split[i].length)
		        	}
		        	var joined = split.join(" ");
					models.Movie.findOne({where: {title: joined}}).then((movie) => {
						var movieMessages = []
						messages.forEach((message) => {
							if(message.movie_id == movie.id){
								movieMessages.push(message)
							}
						})
						res.json(movieMessages);
					})
			});
		})
		// i like this code:
		// -----------------------------------------------------
		// models.Movie.findOne({where: {title: joined}}).then((movie) => {
		// 	movie.likers.push(req.params.id);
		// 	movie.update({
		// 		likers: movie.likers
		// 	},{
		// 		where: {
		// 			id: movie.id
		// 		}
		// 	})
		// })
	});

	app.post('/api/message', (req,res) => {
		if(req.body.message !== ''){
			models.Comment.create({
				name: req.body.name,
				message: req.body.message,
				movie_id: req.body.movie_id,
				user_id: req.body.user_id
			}).then(function(message){
				models.Comment.findAll({order: [
			            ['id', 'ASC']
			        ]}).then(function(messages){
			        	var movieMessages = messages.filter((message) => {
			        		return message.movie_id == req.body.movie_id
			        	})
			        	res.json(movieMessages)
				});
			});
		} else {
			res.json("null_message")
		}
	});

	app.get('/api/messages', (req,res) => {
		models.Comment.findAll({order: [
	            ['id', 'ASC']
	        ]}).then(function(messages){
				res.json(messages);
		});
	});

	app.get('/api/messages/:movie', (req,res) => {
		models.Comment.findAll({order: [
	            ['id', 'ASC']
	        ]}).then(function(messages){
	        	var split = req.params.movie.split("+");
	        	for(var i = 0; i < split.length; i++){
	        		split[i] = split[i].charAt(0).toUpperCase() + split[i].substring(1, split[i].length)
	        	}
	        	var joined = split.join(" ");
				models.Movie.findOne({where: {title: joined}}).then((movie) => {
					var movieMessages = []
					messages.forEach((message) => {
						if(message.movie_id == movie.id){
							movieMessages.push(message)
						}
					})
					res.json(movieMessages);
				})
		});
	});

	app.delete('/api/delete-message/:id/:movie_id', (req,res) => {
		models.Comment.destroy({where: {id: req.params.id}}).then(() => {
			models.Comment.findAll({order: [
	            ['id', 'ASC']
	        ]}).then(function(messages){
	        	var movieMessages = messages.filter((message) => {
	        		return message.movie_id == req.params.movie_id
	        	})
	        	res.json(movieMessages)
			});
		})
	});

	app.put('/api/update-message/:id/:movie_id', (req,res) => {
		models.Comment.update({message: req.body.message},{ where: { id: req.params.id}}).then(function(message){
			models.Comment.findAll({order: [
	            ['id', 'ASC']
	        ]}).then(function(messages){
	        	var movieMessages = messages.filter((updatedMessage) => {
	        		return updatedMessage.movie_id == req.params.movie_id
	        	})
	        	res.json(movieMessages)
			});
		}).catch(function(err){
			throw err
		});
	});

	app.put('/api/rate-movie', (req,res) => {
		models.Movie.update(req.body,{ where: {id: req.body.id}}).then(function(message){
			models.Movie.findOne({where:{id: req.body.id}}).then(function(movie){
	        	res.json(movie)
			});
		}).catch(function(err){
			throw err
		});
	});

	app.get('*', function(req,res){
		res.sendFile(path.join(__dirname, './../../client/public/index.html'));
	});

}