import React, { Component } from 'react';
import classnames from 'classnames';
import { Field, reduxForm } from 'redux-form';
import SigninForm from './Form';

import * as Actions from '../../actions'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';

class Signin extends Component {
  submit = values => {
	this.props.actions.signInForm(values)
  }
  render() {
    const { className, ...props } = this.props;
    console.log(this.props)
    const wasLoginSuccessful = () => {
    	if(this.props.loginSuccessful){
    		return (
    			<p>Login Successful</p>
    		)
    	} else if (this.props.loginSuccessful == false){
    		return (
    			<p>Login Unsuccessful</p>
    		)
    	} else {
    		return (
    			<p></p>
    		)
    	}
    }
    return (
      <div className={classnames('Signin', className)} {...props}>
        <h1>Signin Page</h1>
        <SigninForm onSubmit={this.submit}/>
        {wasLoginSuccessful()}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
  	results: state.demo.results,
  	loginSuccessful: state.demo.loginSuccessful
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(Actions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Signin)