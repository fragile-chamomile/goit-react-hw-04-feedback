import React, { Component } from 'react';
import Feedback from '../components/Feedback/Feedback';

class App extends Component {
  render() {
    return (
      <div style={{ margin: '50px auto 0', width: '600px' }}>
        <Feedback />
      </div>
    );
  }
}

export default App;
