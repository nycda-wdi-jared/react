import React, { Component } from 'react';
import { Modal } from 'react-bootstrap';

import Movie from './../movie/Movie';
import MovieNav from './../navs/MovieNav';
import MovieMessageForm from './../movie/MovieMessageForm';
import MessagesList from './../movie/MessagesList'

export default class MoviePage extends Component {
	constructor(props) {
		super(props);
		this.state = {
			signedIn: false,
			movie: undefined,
			user_id: undefined,
			messages: [],
        	open: false,
        	messageToUpdate: '',
        	idToUpdate: '',
            submitButtonDisabled: false,
            usersName: undefined,
            movieRating: ''
		};
	}
    deleteMessage(id){
        fetch(`/api/delete-message/${id}/${this.state.movie.id}`,{
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
    updateMessage(e){
    	e.preventDefault();

        this.setState({
            submitButtonDisabled: true
        });
    	const updatedMessage = {
    		message: this.refs.updated_message.value
    	}
        fetch(`/api/update-message/${this.state.idToUpdate}/${this.state.movie.id}`,{
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
                submitButtonDisabled: false,
                open: false
            });
        });
    }
    submittedMessage(messages){
        this.setState({messages: messages})
    }
	movieRowClick(movieTitle){
		const mtSplit = movieTitle.split(" ").join("+").toLowerCase();
		browswerHistory.push("/movie/" + mtSplit)
	}
	addLiker(user_id, comment_id){
		const {messages} = this.state;
		const comment = messages.filter((message) => message.id === comment_id)[0];
		if(comment.likers.indexOf(user_id) > -1){
			comment.likers.splice(comment.likers.indexOf(user_id), 1);
		} else {
			comment.likers.push(user_id);
		}
        fetch(`/api/update-likers/${this.props.params.title}`,{
            method: 'PUT',
            body: JSON.stringify({comment: comment, comment_id: comment_id}),
            headers: {
                'content-type': 'application/json',
                'accept': 'application/json'
            }
        }).then((response) => response.json())
        .then((messages) => {
        	this.setState({
        		messages: messages
        	})
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
                    	signedIn: true,
                    	user_id: results.user.id,
                    	usersName: results.user.name
                    })
                }
            }
        });

        fetch('/api/movies', {
            headers: {
                'content-type': 'application/json',
                'accept': 'application/json'
            },
            credentials: 'same-origin'
        }).then((response) => response.json())
        .then((movies) => {
        	const titleSJ = this.props.params.title.split("+").join(" ");
        	const selectedMovie = movies.filter((movie) => movie.title.toLowerCase() === titleSJ);
        	this.setState({
        		movie: [...selectedMovie][0]
        	})
        });

		fetch(`/api/messages/${this.props.params.title}`, {
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
		const {movieRating, signedIn, movie, user_id, messages} = this.state

	    let closeModal = () => this.setState({ open: false })

  		const appendMessagesAndMessageForm = () => {
  			if(signedIn && movie){
  				return (
					<div>
						<MovieMessageForm 
							onMessageSubmit={this.submittedMessage.bind(this)}
							usersName={this.state.usersName}
							movie={this.state.movie}
							user_id={this.state.user_id}
						/>
						<div id="everything-div">
							<MessagesList
								addLiker={this.addLiker.bind(this)}
								openModal={this.openModal.bind(this)}
								deleteMessage={this.deleteMessage.bind(this)}
								messages={messages}
								user_id={user_id}
							/>
						</div>
		        		<Modal
				          show={this.state.open}
				          onHide={closeModal}
				          aria-labelledby="ModalHeader"
				        >
				        	<Modal.Body>
					        	<div id="modal-form-div" className="text-center">
									<form id="update-message-form" onSubmit={this.updateMessage.bind(this)}>
										<label>Message</label><br></br>
										<textarea defaultValue={this.state.messageToUpdate} ref="updated_message"></textarea>
										<br></br>
										<input disabled={this.state.submitButtonDisabled} className="btn btn-default" id="submit-this" type="submit"/>
									</form>
								</div>
							</Modal.Body>
				        </Modal>
				    </div>
  				)
  			}
  		}
	    return (
	        <div>
	    		<MovieNav/>
			    <div className="text-center">
		        	<h2 className="lobster">Tomato That</h2>
		        	<Movie
		        		movie={movie}
		        		user_id={user_id}
		        	/>
			    </div>
			    <br></br>
			    {appendMessagesAndMessageForm()}
	        </div>
	    );
	}
};