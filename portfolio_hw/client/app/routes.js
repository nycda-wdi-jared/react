import React from "react";
import { Switch, Route } from "react-router-dom";

import Home from "./components/pages/Home";
import Projects from "./components/pages/Projects";
import AboutMe from "./components/pages/AboutMe";
import Blog from "./components/pages/Blog";
import Email from "./components/pages/Email";

export default (
  	<Switch>
    	<Route exact path="/" component={Home} />
    	<Route path="/projects" component={Projects} />
    	<Route path="/about" component={AboutMe} />
    	<Route path="/blog" component={Blog} />
    	<Route path="/email" component={Email} />
    </Switch>
);