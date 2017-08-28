import { StyleSheet } from 'react-native';

import {colors, typography } from '../../config/styles';

export const styles = StyleSheet.create({
  conductItems: {
    flex: 1,
    flexDirection: 'row',
    marginBottom: 20,
  },
  plusSign: {
    fontWeight: 'bold',
    color: colors.purple,    
  },
  conductTitle: {
    fontWeight: 'bold',
    color: colors.purple,
  },
  conductList: {

    marginBottom: 20,
  }
});