import { StyleSheet } from 'react-native';
import {colors, typography } from '../../config/styles';



export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 20,
  },
  actionButtonContainer: {
    height: 50,
    width: 200,
    backgroundColor: 'transparent',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 25,
  },
  buttonText: {
    color: 'white',
    fontFamily: typography.fontMain
  },
})