import React from "react";
import { Route } from "react-router";

import Main from "./components/Main";
import Completed from "./components/Completed";
import NotCompleted from "./components/NotCompleted";

export default (
	<Route>
	    <Route path="/" component={Main} />
	    <Route path="/complete" component={Completed} />
	    <Route path="/incomplete" component={NotCompleted} />
	</Route>
);