import { StyleSheet } from "react-native";

import { THEME } from "@themes/index";

export const STYLES = StyleSheet.create({
  DATE_CONTAINER: {
    width: "90%",
    alignSelf: "center",

    backgroundColor: THEME.COLORS.BACKGROUND,

    paddingTop: 32,
    paddingBottom: 14,

    borderBottomWidth: 1,
    borderBottomColor: THEME.COLORS.DISABLED,
  },
  DATE_TEXT: {
    color: THEME.COLORS.TITLE,
    fontSize: THEME.FONT.SIZE.XL,
    fontFamily: THEME.FONT.FAMILY.BOLD,
  },
});
