import { StyleSheet } from "react-native";
import { themes } from "../../global/themes";

export const style = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: themes.colors.lightGreen,
    width: "100%",
  },
  topContent: {
    height: "33%",
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  logo: {
    width: 100,
    height: 100,
  },
  logoText: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  smallText: {
    fontSize: 24,
    color: themes.colors.red,
    fontFamily: themes.fonts.title,
  },
  bigText: {
    fontSize: 32,
    color: themes.colors.yellow,
    fontFamily: themes.fonts.title,
  },
  midContent: {
    height: "33%",
    width: "100%",
  },
  botContent: {
    height: "33%",
    width: "100%",
  },
});
