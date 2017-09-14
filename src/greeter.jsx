import React from 'react';
import PropTypes from 'prop-types';

export const handlers = {
  greet: name => `Hello ${name}`,
};

const Greeter = props => <div>{handlers.greet(props.name)}</div>;

Greeter.propTypes = {
  name: PropTypes.string.isRequired,
};

export default Greeter;
