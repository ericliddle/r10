import { StyleSheet, Platform } from 'react-native';
import { typography, colors } from '../../config/styles';

export const styles = StyleSheet.create({
  scheduleContainer: {
    flex: 1,
    flexWrap: 'wrap',
    flexDirection: 'row'
  },

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

  colors: {
    color: 'red',
  },

  schedHeader: {
    backgroundColor: colors.lightGrey,
    paddingTop: 5,
    paddingBottom: 5,
    paddingLeft: 10,
    paddingRight: 10
  },

  sessionTitle: {
    color: 'black',
    paddingTop: 8,
    paddingBottom: 4,
    paddingLeft: 10,
    paddingRight: 10
  },
  sessionLocation: {
    color: colors.mediumGrey,
    fontWeight: 'bold',
    paddingTop: 6,
    paddingBottom: 8,
    paddingLeft: 10,
    paddingRight: 10
  }
})