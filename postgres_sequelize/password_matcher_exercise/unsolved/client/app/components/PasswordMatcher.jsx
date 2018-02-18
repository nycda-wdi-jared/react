import React, { Component } from 'react';

export default class PasswordMatcher extends Component {
    constructor(props) {
        super(props);
        this.state = {
            /* set the state of matched to undefined */
        };
    }
    submitPasswordForm(e){
        e.preventDefault();

        var inputData = {
            username: /* username input value */,
            password: /* password input value */
        }

        fetch(/* server side route */, {
            method: 'post',
            body: JSON.stringify(inputData),
            headers: {
                'content-type': 'application/json',
                'accept': 'application/json'
            }   
        }).then((response) => response.json())
        .then((results) => {
            /*
                - first, console.log(results)
                  should be either false or true...that's what bcrypt.compareSync returns
                - then, write a ternary and store it in a var.
                  If results is true, then return yes. if not, then return no
                - set the state of matched to that variable
            */
        });
    }
  	render() {
	    return (
            <div>
                <div className="text-center">
                    <form onSubmit={/* Bind to appropriate function here */}>
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
                    <h2>
                    {
                        /*
                            ternary here.
                            if the state of matched is not undefined, then return the state of matched
                            if the state of matched is undefined, then return 'Pending'
                        */
                    }
                    </h2>
                </div>
            </div>
	    );
  	}
};
