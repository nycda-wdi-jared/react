import React, {Component} from 'react';

import {BlogStyles} from './../../styles/Blog.js';
import BlogNav from './../navs/Blog_Nav';

export default class BlogPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
        	messages: []
        };
    }
    blogForm(e){
    	e.preventDefault();

    	this.setState({
    		messages: this.state.messages.concat(this.refs.nameInput.value + ": " + this.refs.messageInput.value)
    	})

    	this.refs.nameInput.value = "";
    	this.refs.messageInput.value = "";
    }
  	render() {
  		const {messages} = this.state;
  		const appendMessages = () => {
  			if(messages.length > 0){
				return messages.map((message, index) => {
					return (
						<div>
							<p style={{color: 'Aquamarine'}} key={index}>
								<strong>{message.split(":")[0]}</strong>
								:{message.split(":")[1]}
							</p>
						</div>
					)
				})
  			} else {
  				return (
  					<p className="well text-center center-block" style={BlogStyles.noMessagesP}>No Messages</p>
  				)
  			}
  		}

	    return (
	    <div>
	        <div style={BlogStyles.image_div} className="text-center center-block">
	        	<img style={BlogStyles.blog_image} src="./images/blog.png"/>
	        </div>
	        <div className="row">
	        	<div className="col-md-4 col-md-offset-4">
		        	<form onSubmit={this.blogForm.bind(this)}>
		        		<label>Name</label><br></br>
		        		<input style={{color: 'Aquamarine'}} type="text" ref="nameInput"/><br></br>
		        		<label>Message</label><br></br>
		        		<textarea style={{height: '100px', color: 'Aquamarine'}} ref="messageInput"></textarea><br></br><br></br>
		        		<input className="btn btn-info" type="submit"/>
		        	</form>
		        </div>
	        </div>
	        <div className="text-center">
	        	{appendMessages()}
	        </div>
	        <BlogNav />
	    </div>
	    );
  	}
};
