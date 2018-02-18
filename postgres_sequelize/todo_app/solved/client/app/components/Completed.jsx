import React, { Component } from 'react';
import {Link} from 'react-router';

export default class Completed extends Component {
    constructor(props) {
        super(props);
        this.state = {
        	completedTasks: []
        };
    }
	componentWillMount(){
		fetch('/api/completed-tasks', {
			headers: {
                'content-type': 'application/json',
                'accept': 'application/json'
            }
		}).then((response) => response.json())
        .then((results) => {
        	this.setState({
        		completedTasks: results
        	});
        });
	}
  	render() {
  		console.log(this.state.completedTasks)
  		const appendCompletedTasks = () => {
  			if(this.state.completedTasks.length > 0){
  				return this.state.completedTasks.map((ct, index) => {
  					return (
  						<p key={index}>{index + 1}: {ct.task}</p>
  					)
  				});
  			} else {
  				return (
  					<p>No Completed Tasks</p>
  				)
  			}
  		}
	    return (
	    	<div>
		        <div>
		        	<h1>Completed Tasks</h1>
		        	{appendCompletedTasks()}
		        </div>
                <Link className="btn btn-info" to="/">All Tasks</Link>
                <Link className="btn btn-info" to="/incomplete">Incomplete Tasks</Link>
			</div>
	    );
  	}
};