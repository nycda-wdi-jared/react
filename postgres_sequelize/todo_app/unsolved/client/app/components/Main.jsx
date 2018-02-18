import React, { Component } from 'react';
import {Link} from 'react-router';

export default class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
        	/* set state of tasks to an empty array */
        };
    }
    changeStatus(id, status){
        //console.log(id)
        //console.log(status)
        /* 
            You are changing completed to the opposite
            and that is being saved to the database

            i.e. if checkbox is checked, it is currently false in the database
                 need to change it to true in the database

            That will be what you put as the value of completed on line 22 below
        */
        const data = {
            completed: /* true or false */
        }
        fetch(`/api/update-status/${id}`,{
            method: 'PUT',
            body: JSON.stringify(data),
            headers: {
                'content-type': 'application/json',
                'accept': 'application/json'
            }
        }).then((response) => response.json())
        .then((results) => {
            /* set the state of tasks to the callback */
        });
    }
    /*
        
    */
    taskForm(e){
        e.preventDefault();
        //console.log(this.refs)
    	var newTask = {
    		task: /* task input */,
    		completed: false
    	}
        fetch('/api/post-task', {
            method: 'post',
            body: JSON.stringify(newTask),
            headers: {
                'content-type': 'application/json',
                'accept': 'application/json'
            },
        }).then((response) => response.json())
        .then((results) => {
            /* set the state of tasks to the callback */
        });
    }
	componentWillMount(){
		fetch('/api/tasks', {
			headers: {
                'content-type': 'application/json',
                'accept': 'application/json'
            }
		}).then((response) => response.json())
        .then((results) => {
            /* set the state of tasks to the callback */
        });
	}
  	render() {
  		//console.log(this.state)
  		const { tasks } = this.state;
        //console.log(tasks)

  		const appendtasks = () => {
            if(tasks.length > 0){
                return tasks.map((task, index) => {
                    let striked = task.completed ? "line-through" : "none";
                    return (
                        <div key={index}>
                            <li 
                                style={
                                    {
                                        display: 'inline-block', 
                                        marginRight: '10px', 
                                        textDecoration: striked
                                    }
                                }
                            >
                                {/* one more than the index */}. {/* the task */}
                            </li>
                            <input 
                                onChange={() => this.changeStatus(/* tasks id */, /* the tasks completed status */)} 
                                type="checkbox"
                                checked={/* the tasks completed status */}
                            />
                        </div>
                    )
                });
            } else {
                return (
                    /* An html tag saying there are no tasks */
                )
            }
  		}

	    return (
	    	<div>
		        <div className="text-center">
		        	<h1>React ToDo List</h1>
		        </div>
				<br></br>
				<h3 className="text-center">Add Task</h3>
				<div className="text-center center-block">
					<form id="guestbook-form" onSubmit={/* look for the function to bind this to */}>
						<label>Task</label><br></br>
						<input type="text" ref="task"/><br></br>
						<br></br>
						<input className="btn btn-default" id="submit-this" type="submit"/>
					</form>
				</div>
                <br></br>
                <h3>Tasks</h3>
				<ol id="all-tasks-div">
					{/* call the correct function herre */}
				</ol>
                <Link className="btn btn-info" to="/complete">Completed Tasks</Link>
                <Link className="btn btn-info" to="/incomplete">Incomplete Tasks</Link>
			</div>
	    );
  	}
};
