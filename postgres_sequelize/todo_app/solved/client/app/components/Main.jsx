import React, { Component } from 'react';
import {Link} from 'react-router';

export default class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
        	tasks: []
        };
    }
    changeStatus(id, status){
        const data = {
            completed: !status
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
            this.setState({
                tasks: results
            });
        });
    }
    taskForm(e){
        e.preventDefault();

    	var newTask = {
    		task: this.refs.task.value,
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
            this.setState({
                tasks: results
            });
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
        	this.setState({
        		tasks: results
        	});
        });
	}
  	render() {
        /*  
            Look for where im setting the state of tasks
            when the page loads, and when an event is fired...just like jQuery ;)
        */
  		//console.log(this.state.tasks)
  		const { tasks } = this.state;

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
                                {index + 1}. {task.task}
                            </li>
                            <input 
                                onChange={() => this.changeStatus(task.id, task.completed)} 
                                type="checkbox"
                                checked={task.completed}
                            />
                        </div>
                    )
                });
            } else {
                return (
                    <p>No Tasks</p>
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
					<form id="guestbook-form" onSubmit={this.taskForm.bind(this)}>
						<label>Task</label><br></br>
						<input type="text" ref="task"/><br></br>
						<br></br>
						<input className="btn btn-default" id="submit-this" type="submit"/>
					</form>
				</div>
                <br></br>
                <h3>Tasks</h3>
				<ol id="all-tasks-div">
					{appendtasks()}
				</ol>
                <Link className="btn btn-info" to="/complete">Completed Tasks</Link>
                <Link className="btn btn-info" to="/incomplete">Incomplete Tasks</Link>
			</div>
	    );
  	}
};
