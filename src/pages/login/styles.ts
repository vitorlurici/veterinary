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
    paddingHorizontal: 12,
    gap: 20,
  },
  data: {
    gap: 4,
  },
  label: {
    fontSize: 16,
    fontFamily: themes.fonts.text,
    color: themes.colors.white,
  },
  input: {
    padding: 12,
    backgroundColor: themes.colors.white,
    borderRadius: 12,
    borderColor: themes.colors.black,
    fontSize: 16,
    fontFamily: themes.fonts.text,
  },
  lostPassword: {
    textAlign: "right",
    fontFamily: themes.fonts.text,
    fontSize: 12,
    color: themes.colors.white,
    textDecorationLine: "underline",
  },
  botContent: {
    height: "33%",
    width: "100%",
  },
});
