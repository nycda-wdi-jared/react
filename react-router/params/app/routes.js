import React from "react";
import { Route, Switch } from "react-router-dom";

import Home from "./components/Home";
import Whatever from "./components/Whatever";
import Profile from "./components/Profile";
import PageNotFound from "./components/PageNotFound";

export default (
	<Switch>
    	<Route exact path="/" component={Home} />
    	<Route path="/whatever" component={Whatever} />
    	<Route path="/profile/:id" component={Profile} />
    	<Route path="*" component={PageNotFound} />
    </Switch>
);