import React, { Component } from 'react';

import Questions from './questions';
import Result from './result';
import AppBkg from "./appBkg";

export default class App extends Component {
  render() {
    return (
      <div className="app-container">
        <AppBkg />
        <h1 className="site-title">
          <a href="/">Glam Cam Presents</a>
        </h1>
        <h2 className="site-title-dark">
          <a href="/">What's your beauty sign?</a>
        </h2>
        <Questions />
        <Result />
      </div>
    );
  }
}
