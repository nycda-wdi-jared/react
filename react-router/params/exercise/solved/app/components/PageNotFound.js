// Include React
import React, {Component} from "react";
import {Link} from 'react-router-dom';

import HomeButton from './HomeButton';

export default class PageNotFound extends Component {
  render() {
    return (
        <div>
        	<HomeButton/>
        	<h1>Sorry, page not FOUND</h1>
        </div>
    );
  }
};