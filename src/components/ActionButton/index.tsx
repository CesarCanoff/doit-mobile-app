import { View, Text, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { THEME } from "@themes/index";
import { STYLES } from "./styles";

type Props = {
  onPress: () => void;
};

export const ActionButton = ({ onPress }: Props) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={STYLES.ACTION_BUTTON_CONTAINER}>
        <Ionicons name="add" size={24} color={THEME.COLORS.BACKGROUND} />
      </View>
    </TouchableOpacity>
  );
}