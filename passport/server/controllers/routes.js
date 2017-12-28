var express = require('express');
var path = require('path');

var router = express.Router();

var models = require('../models');

var cookieParser = require('cookie-parser');
var bcrypt = require('bcrypt-nodejs');
var passport = require('passport');
var session = require('express-session');
var SequelizeStore = require('connect-session-sequelize')(session.Store);
var LocalStrategy = require('passport-local').Strategy;

var allowCrossDomain = function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Credentials', true);
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, X-AUTHENTICATION, X-IP, Content-Type, Accept');

    if ('OPTIONS' == req.method) {
      res.send(200);
    }
    else {
      next();
    }
};

router.use(cookieParser())
router.use(session({
	secret: 'passportthis',
	store: new SequelizeStore({
		db: models.sequelize
 	}),
    resave: true,
    saveUninitialized: true,
    cookie : { secure : false, maxAge : (4 * 60 * 60 * 1000) }
}));
router.use(passport.initialize());
router.use(passport.session());
router.use(allowCrossDomain);

passport.serializeUser(function(user,done){
	console.log('--serializeUser--')
	console.log(user)
	done(null, user);
});

passport.deserializeUser(function(obj,done){
	console.log('--deserializeUser--')
	console.log(obj)
	done(null, obj);
});

passport.use('local', new LocalStrategy(
	function(username, password, done){
		models.User.findOne({where: {username: username}}).then(function(user){
			if(!user)
				return done(null, false, {message: 'no user'});
	        if (!bcrypt.compareSync(password, user.get('password_hash'))){
	          return done(null, false, {message: 'incorrect password'});
	        }
			return done(null, user);
		});
	}
));

passport.use('local-signup', new LocalStrategy({
	usernameField: 'username',
	passwordField: 'password',
	passReqToCallback: true
},
function(req, username, password, done){
	process.nextTick(function(){
		models.User.findOne({where: {username: username}}).then(function(user){
			if(user){
				return done(null, false, {message: 'username taken'});
			} else {
  				return models.User.create({
  					name: req.body.name,
  					username: username,
  					password: password
  				}).then(function(newUser){
  					return done(null, newUser)
					}).catch(function(err){
						console.error(err);
					});
			};
  		});
    });
}));

router.get('/', function(req,res){
	res.sendFile(path.join(__dirname, '../../client/public/index.html'));
});

// router.get('/api/sign-up', function(req,res){
// 	if(req.user){
// 		res.json({message: 'signed-in', user_id: req.user.id});
// 	}
// });

// router.get('/api/sign-in', function(req,res){
// 	if(req.user){
// 		res.json({message: 'signed-in', user_id: req.user.id});
// 	}
// });

router.post('/api/sign-up', function(req,res,next){
	passport.authenticate('local-signup', function(err, user, info){
		if (err) {
			return next(err);
		} else {
			res.json({user: user, info: info})
		}
	})(req, res, next);
});

router.post('/api/login', function(req,res,next){
	//console.log(req.body)
	passport.authenticate('local', function(err, user, info){
	    if (err) {
	      return next(err);
	    }
	    if (!user) {
	      return res.status(401).json({success: false, message: 'authentication failed', info: info });
	    } else {
	    	//console.log(user)
	    	//req.session.user = user;
	    	//return res.status(200).json({success: true, message: 'authentication succeeded', info: {id: user.id, username: user.username}});
		    //console.log(user)
		    req.login(user, function(err){
				if(err){
					return next(err);
				}
				//res.header('username', user.username);
				return res.status(200).json({success: true, message: 'authentication succeeded', info: {id: user.id, username: user.username}});        
		    });
			// models.Session.findAll({attributes: ['sid', 'data']}).then((sessions) => {
			// 	console.log(sessions)
			// })
			//console.log(req)
			//res.set('username', user.username);
			//res.header('username', user.username);
			//res.status(200).json({success: true, message: 'authentication succeeded', info: {id: user.id, username: user.username }});        
	    }
	})(req, res, next);
});

router.get('/api/signed-in', (req,res) => {
	console.log(req.isAuthenticated())
	console.log(req.session)
	console.log(req.user)
	//console.log(req)
	if(req.user){
		res.json({message: 'signed-in', user_id: req.user.id});
	}
})

router.get('/api/profile/:id', (req,res) => {
	//console.log(req.user)
	if(req.user){
		if(req.user.id == req.params.id){
			models.User.findOne({where: {id: req.params.id}}).then((user) => {
				models.Profile.findOne({where:{user_id: req.params.id}}).then((profile) => {
					var profileObj = {};
					profileObj.id = profile.id;
					profileObj.fav_veggie = profile.fav_veggie;
					profileObj.fav_fruit = profile.fav_fruit;

					var data = {
						user: user,
						profile: profileObj
					}

					res.set('Content-Type', 'text/html');
					res.send(html_creator(data));	
				})
			});
		} else {
			res.redirect('/');
		}
	} else {
		res.redirect('/')
	}
});

router.delete('/api/logout-user', function (req, res) {
	req.session.destroy(function(out){
		res.json(out)
	});
});

router.post('/api/create-profile', function(req, res){
	models.Profile.create({
		fav_veggie: req.body.fav_veggie,
		fav_fruit: req.body.fav_fruit,
		userID: req.body.userID
	}).then((profile) => {
		res.json(profile)
	}).catch((err) => {
		res.json(err)
	})
});

router.get('*', function(req,res){
	res.sendFile(path.join(__dirname, '../../client/public/index.html'));
});

module.exports = router;