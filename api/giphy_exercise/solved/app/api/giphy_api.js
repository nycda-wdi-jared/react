import axios from 'axios';

module.exports = (search) => {
	let api_key = 'dc6zaTOxFJmzC';
    let api_url = `http://api.giphy.com/v1/gifs/search?q=${search}&api_key=${api_key}&limit=10`
    return axios.get(api_url, {
		headers: {
			'content-type': 'application/json',
			'accept': 'application/json'
		}
    }).then((results) => {
    	return results.data
    });
}