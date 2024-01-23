import { StatusBar, View } from "react-native";

import {
  useFonts,
  Inter_700Bold,
  Inter_600SemiBold,
  Inter_500Medium,
} from "@expo-google-fonts/inter";

import { Routes } from "./src/routes";

import { Loading } from "@components/Loading";

export default function App() {
  const [fontsLoaded] = useFonts({
    Inter_700Bold,
    Inter_600SemiBold,
    Inter_500Medium,
  });

  return (
    <View style={{ flex: 1 }}>
      <StatusBar
        translucent
        backgroundColor="transparent"
        barStyle="dark-content"
      />

      {fontsLoaded ? <Routes /> : <Loading />}
    </View>
  );
}
