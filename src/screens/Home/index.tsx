import { View, Text, FlatList, ScrollView } from "react-native";
import { STYLES } from "./styles";

import { Header } from "@components/Header";
import { Checkbox } from "@components/Checkbox";
import { EmptyList } from "@components/EmptyList";
import { useState } from "react";
import { ActionButton } from "@components/ActionButton";

type Tasks = {
  id: number;
  title: string;
  category?: string;
  isChecked: boolean;
};

export const Home = () => {
  const [toDoTasks, setToDoTasks] = useState<Tasks[]>([
    {
      id: 1,
      title: "Go to supermarket",
      category: "Home",
      isChecked: false,
    },
    {
      id: 2,
      title: "Go to Gym",
      category: "Health",
      isChecked: false,
    },
    {
      id: 3,
      title: "Study Programming",
      category: "Studies",
      isChecked: false,
    },
    {
      id: 4,
      title: "Drink more water",
      category: "Wealth",
      isChecked: false,
    },
  ]);

  const [doneTasks, setDoneTasks] = useState<Tasks[]>([]);

  const toggleCheckBox = (id: number) => {
    toDoTasks.filter((task) => {
      if (task.id === id) {
        const newTask = { ...task, isChecked: !task.isChecked };

        setDoneTasks([...doneTasks, newTask]);
        setToDoTasks(toDoTasks.filter((task) => task.id !== id));
      }
    });
  };

  return (
    <>
      <View style={STYLES.WELCOME_CONTAINER}>
        <Header />
        <ScrollView
          contentContainerStyle={{
            justifyContent: "flex-start",
            flexGrow: 1,
            paddingVertical: 0,
          }}
          keyboardShouldPersistTaps="handled"
          scrollEnabled
          showsVerticalScrollIndicator={false}
        >
          <View style={{ paddingHorizontal: 22, paddingTop: 16 }}>
            <Text style={STYLES.TITLE}>Incomplete</Text>

            <FlatList
              data={toDoTasks}
              keyExtractor={(item) => item.id.toString()}
              ListEmptyComponent={() => <EmptyList openWindow={() => {}} />}
              contentContainerStyle={toDoTasks.length === 0 && { height: 300 }}
              renderItem={({ item }) => (
                <Checkbox
                  title={item.title}
                  taskCategory={item.category}
                  isChecked={item.isChecked}
                  toggleCheckBox={() => toggleCheckBox(item.id)}
                />
              )}
            />

            <Text style={STYLES.TITLE}>Complete</Text>

            <FlatList
              data={doneTasks}
              keyExtractor={(item) => item.id.toString()}
              ListEmptyComponent={() => (
                <EmptyList message="No complete tasks" openWindow={() => {}} />
              )}
              contentContainerStyle={doneTasks.length === 0 && { height: 300 }}
              renderItem={({ item }) => (
                <Checkbox
                  title={item.title}
                  taskCategory={item.category}
                  isChecked={item.isChecked}
                />
              )}
            />
          </View>
        </ScrollView>
      </View>

      <ActionButton onPress={() => {}} />
    </>
  );
};
