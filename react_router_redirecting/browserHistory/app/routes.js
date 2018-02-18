import React from "react";
import { Route } from "react-router";

import Home from "./components/Home";
import Whatever from "./components/Whatever";
import Profile from "./components/Profile";

export default (
  	<Route>
    	<Route exact path="/" component={Home} />
    	<Route path="/whatever" component={Whatever} />
    	<Route path="/profile" component={Profile} />
    </Route>
);