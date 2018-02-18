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
            console.log(results)
            this.setState({
                messages: this.state.messages.concat(results)
            })
        });
    }
    //read about the componentWillMount build in react function
	componentWillMount(){
        //connection to the get in the server
		fetch('/api/messages', {
			headers: {
                'content-type': 'application/json',
                'accept': 'application/json'
            }
		}).then((response) => response.json())
        .then((results) => {
            //console.log(results)
            this.setState({
                messages: results
            })
        });
	}
  	render() {
        const appendMessages = () => {
            /* Append the messages to the div */
        }
	    return (
	    	<div>
                <h1>Look at the console.logs</h1>
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
                <div className="well" style={{backgroundColor: '#ffec8a',marginLeft: '2%', width: '20%'}}>
                    {/* call the correct function here */}
                </div>
			</div>
	    );
  	}
};
