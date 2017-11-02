// @flow

import * as React from 'react';
import type { HOC } from 'recompose';
import type { Options } from './types';
import { Component } from 'react';
import { compose, getContext } from 'recompose';
import PropTypes from 'prop-types';

type LinkProps = {
  to: string,
  className?: string,
};

class Link extends Component<
  LinkProps & {
    options: Options,
  }
> {
  render() {
    const { to, className = 'default-className', options } = this.props;

    console.log(this.props);

    return (
      <a href={to} className={className} style={{ display: 'block' }}>
        {`${to} ${options.language} ${className}`}
      </a>
    );
  }
}

const withOptions: HOC<*, LinkProps> = compose(
  getContext({
    options: PropTypes.object.isRequired,
  })
);

export default withOptions(Link);
