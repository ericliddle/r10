import React from 'react';
import {
  View,
  TouchableOpacity,
  Text
} from 'react-native';
import PropTypes from 'prop-types';

const ActionButton = ({buttonAction, text}) => {
  return (
      <View>
        <TouchableOpacity onPress={buttonAction}>
          <Text>{text}</Text>
        </TouchableOpacity>
      </View>
  );
};

ActionButton.propTypes = {

};

export default ActionButton;

