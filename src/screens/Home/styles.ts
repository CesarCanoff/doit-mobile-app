import { StyleSheet } from "react-native";

import { THEME } from "@themes/index";

export const STYLES = StyleSheet.create({
  HOME_CONTAINER: {
    height: "100%",
    backgroundColor: THEME.COLORS.BACKGROUND,
  },
  
  TITLE: {
    color: THEME.COLORS.TEXT,
    fontSize: THEME.FONT.SIZE.MD,
    fontFamily: THEME.FONT.FAMILY.BOLD,

    marginVertical: 10,
  },

  INPUT: {
    width: "100%",
    height: 50,
    backgroundColor: THEME.COLORS.BACKGROUND,
    borderRadius: 10,
    padding: 10,
    paddingRight: 60,
    marginVertical: 10,

    borderWidth: 1,
    borderColor: THEME.COLORS.PRIMARY,
  },

  CONTAINER_BUTTON: {
    position: "relative",
    right: 50,

    height: 50,
    width: 50,

    justifyContent: "center",
    alignItems: "center",

    backgroundColor: THEME.COLORS.PRIMARY,
    borderTopEndRadius: 10,
    borderBottomEndRadius: 10,
    marginVertical: 10,
  },

  TEXT_BUTTON: {
    color: THEME.COLORS.TEXT,
    fontSize: THEME.FONT.SIZE.MD,
    fontFamily: THEME.FONT.FAMILY.BOLD,
  },
});
