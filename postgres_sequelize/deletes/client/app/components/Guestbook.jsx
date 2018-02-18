import React, { Component } from 'react';

export default class Guestbook extends Component {
    constructor(props) {
        super(props);
        this.state = {
            messages: []
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
	componentWillMount(){
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
            return this.state.messages.map((message, index) => {
                return (
                    <div>
                        <p key={index}>
                            <strong>{message.name}: </strong> 
                            {message.message}
                            <button 
                                style={{color: 'white', backgroundColor: '#ff7b69', marginLeft: '5px'}}
                                onClick={() => this.deleteMessage(message.id)}
                            >
                            X
                            </button>
                        </p>
                    </div>
                )
            })
        }
	    return (
	    	<div>
                <h1>Postgres Delete Example</h1>
                {appendMessages()}
			</div>
	    );
  	}
};
