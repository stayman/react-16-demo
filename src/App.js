import React, { Component } from 'react';
import logo from './logo.svg';
import Fragment from './Features/Fragment';
import StringReturn from './Features/String';
import ErrorBoundary from './Features/ErrorBoundary';
import ErroringComponent from './Features/ErroringComponent';
import PortalContainer from './Features/PortalContainer';
import DomAttrs from './Features/DomAttrs';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">React 16 Demonstrations</h1>
        </header>
        <h2>Fragments</h2>
        <dl>
          <Fragment />
        </dl>
        <h2>Return a String</h2>
        <StringReturn />
        <h2>Error Boundaries</h2>
        <ErrorBoundary>
          <ErroringComponent />
        </ErrorBoundary>
        <h2>Portals</h2>
        <PortalContainer domNode={this.c} />
        <h2>Custom DOM attributes</h2>
        <DomAttrs />
      </div>
    );
  }
}

export default App;
