import React, { Component } from 'react';
import {Link} from 'react-router';

export default class NotCompleted extends Component {
  constructor(props) {
      super(props);
      this.state = {
      	/* set state of incompleteTasks to an empty array */
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
        /* set the state of incompleteTasks to the callback */
    });
	}
	render() {
		//console.log(this.state.incompleteTasks)
    const { incompleteTasks } = this.state;
    //console.log(incompleteTasks)
		const appendIncompleteTasks = () => {
      /*
        If the length of the incomplete tasks is greater than 0,
        then map each task to a p tag

        If the length of completed tasks is less than 0,
        then append a p tag stating that there are no completed tasks
      */
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