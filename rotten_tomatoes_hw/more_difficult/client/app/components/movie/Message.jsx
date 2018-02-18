import React, {Component} from 'react';

export default class Message extends Component {
	constructor(props) {
		super(props);
		this.state = {
			signedIn: false
		};
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
  	render() {
  		const {signedIn} = this.state;
  		const {user_id, message_user_id, message_id, message, deleteMessage, openModal, addLiker, messages} = this.props;
    	const showThumb = (commentId, message_user_id) => {
	      	let ifUser = (message_user_id == user_id)
	      	let comment = messages.filter((message) => commentId == message.id)[0]
	      	if(signedIn && comment){
	        	let liked = comment.likers.indexOf(user_id) > -1 ? 'blue' : 'black'
	        	if (!ifUser){
	          		return (
	            		<div style={{display: 'inline-flex'}}>
	              			<span 
	                			style={{color: liked, fontSize: '25px'}}
	                			className="glyphicon glyphicon-thumbs-up" 
	                			aria-hidden="true"
	                			onClick={() => addLiker(user_id, commentId)}
	              			>
	              			</span>
	              			<span style={{marginLeft: '15px'}}>Likes: {comment.likers.length}</span>
	            		</div>
	          		)
	        	} else {
	          		return (
	            		<span style={{marginLeft: '15px'}}>Likes: {comment.likers.length}</span>
	          		)
	        	}
	      	}
	    }
	    const appendMessage = () => {
        	let ifUser = (message_user_id == user_id);
        	return (
          		<div className="well guest-div" key={message_id}>
          			{ifUser ? <button onClick={() => deleteMessage(message_id)} className="btn btn-danger x-button">x</button> : <div></div>}
          			<p style={{fontWeight: 'bold'}}>{message.name}</p>
          			{ifUser ? <p className="message" onClick={() => openModal(message_id, message)}>Message: {message}</p> : <p>Message: {message}</p>}
          			{showThumb(message_id, message_user_id)}
        		</div>
        	)
	    }
	    return (
	        <div>
	        	{appendMessage()}
	        </div>
	    );
  	}
};