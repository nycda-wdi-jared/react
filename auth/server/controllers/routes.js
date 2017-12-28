// DEPENDENCIES
var express = require('express');
var path = require('path');
var _ = require('lodash');

var router = express.Router();

var models = require('../models');

var middleware = require('../middleware/middleware.js')();

// ROUTES
// NON-authenticated Users=================================================
// Setting root ('/') path to index.html
router.get('/', (req,res) => {
	res.sendFile(path.join(__dirname, './../../client/public/index.html'));
})

router.post('/api/sign-up', function(req,res,next){
    // if (req.body.password !== req.body.confirmPassword){
    //   return reject();
    // }
    models.User.create({
      name: req.body.name, 
      username: req.body.username, 
      password: req.body.password
    }).then((success) => {
      res.json(success);
    });
});

//users login route
router.post('/api/login', function(req,res,next){
  var body = _.pick(req.body, 'username', 'password');
  var userInfo;

  // AUTHENTICATED Users=====================================================
  // Generates JSON Web Token once user is signed-in
  models.User.authenticate(body).then(function (user) {
    var token = user.generateToken('authentication');
    userInfo = user;

    return models.Token.create({
      token: token
    });
  }).then(function (tokenInstance) {
    res.header('Auth', tokenInstance.get('token')).json(userInfo.toPublicJSON());
  }).catch(function () {
    res.status(401).send();
  });
});

router.get('/api/signed-in', middleware.requireAuthentication, (req,res) => {
  if(req.user){
    res.json({message: 'signed-in', user: req.user});
  }
});

router.delete('/api/logout', middleware.requireAuthentication, function (req, res) {
  req.token.destroy().then(function () {
    res.status(204).send();
  }).catch(function () {
    res.status(500).send();
  });
});

router.get('*', (req,res) => {
  res.sendFile(path.join(__dirname, './../../client/public/index.html'));
})

module.exports = router;
