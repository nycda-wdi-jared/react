import React from "react";
import { Switch, Route } from "react-router-dom";

import Home from "./components/Home";
import Whatever from "./components/Whatever";
import Profile from "./components/Profile";

export default (
  	<Switch>
    	<Route exact path="/" component={Home} />
    	<Route path="/whatever" component={Whatever} />
    	<Route path="/profile" component={Profile} />
    </Switch>
);