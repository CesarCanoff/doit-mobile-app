import { StyleSheet } from "react-native";

import { THEME } from "@themes/index";

export const STYLES = StyleSheet.create({
  WELCOME_CONTAINER: {
    height: "100%",
    backgroundColor: THEME.COLORS.BACKGROUND,
  },
  TITLE: {
    color: THEME.COLORS.TEXT,
    fontSize: THEME.FONT.SIZE.MD,
    fontFamily: THEME.FONT.FAMILY.BOLD,

    marginVertical: 10,
  },
});