import React, { Component } from 'react';

export default class Guestbook extends Component {
    constructor(props) {
        super(props);
        this.state = {
            messages: []
        };
    }
    submitMessage(e){
        e.preventDefault();

        const inputs = {
            name: this.refs.nameInput.value,
            message: this.refs.messageInput.value
        }
        console.log(inputs)
        //connection to the post in the server
        fetch('/api/message', {
            method: 'post',
            body: JSON.stringify(inputs),
            headers: {
                'content-type': 'application/json',
                'accept': 'application/json'
            },
        }).then((response) => response.json())
        .then((results) => {
            //console.log(results)
        });
    }
	componentWillMount(){
        //connection to the get in the server
		fetch('/api/messages', {
			headers: {
                'content-type': 'application/json',
                'accept': 'application/json'
            }
		}).then((response) => response.json())
        .then((results) => {
            console.log(results)
            this.setState({
                messages: results
            })
        });
	}
  	render() {
        console.log(this.state)
	    return (
	    	<div>
                <h1>Look at the console.log inside your componentWillMount() & submitMessage()</h1>
                <h2>Open up your google inspect to see that console.log</h2>
                <h2>Analyze the console.logs as you submit messages</h2>
                <h2>Look at the concat...what is that doing?</h2>
                <div className="row">
                    <div className="col-md-4 col-md-offset-4">
                        <form onSubmit={this.submitMessage.bind(this)}>
                            <label>Name</label><br></br>
                            <input type="text" ref="nameInput"/><br></br>
                            <label>Message</label><br></br>
                            <textarea style={{height: '100px'}} ref="messageInput"></textarea><br></br><br></br>
                            <input className="btn btn-info" type="submit"/>
                        </form>
                    </div>
                </div>
			</div>
	    );
  	}
};
