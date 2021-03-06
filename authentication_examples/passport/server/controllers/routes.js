var path = require('path');

var LocalStrategy = require('passport-local').Strategy;
var bcrypt = require('bcryptjs');

var models = require('../models');
var html_creator = require('./../helpers/html_creator.js');

var nodemailer = require("nodemailer");
const uuidv4 = require('uuid/v4');

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

	app.get('/auth/github', function(req,res,next){
		passport.authenticate('github', function(err, user, info){
		    if (err) {
		      	return next(err);
		    }
		    if (!user) {
		    	res.redirect('/login');
		    }
		    req.login(user, function(err){
				if(err){
					return next(err);
				}
		      	res.redirect('/home');        
			});
	  	})(req, res, next);
	});

	app.get('/auth/github/callback', function(req,res,next){
		passport.authenticate('github', function(err, user, info){
		    if (err) {
		      	return next(err);
		    }
		    if (!user) {
		    	res.redirect('/login');
		    }
		    req.login(user, function(err){
				if(err){
					return next(err);
				}
				res.redirect('/home'); 
			});
	  	})(req, res, next);
	});

	app.post('/api/sign-in', function(req,res,next){
		passport.authenticate('local-signin', function(err, user, info){
		    if (err) {
		      	return next(err);
		    }
		    if (!user) {
		    	return res.json({ success : false, message : 'authentication failed', info: info });
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

	app.post('/api/new-password', (req, res) => {
		models.User.findOne({where: {id: req.user.id}}).then((user)=> {
	        if(bcrypt.compareSync(req.body.currentPassword, user.get('password_hash'))){
	        	var salt = bcrypt.genSaltSync(10);
				var hashedPassword = bcrypt.hashSync(req.body.newPassword, salt);
	        	models.User.update({password_hash: hashedPassword, salt: salt},{where:{id: req.user.id}}).then((response) => {
	        		res.status(200).json({message: 'Password Successfully Changed'});
	        	})
	        }
		})
	});

	app.post('/api/forgot-password-change/:uuid', (req, res) => {
		models.User.findOne({where: {uuid: req.params.uuid}}).then((user)=> {
	        if(bcrypt.compareSync(req.body.currentPassword, user.get('password_hash'))){
	        	var salt = bcrypt.genSaltSync(10);
				var hashedPassword = bcrypt.hashSync(req.body.newPassword, salt);
	        	models.User.update({password_hash: hashedPassword, salt: salt, uuid: uuidv4()},{where:{uuid: req.params.uuid}}).then((response) => {
	        		res.status(200).json({message: 'Password Successfully Changed'});
	        	})
	        }
		})
	});

	app.post('/api/forgot-password', (req, res) => {
		models.User.findOne({where: {email: req.body.email.toLowerCase()}}).then((user) => {
			if(user){
				var transporter = nodemailer.createTransport({
					service: 'Gmail',
					auth: {
						user: process.env.EMAIL,
						pass: process.env.EMAIL_PASS
					}
				});
				var mailOptions = {
				    from: '"React Passport" <nycda-teach@teachthis.com>',
				    subject: 'Forgotten Password',
				    to: user.email,
				    message: 'Name: ' + user.name + '\n' + 'Email: ' + user.email + '\n' + 'Message: Forgotten Password Link',
				    html: html_creator(user)
				};
				transporter.sendMail(mailOptions, function(error, info){
				    if(error){
				        res.json({error: error});
				    } else {
						res.json({success: info});
				    }
				});
			} else {
				res.json({error: "No user with that email"})
			}
		})
	})

	app.get('*', function(req,res){
		res.sendFile(path.join(__dirname, './../../client/public/index.html'));
	});

}