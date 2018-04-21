const db = require('../db') //this is required
// const Review = require('../db/models/review');
const User = require('../db/models/user');

const router = require('express').Router();

const passport = require('passport');
var GitHubStrategy = require('passport-github').Strategy;

const REDIRECT_URI = 'http://localhost:3000';

passport.serializeUser(function(user,done){
	done(null, user);
});

passport.deserializeUser(function(obj,done){
	done(null, obj);
});

passport.use('github', new GitHubStrategy({
    clientID: process.env.CLIENT_ID,
    clientSecret: process.env.CLIENT_SECRET,
    callbackURL: "http://127.0.0.1:8000/api/users/auth/github/callback"
},
function(accessToken, refreshToken, profile, done) {
		User.findOne({where: { githubId: profile.id }}).then(function(user){
			if(user){
				return done(null, user);
			} else {
  				return User.create({
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

router.get('/', function(req, res, next) {
    User.findAll()
        .then(result => {
            res.status(200).send(result);
        })
        .catch(next);
});

router.get('/github', function(req, res, next) {
    // Review.findOne({
    //         where:{id:req.params.id},
    //         include: [Product]
    //     })
    //     .then(result => {
    //         res.status(200).send(result);
    //     })
    //     .catch(next);
    res.status(200).send("github clicked");
});

router.get('/auth/github', function(req,res,next){
	passport.authenticate('github', function(err, user, info){
	    if (err) {
	      	return next(err);
	    }
	    if (!user) {
	    	res.redirect(`${REDIRECT_URI}`);
	    }
	    req.login(user, function(err){
			if(err){
				return next(err);
			}
	      	res.redirect(`${REDIRECT_URI}/about`);        
		});
  	})(req, res, next);
});

router.get('/auth/github/callback', function(req,res,next){
	passport.authenticate('github', function(err, user, info){
	    if (err) {
	      	return next(err);
	    }
	    if (!user) {
	    	res.redirect(`${REDIRECT_URI}`);
	    }
	    req.login(user, function(err){
			if(err){
				return next(err);
			}
			res.redirect(`${REDIRECT_URI}/about`); 
		});
  	})(req, res, next);
});

module.exports = router;
