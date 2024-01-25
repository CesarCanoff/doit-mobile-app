import { ActivityIndicator, View } from "react-native";
import { STYLES } from "./styles";

import { THEME } from "@themes/index";

export const Loading = () => {
  return (
    <View style={STYLES.LOADING_CONTAINER}>
      <ActivityIndicator size="large" color={THEME.COLORS.PRIMARY} />
    </View>
  );
};
