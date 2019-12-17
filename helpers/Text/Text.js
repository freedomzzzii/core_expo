import React from 'react';
import { Text } from 'react-native';
import PropTypes from 'prop-types';

import styles from './Style';

export const LightText = props => <Text allowFontScaling={false} {...props} style={{ ...styles.light, ...props.style }} />;

LightText.propTypes = {
  'style': PropTypes.any,
};

export const RegularText = props => <Text allowFontScaling={false} {...props} style={{ ...styles.regular, ...props.style }} />;

RegularText.propTypes = {
  'style': PropTypes.any,
};

export const MediumText = props => <Text allowFontScaling={false} {...props} style={{ ...styles.medium, ...props.style }} />;

MediumText.propTypes = {
  'style': PropTypes.any,
};

export const SemiBoldText = props => <Text allowFontScaling={false} {...props} style={{ ...styles.semiBold, ...props.style }} />;

SemiBoldText.propTypes = {
  'style': PropTypes.any,
};
