import React, { Component } from 'react';
import { browserHistory } from 'react-router';

export default class TableItem extends Component { 
    constructor(props) {
        super(props);
        this.state = {
        };
    }
    toLyricsPage(artist, title){
        browserHistory.push(`/lyrics/${artist}/${title}`)
    }
	render(){
		const { index, title, artist } = this.props;
   		var splitArtist = artist.split(" ").join("+").toLowerCase();
    	var splitTitle = title.split(" ").join("+").toLowerCase();
		return (
			<tr onClick={() => this.toLyricsPage(splitArtist, splitTitle)}>
				<td>{index}</td>
				<td>{title}</td>
				<td>{artist}</td>
			</tr>
		)
	}
}