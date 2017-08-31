import { StyleSheet, Platform } from 'react-native';
import { typography, colors } from '../../config/styles';

export const styles = StyleSheet.create({
  schedHeader: {
    backgroundColor: colors.lightGrey,
    paddingTop: 5,
    paddingBottom: 5,
    paddingLeft: 10,
    paddingRight: 10
  },
  scheduleContainer: {
    flex: 1,
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row'
  },
  sessionTitle: {
    color: 'black',
    paddingTop: 8,
    paddingBottom: 4,
    paddingLeft: 10,
    paddingRight: 10
  },
  schedHeart: {
    fontSize: 18,
    color: colors.red,
    marginRight: 10
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