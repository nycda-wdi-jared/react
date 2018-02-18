import React, { Component } from 'react';

export default class Guestbook extends Component {
    constructor(props) {
        super(props);
        this.state = {
            messages: null,
            search: ''
        };
    }
    searchByName(){
        this.setState({
            search: this.refs.searchName.value
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
        const {messages, search} = this.state
        let searchResults;
        if(messages){
            searchResults = messages.filter((message) => {
                return message.name.indexOf(search) > -1 || search.length === 0;
            });
        }
	    return (
	    	<div className="container">
                <h3>Messages</h3>
                <input 
                    placeholder="Search By Name" 
                    type="search" 
                    ref="searchName"
                    onChange={this.searchByName.bind(this)}
                />
                {
                    messages && searchResults.length > 0 ?
                        searchResults.map((message, index) => {
                            return ( <p key={index}><strong>{message.name}</strong>: {message.message}</p> )
                        }) : <p>No Person by that name</p>
                }
			</div>
	    );
  	}
};
