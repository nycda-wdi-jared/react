import axios from 'axios';

module.exports = (search, cb) => {
	let api_key = '40e9cece';
    let api_url = `http://omdbapi.com?apikey=${api_key}&s=${search}`
    axios.get(api_url, {
		headers: {
			'content-type': 'application/json',
			'accept': 'application/json'
		}
    }).then((results) => {
    	cb(results.data)
    });
}