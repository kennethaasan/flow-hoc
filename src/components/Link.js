// @flow

import * as React from 'react';
import type { HigherOrderComponent } from 'react-flow-types';
import type { Options } from './types';
import { Component } from 'react';
import PropTypes from 'prop-types';

type LinkProps = {
  to: string,
  className: string,
  options: Options,
};

class Link extends Component<LinkProps> {
  static defaultProps = {
    className: 'default-className',
  };

  render() {
    const { to, className, options } = this.props;

    return (
      <a href={to} className={className} style={{ display: 'block' }}>
        {`${to} ${options.language} ${className}`}
      </a>
    );
  }
}

const withOptions = (): HigherOrderComponent<
  {},
  {
    options: Options,
  }
> => (Component): any => {
  function WrapperComponent(props, context: { options: Options }) {
    return <Component {...props} options={context.options} />;
  }

  WrapperComponent.contextTypes = {
    options: PropTypes.object.isRequired,
  };

  return WrapperComponent;
};

export default withOptions()(Link);
