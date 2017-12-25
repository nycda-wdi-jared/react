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

router.get('*', (req,res) => {
	res.sendFile(path.join(__dirname, '../../client/public/index.html'));
});

module.exports = router;