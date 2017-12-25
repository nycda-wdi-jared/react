import React, { Component } from 'react';

export default class TableItem extends Component { 
    constructor(props) {
        super(props);
        this.state = {
        };
    }
	render(){
		const { index, title, artist } = this.props;
		return (
			<tr>
				<td>{index}</td>
				<td>{title}</td>
				<td>{artist}</td>
			</tr>
		)
	}
}