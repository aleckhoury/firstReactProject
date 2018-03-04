import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import Button from './nav_button';

export default class Space extends Component {
  render() {
    return (
      <div id="space_main">
        <div id="space_content">
          <h1> The New Standard in Real Estate Education</h1>
          <h2>
            AceableAgent is the fresh, new state-approved course that syncs
            across phone, tablet, and home computer. TREC Provider Approval
            #10137
          </h2>
          <Button name="Get my license" />
          <Button name="Continuing education" />
        </div>
        <div id="space_content">YT Video</div>
      </div>
    );
  }
}
