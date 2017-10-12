import React from 'react';
import ReactDOM from 'react-dom';
import './Portal.css';

export default class PortalContainer extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      portalOpen: false
    };
  }

  openPortal(e) {
    e.preventDefault();
    this.setState({
      portalOpen: true
    });
  }

  closePortal(e) {
    e.preventDefault();
    this.setState({
      portalOpen: false
    });
  }

  render() {
    const { portalOpen } = this.state;

    return portalOpen
      ? ReactDOM.createPortal(
        <div className="portal">
          <div className="portal-body">
          I am a portal, rendered by <pre>ReactDOM.createPortal</pre>, and I exist on a completely different DOM node than the rest of the app!
          Check it out in the Inspector.
          <button onClick={(e) => this.closePortal(e)} className="portal-button">Close me!</button>
          </div>
        </div>,
        document.getElementById('modal-root')
      )
      : <button onClick={(e) => this.openPortal(e)} className="portal-button">Click me to open a Portal</button>
  }
}
