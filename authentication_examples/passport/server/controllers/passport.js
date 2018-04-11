var models = require('../models');

var LocalStrategy = require('passport-local').Strategy;
var GitHubStrategy = require('passport-github').Strategy;
var bcrypt = require('bcrypt-nodejs');

module.exports = function(passport) {

	passport.serializeUser(function(user,done){
		done(null, user);
	});

	passport.deserializeUser(function(obj,done){
		done(null, obj);
	});

	passport.use('local-signin', new LocalStrategy({
		usernameField: 'username',
		passwordField: 'password',
		passReqToCallback: true
	},
	function(req, username, password, done){
		process.nextTick(function(){
			models.User.findOne({where: {username: username}}).then(function(user){
				if(!user)
					return done(null, false, {message: 'no user'});
		        if (!bcrypt.compareSync(password, user.get('password_hash'))){
		          return done(null, false, {message: 'incorrect password'});
		        }
				return done(null, user);
			});
		});
	}));

	passport.use('local-signup', new LocalStrategy({
		usernameField: 'username',
		passwordField: 'password',
		passReqToCallback: true
	},
	function(req, username, password, done){
		process.nextTick(function(){
			models.User.findOne({where: {username: username}}).then(function(user){
				if(user){
					return done(null, false, req.flash('signupMessage', 'That username already taken'));
				} else {
	  				return models.User.create({
	  					name: req.body.name,
	  					username: username,
	  					email: req.body.email,
	  					password: password
	  				}).then(function(newUser){
	  					return done(null, newUser)
						}).catch(function(err){
							console.error(err);
						})
				};
	  		});
	    });
	}));

	passport.use('github', new GitHubStrategy({
	    clientID: process.env.GITHUB_CLIENT_ID,
	    clientSecret: process.env.GITHUB_SECRET,
	    callbackURL: "http://localhost:8000/auth/github/callback"
	},
	function(accessToken, refreshToken, profile, done) {
			models.User.findOne({where: { githubId: profile.id }}).then(function(user){
				if(user){
					return done(null, user);
				} else {
	  				return models.User.create({
	  					name: profile.displayName,
	  					githubId: profile.id,
	  					email: profile.emails[0].value,
	  					username: profile.username
	  				}).then(function(newUser){
	  					return done(null, newUser)
						}).catch(function(err){
							console.error(err);
						})
				};
	  		});
		}
	));

}
