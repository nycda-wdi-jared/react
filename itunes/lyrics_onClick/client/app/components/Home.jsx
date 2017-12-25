import React, { Component } from 'react';
import TableList from './TableList';

export default class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
        	songs: []
        };
    }
	componentWillMount(){
		fetch('/api/songs', {
			headers: {
                'content-type': 'application/json',
                'accept': 'application/json'
            }
		}).then((response) => response.json())
        .then((results) => {
        	this.setState({
        		songs: results
        	})
        });
	}
  	render() {
	    return (
	        <div>
	        	<table id="songs-table" className="table table-striped table-hover">
	        		<thead>
	        			<tr>
		        			<th>#</th>
		        			<th>Title</th>
		        			<th>Artist</th>
		        		</tr>
	        		</thead>
	        		<TableList songs={this.state.songs}/>
	        	</table>
	        </div>
	    );
  	}
};
