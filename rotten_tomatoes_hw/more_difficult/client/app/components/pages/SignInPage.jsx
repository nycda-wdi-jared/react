import React, { Component } from 'react';

import SignInNav from './../navs/SignInNav';
import SignInForm from './../auth/SignInForm';

export default class SignInPage extends Component {
	componentWillMount(){
        fetch('/api/signed-in', {
            headers: {
                'content-type': 'application/json',
                'accept': 'application/json'
            },
            credentials: 'same-origin'
        }).then((response) => response.json())
        .then((results) => {
            if(results.message === "signed-in"){
                browserHistory.push("/home")
            }
        });
	}
  	render() {
	    return (
	        <div>
                <SignInNav/>
                <SignInForm/>
	        </div>
	    );
  	}
};
