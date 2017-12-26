import React, { Component } from 'react';
import { Modal } from 'react-bootstrap';

export default class Guestbook extends Component {
    constructor(props) {
        super(props);
        this.state = {
        	messages: [],
        	open: false,
        	messageToUpdate: '',
        	idToUpdate: '',
            submitButtonDisabled: false
        };
    }
    deleteMessage(id){
        fetch(`/api/delete-message/${id}`,{
            method: 'DELETE',
            headers: {
                'content-type': 'application/json',
                'accept': 'application/json'
            }
        }).then((response) => response.json())
        .then((results) => {
            this.setState({
                messages: results
            });
        }); 
    }
    openModal(id,message){
    	this.setState({
    		open: true,
    		messageToUpdate: message,
    		idToUpdate: id
    	}) 
    }
    updateMessage(){
        this.setState({
            submitButtonDisabled: true
        });
    	const updatedMessage = {
    		message: this.refs.updated_message.value
    	}
        fetch(`/api/update-message/${this.state.idToUpdate}`,{
            method: 'PUT',
            body: JSON.stringify(updatedMessage),
            headers: {
                'content-type': 'application/json',
                'accept': 'application/json'
            }
        }).then((response) => response.json())
        .then((results) => {
            this.setState({
                messages: results,
                submitButtonDisabled: false
            });
        });
    }
    messageForm(){
        this.setState({
            submitButtonDisabled: true
        });
    	var newMessage = {
    		name: this.refs.name.value,
    		message: this.refs.message.value
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
                messages: this.state.messages.concat(results),
                submitButtonDisabled: false
            });
        });
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
        	});
        });
	}
  	render() {
  		//console.log(this.state.messages)
  		const { messages } = this.state;

	    let closeModal = () => this.setState({ open: false })

  		const appendMessages = () => {
  			return messages.map((message, index) => {
  				return (
  					<div className="well guest-div" key={index}>
						<button onClick={() => this.deleteMessage(message.id)} className="btn btn-danger x-button">x</button>
						<p style={{fontWeight: 'bold'}}>{message.name}</p>
						<p className="message" onClick={() => this.openModal(message.id, message.message)}>Message: {message.message}</p>
					</div>
  				)
  			});
  		}

	    return (
	    	<div>
		        <div className="text-center">
		        	<h1>Hello React Guestbook</h1>
		        </div>
				<br></br>
				<h3 className="text-center">Please Leave your name and a polite message</h3>
				<div className="text-center center-block">
					<form id="guestbook-form" onSubmit={this.messageForm.bind(this)}>
						<label>Name</label><br></br>
						<input type="text" ref="name"/><br></br>
						<label>Message</label><br></br>
						<textarea ref="message"></textarea>
						<br></br>
						<input disabled={this.state.submitButtonDisabled} className="btn btn-default" id="submit-this" type="submit"/>
					</form>
				</div>
				<div id="everything-div">
					{appendMessages()}
				</div>
        		<Modal
		          show={this.state.open}
		          onHide={closeModal}
		          aria-labelledby="ModalHeader"
		        >
		        	<div id="modal-form-div" className="text-center">
						<form id="update-message-form" onSubmit={this.updateMessage.bind(this)}>
							<label>Message</label><br></br>
							<textarea defaultValue={this.state.messageToUpdate} ref="updated_message"></textarea>
							<br></br>
							<input disabled={this.state.submitButtonDisabled} className="btn btn-default" id="submit-this" type="submit"/>
						</form>
					</div>
		        </Modal>
			</div>
	    );
  	}
};
