import React, { Component } from 'react';

export default class Guestbook extends Component {
    constructor(props) {
        super(props);
        this.state = {
            messages: undefined
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
            this.setState({
                messages: results
            })
        });
	}
  	render() {
        const appendMessages = () => {
            if(this.state.messages){
                return this.state.messages.map((message, index) => {
                    return (
                        <p><strong>{message.name}:</strong> {message.message}</p>
                    )
                })
            } else {
                return (
                    <p>No Messages</p>
                )
            }
        }
	    return (
	    	<div>
                <h2>This is one way to append</h2>
                {
                    /*
                        if this.state.messages is not undefined, then map the messages
                        if this.state.messages is undefined, then append a p tag stating no messages
                    */
                    this.state.messages ?
                        this.state.messages.map((message, index) => {
                            return ( <p><strong>{message.name}:</strong> {message.message}</p> )
                        }) : <p>No Messages</p>
                }
                <br></br>
                <h2>This is another way to append</h2>
                {appendMessages()}
			</div>
	    );
  	}
};
