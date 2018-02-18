var express = require("express");
var bodyParser = require("body-parser");
var request = require("request");
var path = require("path");
var cheerio = require("cheerio");

var app = express();

var PORT = process.env.PORT || 3000;

app.use(express.static("./public"));

app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname + "./public/index.html"));
});

app.get("/api/scrape", function(req,res){
	request('http://www.nfl.com/stats/categorystats?archive=false&conference=null&role=TM&offensiveStatisticCategory=TOTAL_YARDS&defensiveStatisticCategory=null&season=2017&seasonType=REG&tabSeq=2&qualified=false&Submit=Go', function(err, response, html){
		if (err) {
			throw err
		}
		var $ = cheerio.load(html);
		var results = [];
		$('#result').each(function(){
			var tr = $(this).find("tr");
			tr.each(function(){
				var teamName = $(this).find("td").eq(1).text().trim();
				var yardsPerGame = $(this).find("td").eq(6).text().trim();
				if(teamName !== ""){
					results.push({team: teamName, ypg: yardsPerGame});
				}
			});
		});
		res.json(results)
	});
});

//wildcare route, when front end is refreshed, this defaults it to that page
//try the app without this route and refresh your page, see what happens
app.get("*", function(req, res) {
  res.sendFile(path.join(__dirname + "/public/index.html"));
});

// Starting our express server
app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});
