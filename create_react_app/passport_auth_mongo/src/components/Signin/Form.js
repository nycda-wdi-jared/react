import React from 'react'
import { Field, reduxForm } from 'redux-form'

let SignInForm = props => {
  const { handleSubmit } = props
  return (
	    <form onSubmit={handleSubmit}>
			<div>
				<label>Email</label>
				<Field name="email" component="input" type="email" />
			</div>
			<div>
				<label>Password</label>
				<Field name="password" component="input" type="password" />
			</div>
			<button type="submit">Submit</button>
	    </form>
  	)
}

SignInForm = reduxForm({
	form: 'signin'
})(SignInForm)

export default SignInForm