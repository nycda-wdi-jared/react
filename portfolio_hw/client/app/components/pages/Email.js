import React, { Component } from 'react';

import EmailNav from './../navs/Email_Nav';

export default class Email extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }
    submitMessage(e){
        e.preventDefault();

        const inputs = {
            name: this.refs.nameInput.value,
            email: this.refs.emailInput.value,
            message: this.refs.messageInput.value
        }
        //console.log(inputs)
        //connection to the post in the server
        fetch('/api/email', {
            method: 'post',
            body: JSON.stringify(inputs),
            headers: {
                'content-type': 'application/json',
                'accept': 'application/json'
            },
        }).then((response) => response.json())
        .then((results) => {
        	console.log(results)
        });

    	this.refs.nameInput.value = ""
    	this.refs.emailInput.value = ""
    	this.refs.messageInput.value = ""

    }
  	render() {
	    return (
	    	<div>
                <h1 className="text-center">Email Me</h1>
                <div className="row">
                    <div className="col-md-4 col-md-offset-4">
                        <form onSubmit={this.submitMessage.bind(this)}>
                            <label>Name</label><br></br>
                            <input style={{color: 'Aquamarine'}} type="text" ref="nameInput"/><br></br>
                            <label>Email</label><br></br>
                            <input style={{color: 'Aquamarine'}} type="text" ref="emailInput"/><br></br>
                            <label>Message</label><br></br>
                            <textarea style={{height: '100px', color: 'Aquamarine'}} ref="messageInput"></textarea><br></br><br></br>
                            <input className="btn btn-info" type="submit"/>
                        </form>
                    </div>
                </div>
                <br></br>
                <EmailNav/>
			</div>
	    );
  	}
};