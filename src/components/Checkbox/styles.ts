import { StyleSheet } from "react-native";

import { THEME } from "@themes/index";

export const STYLE = StyleSheet.create({
  CHECKBOX_CONTAINER: {
    backgroundColor: THEME.COLORS.BACKGROUND,
    padding: 5,
    flexDirection: "row",
    alignItems: "center",

    marginBottom: 10,
  },

  CHECKBOX_AREA: {
    borderColor: THEME.COLORS.TEXT_DISABLED,
    borderWidth: 2,

    width: 30,
    height: 30,

    borderRadius: 8,

    marginRight: 20,

    justifyContent: "center",
    alignItems: "center",
  },

  CHECKBOX_TITLE: {
    width: "90%",

    color: THEME.COLORS.TEXT,
    fontSize: THEME.FONT.SIZE.MD,
    fontFamily: THEME.FONT.FAMILY.MEDIUM,
  },
  
  CHECKBOX_DISABLED_TITLE: {
    width: "90%",
    textDecorationLine: "line-through",

    color: THEME.COLORS.TEXT_DISABLED,
    fontSize: THEME.FONT.SIZE.MD,
    fontFamily: THEME.FONT.FAMILY.MEDIUM,
  },
});
