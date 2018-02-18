import React, { Component } from 'react';
import {Link} from 'react-router';

export default class NotCompleted extends Component {
    constructor(props) {
        super(props);
        this.state = {
        	incompleteTasks: []
        };
    }
	componentWillMount(){
		fetch('/api/incomplete-tasks', {
			headers: {
                'content-type': 'application/json',
                'accept': 'application/json'
            }
		}).then((response) => response.json())
        .then((results) => {
        	this.setState({
        		incompleteTasks: results
        	});
        });
	}
  	render() {
  		console.log(this.state.incompleteTasks)
  		const appendIncompleteTasks = () => {
  			if(this.state.incompleteTasks.length > 0){
  				return this.state.incompleteTasks.map((it, index) => {
  					return (
  						<p key={index}>{index + 1}: {it.task}</p>
  					)
  				});
  			} else {
  				return (
  					<p>No Tasks or All Tasks Completed</p>
  				)
  			}
  		}
	    return (
	    	<div>
		        <div>
		        	<h1>Incomplete Tasks</h1>
		        	{appendIncompleteTasks()}
		        </div>
                <Link className="btn btn-info" to="/">All Tasks</Link>
                <Link className="btn btn-info" to="/complete">Completed Tasks</Link>
			</div>
	    );
  	}
};