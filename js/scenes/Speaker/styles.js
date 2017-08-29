import { StyleSheet, Platform } from 'react-native';
import { typography, colors } from '../../config/styles';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    marginLeft: 16,
    marginRight: 16,
    paddingTop: 28,
  },
  speakerImage: {
    width: 100, 
    height: 100, 
    borderRadius: 50,
    marginBottom: 16, 
  },
  speakerName: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  }
});