import { Dimensions, StyleSheet } from 'react-native';
import { theme } from '../../global/styles/theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  titleWrapper: {
    marginTop: 12,
    paddingHorizontal: 15,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center'
  },
  title: {
    fontSize: 20,
    fontFamily: theme.fonts.inter500,
    color: theme.colors.text
  },
  input: {
    height: 40,
    width: 280,
    fontFamily: theme.fonts.inter400,
    color: theme.colors.text,
    borderWidth: 1,
    borderColor: '#9f9f9f',
    backgroundColor: '#f0f0f0',
    paddingHorizontal: 10,
    borderRadius: 3,
  },
  inputWrapper: {
    marginTop: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 50,
    width: '100%',
    paddingHorizontal: 15
  },
  saveButton: {
    height: 40,
    width: 40,
    backgroundColor: theme.colors.secondary,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
    borderWidth: 2,
    borderColor: theme.colors.text
  },
  clearButton: {
    height: 40,
    width: 40,
    backgroundColor: theme.colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
    borderWidth: 2,
    borderColor: theme.colors.text
  }
});