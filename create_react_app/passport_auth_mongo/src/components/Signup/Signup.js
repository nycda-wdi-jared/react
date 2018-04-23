import React, { Component } from 'react';
import classnames from 'classnames';
import { Field, reduxForm } from 'redux-form';
import SignupForm from './Form';

import * as Actions from '../../actions'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';

class Signup extends Component {
  submit = values => {
	this.props.actions.signUpForm(values)
  }
  render() {
    const { className, ...props } = this.props;
    console.log(this.props)
    return (
      <div className={classnames('Signup', className)} {...props}>
        <h1>Signup Page</h1>
        <SignupForm onSubmit={this.submit}/>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
  	results: state
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(Actions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Signup)