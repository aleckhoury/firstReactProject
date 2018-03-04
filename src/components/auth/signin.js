import React, { Component } from 'react';
import { reduxForm, Field, Form } from 'redux-form';
import * as actions from '../../actions';

class Signin extends Component {
  handleFormSubmit({ email, password }) {
    console.log(email, password);
    // Need to do something to log user in
    actions.signInUser({ email, password });
  }

  renderAlert() {
    if (actions.errorMessage) {
      return (
        <div className="alert alert-danger">
          <strong>Oops!</strong> {actions.errorMessage}
        </div>
      );
    }
  }

  render() {
    const { handleSubmit, fields: { email, password } } = this.props;

    return (
      <Form onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
        <fieldset className="form-group">
          <label>Email:</label>
          <Field
            name="email"
            component="input"
            type="text"
            placeholder="Email"
            className="form-control"
          />
        </fieldset>
        <fieldset className="form-group">
          <label>Password:</label>
          <Field
            name="password"
            component="input"
            type="text"
            placeholder="Password"
            type="password"
            className="form-control"
          />
        </fieldset>
        {this.renderAlert()}
        <button action="submit" className="btn btn-primary">
          Sign in
        </button>
      </Form>
    );
  }
}

function mapStateToProps(state) {
  return { errorMessage: state.auth.error };
}

export default reduxForm(
  {
    form: 'signin',
    fields: ['email', 'password']
  },
  mapStateToProps,
  actions
)(Signin);
