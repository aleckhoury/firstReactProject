import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class NavButton extends Component {
  render(props) {
    return (
      <Link to={`${this.props.to}`} style={{ textDecoration: 'none' }}>
        <button>{this.props.name}</button>
      </Link>
    );
  }
}
