import React, { Component } from 'react';

export default class Guestbook extends Component {
    constructor(props) {
        super(props);
        this.state = {
            messages: [],
            appendInput: false
        };
    }
    showInput(id){
        //console.log(id)
        const {messages} = this.state;
        let clickedMessage = messages.filter((message) => id == message.id)[0];
        this.setState({
            appendInput: true
        })
        clickedMessage.isUpdating = true;
    }
    sendUpdate(index,id){
        var updatedMessage = {message: this[`textInput${index}`].value}

        fetch(`/api/update-message/${id}`,{
            method: 'PUT',
            body: JSON.stringify(updatedMessage),
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
    clickX(id){
        const {messages} = this.state;
        let clickedX = messages.filter((message) => id == message.id)[0];
        this.setState({
            appendInput: false
        })
        clickedX.isUpdating = false;
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
        //console.log(this.state.messages)
        const appendMessages = () => {
            return this.state.messages.map((message, index) => {
                let hideP = message.isUpdating ? "none" : "inline-block";
                let appendInput = message.isUpdating ? "inline-block" : "none";
                return (
                    <div>
                        <p
                            onClick={() => this.showInput(message.id)}
                            key={index} 
                            className="message"
                            style={{display: hideP}}
                        >
                            <strong>{message.name}: </strong> 
                            {message.message}
                        </p>
                        <div style={{display: appendInput}}>
                            <input 
                                ref={input => {
                                      this[`textInput${index}`] = input;
                                    }}
                                defaultValue={message.message}
                                type="text"
                            />
                            <button onClick={() => this.sendUpdate(index, message.id)}>Update</button>
                            <button onClick={() => this.clickX(message.id)} style={{backgroundColor: 'red'}}>X</button>
                        </div>
                    </div>
                )
            })
        }
	    return (
	    	<div>
                <h2>Look at the console.log inside your componentWillMount() & render()</h2>
                <h2>Open up your google inspect to see that console.log</h2>
                <h2>And look, im setting the state in the callback too</h2>
                <br></br>
                {appendMessages()}
			</div>
	    );
  	}
};
