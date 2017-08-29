import { StyleSheet, Platform } from 'react-native';
import { typography, colors } from '../../config/styles';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginLeft: 16,
    marginRight: 16
  },
  sessionHeader: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 5,
    paddingBottom: 5,
  },
  sessionLocation: {
    color: colors.mediumGrey,
    fontWeight: 'bold',
    paddingTop: 6,
    paddingBottom: 8,
  },
  heartIcon: {
    color: colors.red,
    fontSize: 18,
  },
  sessionTitle: {
    color: 'black',
    fontSize: 24,
    fontWeight: 'bold',
    paddingTop: 8,
    paddingBottom: 4,
  },
  timeSlot: {
    color: colors.red,
    paddingTop: 8,
    paddingBottom: 4,
  },
  sessionInfo: {
    fontSize: 18,
    paddingTop: 10,
    paddingBottom: 25,
  },
  speakerContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1.5,
    borderBottomColor: colors.lightGrey,
    paddingBottom: 16,
  },
  presenter: {
    color: colors.mediumGrey,
    fontWeight: 'bold',
    paddingTop: 10,
    paddingBottom: 10,
  },
  speakerImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 15,
  }

})