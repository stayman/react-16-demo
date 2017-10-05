import { Component } from 'react';

export default class ErrorBoundary extends Component {

  static defaultProps = {
    log: console.log
  };

  constructor(props) {
    super(props);
    this.state = {
      hasError: false
    };
  }

  componentDidCatch(error, info) {
    this.setState({hasError: true});
  }

  render() {
    if (this.state.hasError) {
      return 'There was an error';
    }

    return this.props.children;
  }
}
