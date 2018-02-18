import React, { Component } from 'react';

export default class Guestbook extends Component {
    constructor(props) {
        super(props);
        this.state = {
            /* set the initial state of messages to undefined */
        };
    }
    componentWillMount(){
        fetch(/* look for the get all messages route on the back end */, {
            headers: {
                'content-type': 'application/json',
                'accept': 'application/json'
            }
        }).then((response) => response.json())
        .then((results) => {
            /* Set the state of messages of results */
        });
    }
    render() {
        const appendMessages = () => {
            /*
                if this.state.messages is not undefined, then map the messages
                if this.state.messages is undefined, then append a p tag stating no messages
            */
        }
        return (
            <div>
                <h2>Messages</h2>
                {/* call the appropriate function here */}
            </div>
        );
    }
};
