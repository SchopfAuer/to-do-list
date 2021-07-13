import { StyleSheet } from "react-native";
import { getStatusBarHeight } from "react-native-iphone-x-helper";
import { theme } from "../../global/styles/theme";

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 80,
    paddingTop: getStatusBarHeight(),
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  title: {
    flex: 1,
    textAlign: 'center',
    fontSize: 24,
    color: theme.colors.text,
    fontFamily: theme.fonts.inter500
  },
})