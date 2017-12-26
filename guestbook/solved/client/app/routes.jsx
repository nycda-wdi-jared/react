import React from "react";
import { Route } from "react-router";

// Parent
import Application from "./components/Application";
// Children
import Guestbook from "./components/Guestbook";

export default (
  	<Route component={Application}>
    	<Route path="/" component={Guestbook} />
    </Route>
);