import { View, Text } from "react-native";
import { STYLES } from "./styles";

export const Welcome = () => {
  return (
    <View style={STYLES.WELCOME_CONTAINER}>
      <Text style={STYLES.WELCOME_TEXT}>Welcome</Text>
    </View>
  );
}