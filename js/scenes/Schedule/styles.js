import { StyleSheet, Platform } from 'react-native';
import { typography, colors } from '../../config/styles';

export const styles = StyleSheet.create({
  schedHeader: {
    fontFamily: typography.fontMainLight,
    fontSize: 12,
    fontWeight: 'bold',
    backgroundColor: colors.lightGrey,
    paddingTop: 5,
    paddingBottom: 5,
    paddingLeft: 10,
    paddingRight: 10
  },
  border: {
    borderBottomWidth: 1,
    borderBottomColor: colors.lightGrey,
  },
  scheduleContainer: {
    flex: 1,
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row'
  },
  sessionTitle: {
    fontFamily: typography.fontMainLight,
    fontWeight: 'bold',
    color: 'black',
    paddingTop: 8,
    paddingBottom: 4,
    paddingLeft: 10,
    paddingRight: 10
  },
  heartIcon: {
    fontSize: 18,
    color: colors.red,
    paddingRight: 10
  },
  sessionLocation: {
    fontFamily: typography.fontMainLight,
    fontSize: 12,
    color: colors.mediumGrey,
    fontWeight: 'bold',
    paddingTop: 6,
    paddingBottom: 8,
    paddingLeft: 10,
    paddingRight: 10
  }
})