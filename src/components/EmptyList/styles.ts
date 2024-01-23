import { StyleSheet } from "react-native";

import { THEME } from "@themes/index";

export const STYLES = StyleSheet.create({
  EMPTY_LIST_CONTAINER: {
    width: "100%",
    height: "70%",

    alignItems: "center",
    justifyContent: "center",
  },

  EMPTY_LIST_TEXT: {
    fontFamily: THEME.FONT.FAMILY.BOLD,
    fontSize: THEME.FONT.SIZE.SM,
    color: THEME.COLORS.TEXT_DISABLED,
  }
});
