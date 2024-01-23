import { View, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { THEME } from "@themes/index";
import { STYLES } from "./styles";

type Props = {
  onPress: () => void;
  type: "OPEN" | "CLOSE";
};

export const ActionButton = ({ onPress, type = "OPEN" }: Props) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View
        style={
          type === "OPEN"
            ? STYLES.ACTION_BUTTON_CONTAINER
            : STYLES.ACTION_CLOSE_BUTTON_CONTAINER
        }
      >
        <Ionicons
          name={type === "OPEN" ? "add" : "close"}
          size={24}
          color={THEME.COLORS.BACKGROUND}
        />
      </View>
    </TouchableOpacity>
  );
};
