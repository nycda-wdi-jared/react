import React from "react";
import { Route } from "react-router";

// Parent
import Application from "./components/Application";
// Children
import Home from "./components/Home";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import UserHome from "./components/UserHome";
import ForgotPassword from "./components/ForgotPassword";

import PageNotFound from "./components/PageNotFound";

export default (
  	<Route component={Application}>
    	<Route path="/" component={Home} />
    	<Route path="/login" component={SignIn} />
    	<Route path="/sign-up" component={SignUp} />
    	<Route path="/home" component={UserHome} />
    	<Route path="/forgot-password/:uuid" component={ForgotPassword} />
    	<Route path="*" component={PageNotFound} />
    </Route>
);