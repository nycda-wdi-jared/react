var models = require('../models');

var modelController = {
	userCreate: function(name, username, password, cb){
	  	models.User.create({
	  	  name: name,
	      username: username,
	      password: password,
	    }).then(function(success) {
	      	cb(success);
		}).catch(function(err){
			 cb(err);
		});
	},
	userHome: function(id, cb){
		var currentUser;
		models.User.findOne({ where: {id: id}}).then(function(user){
			currentUser = user;
		models.Application.findAll({ where: {UserId: id}}).then(function(applications){
				var data = {
					user: currentUser,
					applications: applications
				}
	        	cb(data);
			}).catch(function(err){
				cb(err);
			});
		});
  	},
  	recordCreate: function(UserId, companyName, position, dateApplied, replied, nextEvent, notes, resumeSubmitted, cb){
  		var ifReplied = false;
  		var ifResumeSubmitted = false;
  		if(replied === "Yes"){
  			ifReplied = true;
  		}
  		if(resumeSubmitted === "Yes"){
  			ifResumeSubmitted = true 
  		}
  		models.Application.create({
  			UserId: UserId,
  			companyName: companyName,
  			position: position,
  			dateApplied: dateApplied,
  			replied: ifReplied,
  			nextEvent: nextEvent,
  			notes: notes,
  			resumeSubmitted: ifResumeSubmitted
  		}).then(function(success) {
	      	cb(success);
		}).catch(function(err){
			 cb(err);
		});
  	},
  	userApplications: function(id, cb){
	    models.User.findOne({where: {id: id}}).then(function(user){
	      user.getApplications({}).then(function(apps){
	            var enteredApplications = [];
	            apps.forEach(function(app){
	                enteredApplications.push(app);
	            });
		        var data = {
		            applications: enteredApplications
		        }
			    cb(data);
			}).catch(function(err){
				cb(err);
			});
		});
  	},
  	userApplication: function(id, cb){
	    models.Application.findOne({where: {id: id}}).then(function(app){
	        cb(app);
		}).catch(function(err){
			cb(err);
		});
  	}
}

module.exports = modelController;