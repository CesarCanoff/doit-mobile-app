import { THEME } from "@themes/index";
import { StyleSheet } from "react-native";

export const STYLES = StyleSheet.create({
  ACTION_BUTTON_CONTAINER: {
    width: 60,
    height: 60,

    position: "absolute",
    bottom: 30,
    right: 20,

    borderRadius: 30,
    backgroundColor: THEME.COLORS.PRIMARY,

    justifyContent: "center",
    alignItems: "center",
  },

  ACTION_CLOSE_BUTTON_CONTAINER: {
    width: 60,
    height: 60,

    position: "absolute",
    bottom: 30,
    right: 20,

    borderRadius: 30,
    backgroundColor: THEME.COLORS.SECONDARY,

    justifyContent: "center",
    alignItems: "center",
  },
});
