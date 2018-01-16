import React from "react";
import { Switch, Route } from "react-router-dom";

import Home from "./components/Home";
import PageNotFound from "./components/PageNotFound";

export default (
  	<Switch>
    	<Route exact path="/" component={Home} />
    	<Route path="*" component={PageNotFound} />
    </Switch>
);