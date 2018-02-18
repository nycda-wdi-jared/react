import React from "react";

import { Route, Router, browserHistory } from "react-router";

import Application from "./components/Application"

import Home from "./components/Home";
import Paper from "./components/Paper";
import Textiles from "./components/Textiles";
import Tiles from "./components/Tiles";

export default (
	<Router history={browserHistory}>
	  	<Route component={Application}>
	    	<Route path="/" component={Home} />
	    	<Route path="/paper" component={Paper} />
	    	<Route path="/textiles" component={Textiles} />
	    	<Route path="/tiles" component={Tiles} />
	    </Route>
	</Router>
);