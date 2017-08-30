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