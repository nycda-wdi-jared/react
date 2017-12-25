import React from "react";
import { Route } from "react-router";

// Parent
import Application from "./components/Application";
// Children
import Home from "./components/Home";
import LyricsPage from './components/LyricsPage';

export default (
  	<Route component={Application}>
    	<Route path="/" component={Home} />
    	<Route path="/lyrics/:artist/:title" component={LyricsPage} />
    </Route>
);