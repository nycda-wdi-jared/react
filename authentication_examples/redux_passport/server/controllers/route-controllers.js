var express = require('express');
var path = require('path');

var router = express.Router();

var models = require('../models');
var modelController = require('./model-controllers.js');

var cookieParser = require('cookie-parser');
var bcrypt = require('bcrypt-nodejs');
var passport = require('passport');
var session = require('express-session');
var SequelizeStore = require('connect-session-sequelize')(session.Store);
var LocalStrategy = require('passport-local').Strategy;

router.use(cookieParser())
router.use(session({
 secret: 'passport react',
  store: new SequelizeStore({
   db: models.sequelize
 }),
 resave: true,
 saveUninitialized: true
}));
router.use(passport.initialize());
router.use(passport.session());

router.get('/', (req,res) => {
	res.sendFile(path.join(__dirname, './../../client/public/index.html'));
});

router.post('/api/users/create', function(req,res){
    if (req.body.password !== req.body.confirmPassword){
      return reject();
    }
    if(!req.body.name){
      return reject();
    }
    if(!req.body.password){
      return reject();
    }
    if(!req.body.confirmPassword){
      return reject();
    }
    if(req.body.username.length < 6 || req.body.username.length > 12){
      return reject();
    }
    modelController.userCreate(
      req.body.name,
      req.body.username,
      req.body.password,
    function(success){
      res.json(success);
    });
});

passport.serializeUser(function(user,done){
  done(null, user);
 });

passport.deserializeUser(function(obj,done){
  done(null, obj);
 });

passport.use('local', new LocalStrategy(
  function(username, password, done){
    models.User.findOne({ where: {username: username}}).then(function(user){
        if (!user){
          return done(null, false, {message: 'No User'});
        }
        if (!bcrypt.compareSync(password, user.get('password_hash'))){
          return done(null, false, {message: 'incorrect password'});
        }
        return done(null, user)
      });
    }
));

router.post('/api/users/login', function(req,res,next){
  passport.authenticate('local', function(err, user, info){
    if (err) {
      return next(err);
    }
    if (!user) {
      return res.status(401).json({ success : false, message : 'authentication failed' });
    }
    req.login(user, function(err){
      if(err){
        return next(err);
      }
      return res.status(200).json({ success : true, message : 'authentication succeeded' });        
    });
  })(req, res, next);
});

router.get('/api/users/logout', function (req, res) {
  req.session.destroy(function(out){
    res.json(out)
  });
});

router.get('/api/userhome', function(req, res){
    if(req.session.passport != undefined){
      modelController.userHome(
        req.user.id,
        function(data){
          res.json(data)
      });
    } else {
      res.json(401)
    }
});

router.get('/api/applications', function(req,res){
  if(req.session.passport != undefined){
    modelController.userApplications(
        req.user.id,
        function(data){
          res.json(data);
      });
    } else {
      res.json(401)
    }
})

router.get('/api/application/:id', function(req,res){
  if(req.session.passport != undefined){
    modelController.userApplication(
      req.params.id,
      function(data){
        res.json(data);
    });
  } else {
      res.json(401)
  }
});

router.post('/api/record/create', function(req,res){
    modelController.recordCreate(
      req.user.id,
      req.body.companyName, 
      req.body.position, 
      req.body.dateApplied, 
      req.body.replied, 
      req.body.nextEvent, 
      req.body.notes, 
      req.body.resumeSubmitted,
    function(success){
        success.reload().then(function(record){
          res.json(record); 
        })
    });
});

router.get('*', (req,res) => {
  res.sendFile(path.join(__dirname, './../../client/public/index.html'));
})

module.exports = router;