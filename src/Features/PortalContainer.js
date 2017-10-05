import React from 'react';
import ReactDOM from 'react-dom';

export default function PortalContainer() {
  return ReactDOM.createPortal(<span>I'm a portal</span>, document.getElementById('modal-root'));
}
