import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { Welcome } from "@screens/Welcome";

const { Navigator, Screen } = createNativeStackNavigator();

export const AppRoutes = () => {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name="Welcome" component={Welcome} />
    </Navigator>
  );
}