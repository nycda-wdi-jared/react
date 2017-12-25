import React, { Component } from 'react';
import { Link } from 'react-router';

export default class LyricsPage extends Component { 
    constructor(props) {
        super(props);
        this.state = {
        	song: {}
        };
    }
    componentWillMount(){
    	var artist = this.props.params.artist;
    	var title = this.props.params.title;
		fetch(`/api/lyrics/${artist}/${title}`, {
			headers: {
                'content-type': 'application/json',
                'accept': 'application/json'
            }
		}).then((response) => response.json())
        .then((song) => {
        	this.setState({
        		song: song
        	})
        });
    }
	render(){
		var appendLyrics = () => {
			if(this.state.song.lyrics){
				return this.state.song.lyrics.map((lyric) => {
					return (
						<div>
							<span>{lyric}</span><br></br>
						</div>
					)
				})
			}
		}
		return (
			<div>
				<Link to="/">					
					<button className='btn btn-primary'>
						<span className='glyphicon glyphicon-home' aria-hidden='true'></span>
					</button>
				</Link>
				<br></br>
				<h1>{this.state.song.artist} - {this.state.song.title}</h1>
				<br></br>
				{appendLyrics()}
			</div>
		)
	}
}