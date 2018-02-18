import React, { Component } from 'react';

import SignUpNav from './../navs/SignUpNav';
import SignUpForm from './../auth/SignUpForm';

export default class SignUpPage extends Component {
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
                if(results.message !== "no req.user"){
                    browserHistory.push("/home")
                }
            }
        });
	}
  	render() {
	    return (
	        <div>
                <SignUpNav/>
                <SignUpForm/>
	        </div>
	    );
  	}
};
