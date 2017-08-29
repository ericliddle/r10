import { Platform, StyleSheet } from 'react-native';

/**
 Global Styles
 */

export const colors = {
  mediumGrey: '#999999',
  lightGrey: '#e6e6e6',
  blue: '#8797D6',
  purple: '#9963ea',
  red: '#cf392a',
};

//Will have to conditionally set Monstserrat for IOS or Android.
//ios = Montserrat, Android = Montserrat-regular
export const typography = {
  baseSize: 16,
  fontMainLight: 'Montserrat-Light',
  ...Platform.select({
    ios: {
      fontMain: 'Montserrat',
    },
    android: {
      fontMain: 'Montserrat-Regular',
    }
  })
};