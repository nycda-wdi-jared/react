import React from "react";
import { Route } from "react-router";

import Home from "./components/pages/HomePage.jsx";
import SignIn from "./components/pages/SignInPage.jsx";
import SignUp from "./components/pages/SignUpPage.jsx";
import UserHome from "./components/pages/UserHomePage.jsx";
import Movies from "./components/pages/MoviesPage.jsx";
import Movie from "./components/pages/MoviePage.jsx";

import PageNotFound from "./components/pages/PageNotFound";

export default (
  	<Route>
    	<Route path="/" component={Home} />
    	<Route path="/login" component={SignIn} />
    	<Route path="/sign-up" component={SignUp} />
    	<Route path="/home" component={UserHome} />
    	<Route path="/movies" component={Movies} />
    	<Route path="/movie/:title" component={Movie} />
    	<Route path="*" component={PageNotFound} />
    </Route>
);