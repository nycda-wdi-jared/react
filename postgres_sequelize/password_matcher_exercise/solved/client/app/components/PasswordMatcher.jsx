import React, { Component } from 'react';

export default class PasswordMatcher extends Component {
    constructor(props) {
        super(props);
        this.state = {
            matched: undefined
        };
    }
    submitPasswordForm(e){
        e.preventDefault();

        var inputData = {
            username: this.refs.username.value,
            password: this.refs.password.value
        }

        fetch('/api/matcher', {
            method: 'post',
            body: JSON.stringify(inputData),
            headers: {
                'content-type': 'application/json',
                'accept': 'application/json'
            }   
        }).then((response) => response.json())
        .then((results) => {
            let ifMatched = results ? "Yes" : "No"
            this.setState({
                matched: ifMatched
            })
        });
    }
  	render() {
	    return (
            <div>
                <div className="text-center">
                    <form onSubmit={this.submitPasswordForm.bind(this)}>
                        <div>
                            <h2>Password Matcher</h2>
                        </div>
                        <div>
                            <div>
                                <span className="glyphicon glyphicon-lock"><input type="text" ref="username" placeholder="Enter Username"/></span>
                            </div>
                            <div>
                                <span className="glyphicon glyphicon-lock"><input type="password" ref="password" placeholder="Enter Password"/></span>
                            </div>
                            <div>
                                <input className="btn btn-default" type="submit" />
                            </div>
                        </div>
                    </form>
                </div>
                <div className="text-center">
                    <h1>Matched?</h1>
                    <h2>{this.state.matched ? this.state.matched : 'Pending'}</h2>
                </div>
            </div>
	    );
  	}
};
