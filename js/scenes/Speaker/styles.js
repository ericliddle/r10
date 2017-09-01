import { StyleSheet, Platform } from 'react-native';
import { typography, colors } from '../../config/styles';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    marginLeft: 12,
    marginRight: 12,
    paddingTop: 28,
    paddingLeft: 16,
    paddingRight: 16,
    backgroundColor: 'white',
    borderRadius: 10,
  },
  speakerHeader: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 30,
    marginBottom: 25
  },
  closeX: {
    marginLeft: 15,
    width: 20,
  },
  aboutSpeaker: {
    flex: 1,
    color: 'white',
    fontFamily: typography.fontMainLight,
    fontSize: 16,
    fontWeight: 'bold',
    marginLeft: 55,
  },
  speakerImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 16,
  },
  speakerName: {
    fontFamily: typography.fontMain,
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  speakerBio: {
    fontFamily: typography.fontMainLight,
    fontSize: 14,
  }
});