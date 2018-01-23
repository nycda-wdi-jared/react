// This is the non-babel way to import
// var React = require("react");

// This is the babel way
import React, {Component} from 'react';

export default class Whatever extends Component {
  	render() {
	  	/*
			Html within this render method every time
	  	*/
	    return (
	      	<div className="well">
		        <h1 
		        	onClick={
			        	function(){
			        		alert("hello")
			        	}
			        }
			    >
		        	Hello Whatever
		        </h1>
	      	</div>
	    );
  	}
};