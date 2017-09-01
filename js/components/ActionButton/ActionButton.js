import React from 'react';
import {
  View,
  TouchableOpacity,
  Text
} from 'react-native';
import PropTypes from 'prop-types';

import { styles } from './styles';
import {colors} from '../../config/styles';

import LinearGradient from 'react-native-linear-gradient';

const ActionButton = ({ buttonAction, text }) => {
  return (
    <View style={styles.container}>
        <TouchableOpacity onPress={buttonAction}>
      <LinearGradient style={styles.actionButtonContainer} colors={[colors.purple, colors.blue]}   start={{x: 0.0, y: 0.25}} end={{x: 0.5, y: 1.0}}>
          <Text style={styles.buttonText}>{text}</Text>
      </LinearGradient>
        </TouchableOpacity>
    </View>
  );
};

ActionButton.propTypes = {
  buttonAction: PropTypes.func,
  text: PropTypes.string,
};

export default ActionButton;

