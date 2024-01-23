import { View, Text } from "react-native";
import { STYLES } from "./styles";

type Props = {
  toDoTasks: number;
  completedTasks: number;
};

export const TasksStatus = ({ completedTasks, toDoTasks }: Props) => {
  return (
    <View>
      <Text style={STYLES.TASKS_STATUS_TEXT}>
        {toDoTasks} incomplete, {completedTasks} completed
      </Text>
    </View>
  );
};
