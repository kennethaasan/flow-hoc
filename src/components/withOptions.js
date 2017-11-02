// @flow

import * as React from 'react';
import type { Options } from './types';
import type { HOC } from 'recompose';
import { compose, getContext } from 'recompose';
import PropTypes from 'prop-types';

type EnhancedComponentProps = {
  options?: Options,
};

const withOptions: HOC<*, EnhancedComponentProps> = compose(
  getContext({
    options: PropTypes.object.isRequired,
  })
);

export default withOptions;
