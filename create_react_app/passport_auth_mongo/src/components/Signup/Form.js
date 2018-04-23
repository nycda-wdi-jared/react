import React from 'react'
import { Field, reduxForm } from 'redux-form'

let SignUpForm = props => {
  const { handleSubmit } = props
  return (
	    <form onSubmit={handleSubmit}>
			<div>
				<label>Name</label>
				<Field name="name" component="input" type="text" />
			</div>
			<div>
				<label>Email</label>
				<Field name="email" component="input" type="email" />
			</div>
			<div>
				<label>Password</label>
				<Field name="password" component="input" type="password" />
			</div>
			<div>
				<label>Password</label>
				<Field name="confirmPassword" component="input" type="password" />
			</div>
			<button type="submit">Submit</button>
	    </form>
  	)
}

SignUpForm = reduxForm({
	form: 'signup'
})(SignUpForm)

export default SignUpForm