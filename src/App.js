// @flow

import React, { Component } from 'react';
import Options from './components/Options';
import Link from './components/Link';

class App extends Component<{}> {
  render() {
    return (
      <Options>
        <div>
          <header>
            <h1>Kenneth Flow</h1>
          </header>
          <Link to="https://vg.no" />
          <Link to="https://vg.no" className="kenneth-flow" />
        </div>
      </Options>
    );
  }
}

export default App;
