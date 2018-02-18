var path = require('path');

var Movie = require('../models').Movie;
var request = require('request');

module.exports = (app) => {

	app.get('/', function(req,res){
		res.sendFile(path.join(__dirname, './../../client/public/index.html'));
	});

	app.get('/api/movies', (req, res) => {
		Movie.findAll({order: [
            ['id', 'ASC']
    	]}).then((movies) => {
			res.json(movies)
		})
	});

	app.get('/api/add-movies', (req, res) => {
	    let api_url = "http://omdbapi.com?apikey=40e9cece&s=reservoir+dogs&r=json"
	    request(api_url, (err, results, html) => {
	    	var body = JSON.parse(html)
	    	Movie.create({
	    		title: body.Search[0].Title,
	    		year: body.Search[0].Year,
	    		imdbID: body.Search[0].imdbID,
	    		poster: body.Search[0].Poster
	    	}).then((cb) => {
	    		res.json(cb)
	    	})
	    })
	});

	app.get('*', function(req,res){
		res.sendFile(path.join(__dirname, './../../client/public/index.html'));
	});

}