import React, { Component } from 'react';
import {Link} from 'react-router';

export default class Completed extends Component {
  constructor(props) {
      super(props);
      this.state = {
      	/* set state of completedTasks to an empty array */
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
          /* set the state of completedTasks to the callback */
        });
	}
	render() {
		//console.log(this.state.completedTasks)
    const { completedTasks } = this.state;
    //console.log(completedTasks)
		const appendCompletedTasks = () => {
      /*
        If the length of completed tasks is greater than 0,
        then map each task to a p tag

        If the length of completed tasks is less than 0,
        then append a p tag stating that there are no completed tasks
      */
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