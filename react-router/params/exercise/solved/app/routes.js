import React from "react";
import { Route, Switch } from "react-router-dom";

import Home from "./components/Home";
import Character from "./components/Character";
import PageNotFound from "./components/PageNotFound";

export default (
	<Switch>
    	<Route exact path="/" component={Home} />
    	<Route path="/character/:character" component={Character} />
    	<Route path="*" component={PageNotFound} />
    </Switch>
);