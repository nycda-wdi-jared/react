import React from "react";
import { Route } from "react-router";

import Home from "./components/pages/HomePage";
import Movies from "./components/pages/MovieTablePage";
import Movie from "./components/pages/MoviePage";

import PageNotFound from "./components/pages/PageNotFound";

export default (
  	<Route>
    	<Route path="/" component={Home} />
    	<Route path="/movies" component={Movies} />
    	<Route path="/movie/:title" component={Movie} />
    	<Route path="*" component={PageNotFound} />
    </Route>
);