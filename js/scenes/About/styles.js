import { StyleSheet } from 'react-native';
import {colors, typography } from '../../config/styles';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginLeft: 16,
    marginRight: 16
  },
  r10LogoContainer: {
    marginBottom: 20,
    marginTop: 20,
    alignItems: 'center',
    borderBottomWidth: 1.5,
    borderBottomColor: colors.lightGrey
  },
  r10LogoImage: {
    marginBottom: 16,
  },
  border: {
    flex: 1,
    height: StyleSheet.hairlineWidth,
    backgroundColor: '#0c0c0c'
  },
  sectionHeader: {
    fontWeight: 'bold',
    fontSize: 20,
    marginBottom: 20,
    marginTop: 20,
  },

});