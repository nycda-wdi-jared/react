module.exports = (obj) => {
	var str = "<html>";
	str += "<head><title>" + obj.name + "'s Page</title>"
	str += "<link rel='stylesheet' href='https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css'></head>";
	str += '<body>'
	str += '<h2>Hey ' + obj.name + ', forget your password?</h2><br>';
	str += '<p>Please click this <a target="_blank" href="http://localhost:8000/forgot-password/' + obj.uuid + '">link</a> to reset</p>';
	str += "<script src='https://ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js'></script>";
	str += "</body>";
	str += "</html>";
	return str;
}