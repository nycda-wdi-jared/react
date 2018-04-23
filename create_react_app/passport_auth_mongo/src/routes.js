import React from 'react';
import App from './containers/AppContainer';
import About from './components/About/About';
import Signup from './components/Signup/Signup';
import Signin from './components/Signin/Signin';

import { BrowserRouter as Router, Route } from 'react-router-dom';

const Routes = () => {
  return (
    <Router>
      <div>
        <Route exact path="/" component={App} />
        <Route exact path="/about" component={About} />
        <Route exact path="/signup" component={Signup} />
        <Route exact path="/signin" component={Signin} />
      </div>
    </Router>
  )
};

export default Routes;
