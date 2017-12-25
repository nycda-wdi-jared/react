var express = require('express');
var path = require('path');

var router = express.Router();

var models = require('./../models');

router.get('/', (req,res) => {
	res.sendFile(path.join(__dirname, '../../client/public/index.html'));
});

router.get('/api/songs', (req,res) => {
	models.Song.findAll().then((songs) => {
		var songsArr = [];
		songs.forEach((song) => {
			songsArr.push({title: song.title, artist: song.artist})
		})
		res.json(songsArr)
	})
});

router.get('/api/lyrics/:artist/:title', (req,res) => {
	models.Song.findAll().then((songs) => {
		var song = {};
		for(var i = 0; i < songs.length; i++){
			var title = songs[i].title.split(" ").join("+").toLowerCase();
			var artist = songs[i].artist.split(" ").join("+").toLowerCase();
			if(title === req.params.title && artist === req.params.artist){
				song.title = songs[i].title;
				song.artist = songs[i].artist;
				song.lyrics = songs[i].lyrics.split("\n");
			}
		}
		res.json(song)
	})
})

router.get('*', (req,res) => {
	res.sendFile(path.join(__dirname, '../../client/public/index.html'));
});

module.exports = router;