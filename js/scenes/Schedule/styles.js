import {StyleSheet, Platform} from 'react-native';

export const styles = StyleSheet.create({
  fontStyle: {
    ...Platform.select({
      ios: {
        fontFamily: 'Montserrat',
        color: 'blue'
      },
      android: {
        fontFamily: 'times',
        color: 'purple'
      }
    })
  },
  fontHeader: {
    ...Platform.select({
      ios: {
        fontSize: 30
      },
      android: {
        fontSize: 30
      }
    })
  },
})