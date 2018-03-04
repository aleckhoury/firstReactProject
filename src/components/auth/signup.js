import React, { Component } from 'react';
import { reduxForm, Field, Form } from 'redux-form';
import * as actions from '../../actions';

class Signup extends Component {
  render() {
    const {
      handleSubmit,
      fields: { email, password, passwordConfirm }
    } = this.props;
    return (
      <Form>
        <fieldset className="form-group">
          <label>Email: </label>
          <Field
            name="email"
            component="input"
            type="text"
            placeholder="Email"
            className="form-control"
          />
        </fieldset>
        <fieldset className="form-group">
          <label>Password: </label>
          <Field
            name="password"
            component="input"
            type="text"
            placeholder="Password"
            type="password"
            className="form-control"
          />
        </fieldset>
        <fieldset className="form-group">
          <label>Confirm Password: </label>
          <Field
            name="passwordConfirm"
            component="input"
            type="text"
            placeholder="Confirm Password"
            type="password"
            className="form-control"
          />
        </fieldset>
        <button action="submit" className="btn btn-primary">
          Sign Up!
        </button>
      </Form>
    );
  }
}

function validate(formProps) {
  const errors = {};

  if (formProps.password !== formProps.passwordConfirm) {
    errors.password = 'Passwords must match';
  }

  return errors;
}

export default reduxForm({
  form: 'signup',
  fields: ['email, password, passwordConfirm'],
  validate //this is the function above being passed through
})(Signup);
