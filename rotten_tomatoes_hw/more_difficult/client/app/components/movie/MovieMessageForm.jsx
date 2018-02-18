import React, { Component } from 'react';

export default class MovieMessageForm extends Component {
  	constructor(props) {
		super(props);
	    this.state = {
	    	signedIn: false,
	    	submitButtonDisabled: false
	    };
  	}
    messageForm(e){
    	e.preventDefault();

        this.setState({
            submitButtonDisabled: true
        });
    	var newMessage = {
    		name: this.props.usersName,
    		message: this.refs.message.value,
    		movie_id: this.props.movie.id,
    		user_id: this.props.user_id
    	}
        fetch('/api/message', {
            method: 'post',
            body: JSON.stringify(newMessage),
            headers: {
                'content-type': 'application/json',
                'accept': 'application/json'
            },
        }).then((response) => response.json())
        .then((results) => {
            this.setState({
                submitButtonDisabled: false
            });
            this.props.onMessageSubmit(results);
            this.refs.message.value = "";
        });
    }
	componentWillMount(){
	    fetch('/api/signed-in', {
	        headers: {
	            'content-type': 'application/json',
	            'accept': 'application/json'
	        },
	        credentials: 'same-origin'
	    }).then((response) => response.json())
	    .then((results) => {
	        if(results.message){
	            if(results.message === "signed-in"){
	                this.setState({
	                	signedIn: true
	                })
	            }
	        }
	    });
	}
	render(){
  		const appendMessageForm = () => {
  			if(this.state.signedIn && this.props.movie){
  				return (
					<div>
						<h4 className="text-center">Rate & Comment on {this.props.movie.title}</h4>
						<div className="text-center center-block">
							<form id="guestbook-form" onSubmit={this.messageForm.bind(this)}>
								<label>Message</label><br></br>
								<textarea ref="message"></textarea>
								<br></br>
								<input disabled={this.state.submitButtonDisabled} className="btn btn-default" id="submit-this" type="submit"/>
							</form>
						</div>
				    </div>
  				)
  			}
  		}
		return(
			<div>
				{appendMessageForm()}
			</div>
		)
	}
}