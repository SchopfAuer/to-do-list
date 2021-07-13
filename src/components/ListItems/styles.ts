import { StyleSheet } from 'react-native';
import { theme } from '../../global/styles/theme';

export const styles = StyleSheet.create({
  container: {
    height: 36,
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    paddingLeft: 16
  },
  task: {
    textAlign: 'left',
    textAlignVertical: 'center',
    fontFamily: theme.fonts.inter400,
    fontSize: 16,
    color: theme.colors.text
  },
  checkedTask: {
    textAlign: 'left',
    textAlignVertical: 'center',
    fontFamily: theme.fonts.inter400,
    fontSize: 16,
    textDecorationLine: 'line-through',
    color: theme.colors.secondary
  },
  content: {
    width: '90%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start'
  },
});