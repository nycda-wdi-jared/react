import React, { Component } from 'react';

export default class Guestbook extends Component {
    constructor(props) {
        super(props);
        this.state = {
            /*
                set the state of messages to null or undefined
                set the state of search to an empty string
            */
        };
    }
    searchByName(){
        /* Change the state of search to the value of whats in the input */
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
        const {messages, search} = this.state
        let searchResults;
        if(/* messages is not null or not undefined */){
            /* 
                re-assign the value of searchResults to...
                ...filtering messages by if the indexOf message.name (name of person who submitted message)...
                ... is greater than -1 or if the length of search === 0. dont forget return
                it will look something like this....

                filtered = whatever.filter((what) => {
                    return what.indexOf(whateverSearch) > whatever number || whateverSearch.length === 0
                })
            */
        }
	    return (
	    	<div className="container">
                <h3>Messages</h3>
                <input 
                    placeholder="Search By Name" 
                    type="search" 
                    ref="searchName"
                    onChange={/* bind this to the correct function above */}
                />
                {
                    /*
                        Use a ternary here or create a function above
                        if messages is defined and length is greater than 0, then map searchResults, showing the persons name and the message
                        if messages is undefined and length is greater than 0, then show no person by that name
                    */
                }
			</div>
	    );
  	}
};
