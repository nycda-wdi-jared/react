import React, { Component, cloneElement } from 'react';

export default class Application extends React.Component {
	render() {
		return (
			<div className="Application">
				{/* Added this.props.children to dump all of the child components into place */}
				{/* This is the top parent component, as it represents all of the components in the application. */}
				{/* if you look in routes.js, this component is wrapped around the other components */}
				{
					cloneElement(this.props.children, {
				  	})
				}
			</div>
		);
	}
}