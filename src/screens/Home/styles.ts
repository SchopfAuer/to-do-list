import { Dimensions, StyleSheet } from 'react-native';
import { theme } from '../../global/styles/theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  input: {
    height: 40,
    width: 300,
    fontFamily: theme.fonts.inter400,
    color: theme.colors.text,
    borderWidth: 1,
    borderColor: '#9f9f9f',
    backgroundColor: '#f0f0f0'
  },
  inputWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 50,
    width: '100%',
    paddingHorizontal: 15
  },
});