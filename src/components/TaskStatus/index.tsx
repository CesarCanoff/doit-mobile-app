import { View, Text } from "react-native";
import { STYLES } from "./styles";

export const TasksStatus = () => {
  return (
    <View>
      <Text style={STYLES.TASKS_STATUS_TEXT}>5 incomplete, 5 completed</Text>
    </View>
  );
}