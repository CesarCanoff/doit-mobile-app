import { useState, useRef } from "react";
import {
  View,
  Text,
  FlatList,
  ScrollView,
  TextInput,
  TouchableOpacity,
} from "react-native";

import { STYLES } from "./styles";
import { THEME } from "@themes/index";

import { Ionicons } from "@expo/vector-icons";

import { Header } from "@components/Header";
import { Checkbox } from "@components/Checkbox";
import { EmptyList } from "@components/EmptyList";
import { ActionButton } from "@components/ActionButton";

type Tasks = {
  id: number;
  title: string;
  category?: string;
  isChecked: boolean;
};

export const Home = () => {
  const [createTaskModalIsOpen, setCreateTaskModalIsOpen] = useState(false);

  const input = useRef<TextInput>(null);

  const [taskName, setTaskName] = useState("");

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
    {
      id: 5,
      title: "Study Programming",
      category: "Studies",
      isChecked: false,
    },
    {
      id: 6,
      title: "Drink more water",
      category: "Wealth",
      isChecked: false,
    },
  ]);

  const [doneTasks, setDoneTasks] = useState<Tasks[]>([]);

  const createTask = () => {
    if (taskName.length > 0) {
      const newTask = {
        id: Math.random(),
        title: taskName,
        isChecked: false,
      };

      setToDoTasks([...toDoTasks, newTask]);
      setTaskName("");
      setCreateTaskModalIsOpen(false);
    }
  };

  const toggleCheckBox = (id: number) => {
    toDoTasks.filter((task) => {
      if (task.id === id) {
        const newTask = { ...task, isChecked: !task.isChecked };

        setDoneTasks([...doneTasks, newTask]);
        setToDoTasks(toDoTasks.filter((task) => task.id !== id));
      }
    });
  };

  const openCreateTask = () => {
    setCreateTaskModalIsOpen(true);
    setTimeout(() => {
      input.current?.focus();
    }, 100);
  };

  const deleteAllDoneTasks = () => {
    setDoneTasks([]);
  };

  return (
    <>
      <View style={STYLES.HOME_CONTAINER}>
        <Header
          toDoTasks={toDoTasks.length}
          completedTasks={doneTasks.length}
        />
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
            {createTaskModalIsOpen && (
              <>
                <View>
                  <View
                    style={{
                      width: "100%",
                      flexDirection: "row",
                    }}
                  >
                    <TextInput
                      ref={input}
                      maxLength={40}
                      placeholder="Task title"
                      value={taskName}
                      onChangeText={(text) => setTaskName(text)}
                      style={STYLES.INPUT}
                    />

                    <TouchableOpacity activeOpacity={0.7} onPress={createTask}>
                      <View style={STYLES.CONTAINER_BUTTON}>
                        <Ionicons
                          name="create-sharp"
                          size={20}
                          color={THEME.COLORS.BACKGROUND}
                        />
                      </View>
                    </TouchableOpacity>
                  </View>

                  <Text
                    style={{
                      alignSelf: "flex-end",
                      marginRight: 50,

                      fontSize: THEME.FONT.SIZE.SM,
                      color:
                        taskName.length === 40
                          ? THEME.COLORS.SECONDARY
                          : THEME.COLORS.TEXT,
                      fontFamily:
                        taskName.length === 40
                          ? THEME.FONT.FAMILY.BOLD
                          : THEME.FONT.FAMILY.MEDIUM,
                    }}
                  >
                    {taskName.length} / 40
                  </Text>
                </View>
              </>
            )}

            <Text style={STYLES.TITLE}>Incomplete</Text>
            <FlatList
              data={toDoTasks}
              keyExtractor={(item) => item.id.toString()}
              ListEmptyComponent={() => <EmptyList openWindow={() => {}} />}
              contentContainerStyle={toDoTasks.length === 0 && { height: 300 }}
              renderItem={({ item }) => (
                <Checkbox
                  title={item.title}
                  isChecked={item.isChecked}
                  toggleCheckBox={() => toggleCheckBox(item.id)}
                />
              )}
            />

            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <Text style={STYLES.TITLE}>Complete</Text>
              <TouchableOpacity
                onPress={deleteAllDoneTasks}
                activeOpacity={0.7}
              >
                <Text
                  style={{
                    color: THEME.COLORS.SECONDARY,
                    fontFamily: THEME.FONT.FAMILY.SEMIBOLD,
                  }}
                >
                  Delete all
                </Text>
              </TouchableOpacity>
            </View>

            <FlatList
              data={doneTasks}
              keyExtractor={(item) => item.id.toString()}
              ListEmptyComponent={() => (
                <EmptyList message="No complete tasks" openWindow={() => {}} />
              )}
              contentContainerStyle={doneTasks.length === 0 && { height: 300 }}
              renderItem={({ item }) => (
                <Checkbox title={item.title} isChecked={item.isChecked} />
              )}
            />
          </View>
        </ScrollView>
      </View>

      {!createTaskModalIsOpen ? (
        <ActionButton onPress={openCreateTask} type="OPEN" />
      ) : (
        <ActionButton
          onPress={() => setCreateTaskModalIsOpen(false)}
          type="CLOSE"
        />
      )}
    </>
  );
};
