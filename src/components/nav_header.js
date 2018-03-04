import React, { Component } from 'react';
import { connect } from 'react-redux';
import NavButton from './nav_button';

export default class Header extends Component {
  render() {
    return (
      <header id="navigation">
        <NavButton name="Home" to="/home" />
        <NavButton name="About" to="/about" />
        <div id="logo">
          <img src="https://s3-us-west-2.amazonaws.com/aceable-multimedia/design/logo.png" />
        </div>
        <NavButton name="Cart" to="/cart" />
        <NavButton name="Sign In" to="/signin" />
      </header>
    );
  }
}
