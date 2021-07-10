import { StyleSheet } from 'react-native';
import { theme } from '../../global/styles/theme';

export const styles = StyleSheet.create({
  container: {
    height: 60,
    alignContent: 'center',
    justifyContent: 'space-between',
    padding: 20,
    flexDirection: 'row'
  },
  task: {
    textAlign: 'left',
    textAlignVertical: 'center',
    fontFamily: theme.fonts.inter400,
    fontSize: 16
  },
  content: {
    width: '90%',
    flexDirection: 'row',
    alignContent: 'center',
    justifyContent: 'flex-start'
  },
});