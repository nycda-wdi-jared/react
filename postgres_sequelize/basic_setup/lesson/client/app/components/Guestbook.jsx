import React, { Component } from 'react';

export default class Guestbook extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }
	componentWillMount(){
		fetch('/api/messages', {
			headers: {
                'content-type': 'application/json',
                'accept': 'application/json'
            }
		}).then((response) => response.json())
        .then((results) => {
            console.log(results)
        });
	}
  	render() {
	    return (
	    	<div>
                <h1>Look at the console.log inside your componentWillMount()</h1>
                <h2>Open up your google inspect to see that console.log</h2>
			</div>
	    );
  	}
};
