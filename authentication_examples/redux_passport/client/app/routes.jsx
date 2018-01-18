import React from "react";
import { Route } from "react-router";

import Application from "./components/Application"
import HomePage from "./components/pages/HomePage";
import CreateAccountPage from './components/pages/CreateAccountPage';
import LoginPage from './components/pages/LoginPage';
import UserHomePage from './components/pages/UserHomePage';
import ApplicationPage from './components/pages/ApplicationPage';

export default (
	<Route component={Application}>
    	<Route path="/" component={HomePage}/>
        <Route path="/register" component={CreateAccountPage}/>
        <Route path="/login" component={LoginPage}/>
        <Route path="/userhome" component={UserHomePage}/>
        <Route path="/application/:id" component={ApplicationPage}/>
    </Route>
);