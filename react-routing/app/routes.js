import React from "react";
import { Route } from "react-router";

// Parent
import Application from "./components/Application";
// Children
import Home from "./components/Home";
import Whatever from "./components/Whatever";
import Profile from "./components/Profile";

export default (
  	<Route component={Application}>
    	<Route path="/" component={Home} />
    	<Route path="/whatever" component={Whatever} />
    	<Route path="/profile" component={Profile} />
    </Route>
);