import React from 'react';
import { FontAwesome } from '@expo/vector-icons';
import PropTypes from 'prop-types';

const Icons = props => <FontAwesome name={props.name} size={props.size} style={props.style} />;

Icons.propTypes = {
  'name': PropTypes.string.isRequired,
  'size': PropTypes.number,
  'style': PropTypes.any,
};

export default Icons;
