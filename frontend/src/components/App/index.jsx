import React from 'react';
import PropTypes from 'prop-types';
import './style';

class App extends React.PureComponent {
  static propTypes = {
    onAppLoad: PropTypes.func,
    message: PropTypes.node,
  };
  componentDidMount() {
    if (typeof this.props.onAppLoad === 'function') {
      this.props.onAppLoad();
    }
  }
  render() {
    const {
      message,
    } = this.props;

    return (
      <div className='app'>
        {message}
      </div>
    );
  }
}

export default App;
