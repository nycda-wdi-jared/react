import React, { Component } from 'react';
import {browserHistory} from 'react-router';

export default class MovieTableTr extends Component {
	constructor(props) {
		super(props);
		this.state = {
			linkColor: '',
			decoration: ''
		};
	}
	whiteText(){
		this.setState({
			linkColor: 'white',
			decoration: 'none'
		})
	}
	movieRowClick(movieTitle){
		const mtSplit = movieTitle.split(" ").join("+").toLowerCase();
		browserHistory.push("/movie/" + mtSplit)
	}
	render() {
		const {num, title, year} = this.props;
	    return (
			<tr 
				key={num} 
				className="movie_tr"
				onClick={() => this.movieRowClick(title)}
				onMouseOver={this.whiteText.bind(this)}
			>
				<td>{num}</td>
				<td>{title}</td>
				<td>{year}</td>
			</tr>
	    );
	}
};		        	
