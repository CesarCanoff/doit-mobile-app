import { ActivityIndicator, View } from "react-native";
import { STYLES } from "./styles";

export const Loading = () => {
  return (
    <View style={STYLES.LOADING_CONTAINER}>
      <ActivityIndicator size="large" color="blue" />
    </View>
  );
};
