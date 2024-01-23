import { useEffect, useState } from "react";
import { View, Text } from "react-native";

import { STYLES } from "./styles";

import { SafeAreaView } from "react-native-safe-area-context";

import { TasksStatus } from "@components/TaskStatus";

export const Header = () => {
  const [dateSplit, setDateSplit] = useState<string[]>([]);

  useEffect(() => {
    const date = new Date();
    setDateSplit(date.toDateString().split(" "));
  }, []);

  return (
    <View style={STYLES.DATE_CONTAINER}>
      <SafeAreaView>
        <Text style={STYLES.DATE_TEXT}>
          {dateSplit[1]} {dateSplit[2]}, {dateSplit[3]}
        </Text>

        <TasksStatus />
      </SafeAreaView>
    </View>
  );
};
