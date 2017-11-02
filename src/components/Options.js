// @flow

import type { Options as OptionsType } from './types';
import * as React from 'react';

import { Component, Children } from 'react';
import PropTypes from 'prop-types';

type Props = {
  children: React.Node,
};

type State = {
  options: OptionsType,
};

class Options extends Component<Props, State> {
  static childContextTypes = {
    options: PropTypes.object.isRequired,
  };

  state = {
    options: {
      language: 'en_US',
    },
  };

  getChildContext() {
    return {
      options: this.state.options,
    };
  }

  render() {
    return Children.only(this.props.children);
  }
}

export default Options;
