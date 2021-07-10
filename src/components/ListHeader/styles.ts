import { StyleSheet } from 'react-native';
import { theme } from '../../global/styles/theme';

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 24,
    marginTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: theme.colors.secondary
  },
  title: {
    fontFamily: theme.fonts.inter500,
    color: theme.colors.text,
    fontSize: 18
  },
  subtitle: {
    fontFamily: theme.fonts.inter400,
    color: theme.colors.text,
    fontSize: 13
  }
})
