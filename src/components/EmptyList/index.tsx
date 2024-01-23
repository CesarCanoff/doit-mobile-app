import { View, Text, TouchableWithoutFeedback } from "react-native";
import { STYLES } from "./styles";

type Props = {
  message?: string;
  openWindow?: () => void;
};

export const EmptyList = ({ message = "No task", openWindow }: Props) => {
  return (
    <TouchableWithoutFeedback onPress={openWindow}>
      <View style={STYLES.EMPTY_LIST_CONTAINER}>
        <Text style={STYLES.EMPTY_LIST_TEXT}>{message}</Text>
        <Text style={STYLES.EMPTY_LIST_TEXT}>Tap here to create a task</Text>
      </View>
    </TouchableWithoutFeedback>
  );
};
