// @flow

import React, { Component } from 'react';
import Options from './components/Options';
import Link from './components/Link';

class App extends Component<{}> {
  render() {
    return (
      <Options>
        <div>
          <h1>Flow HOC</h1>
          <Link to="https://flow.org" />
          <Link to="https://flow.org" className="custom-className" />
        </div>
      </Options>
    );
  }
}

export default App;
