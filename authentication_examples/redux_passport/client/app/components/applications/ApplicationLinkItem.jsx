import React, { Component } from 'react';
import { Link } from 'react-router';

export default class ApplicationLinkItem extends React.Component { 
	render(){
		const { id, company, position } = this.props;

		return (	
			<div>
				<Link to={`/application/${id}`}>{company}: {position}</Link>
			</div>
		)
	}
}