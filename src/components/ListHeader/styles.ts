import { StyleSheet } from 'react-native';
import { theme } from '../../global/styles/theme';

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 24,
    marginTop: 12,
    borderBottomWidth: 1,
    borderBottomColor: theme.colors.secondary,
    paddingBottom: 12,
    alignItems: 'center'
  },
  title: {
    fontFamily: theme.fonts.inter500,
    color: theme.colors.text,
    fontSize: 20
  },
  subtitle: {
    fontFamily: theme.fonts.inter400,
    color: theme.colors.text,
    fontSize: 16
  }
})
