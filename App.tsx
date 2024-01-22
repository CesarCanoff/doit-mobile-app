import { StatusBar } from 'react-native';
import { Text, View } from 'react-native';

import {
  useFonts,
  Inter_700Bold,
  Inter_400Regular
} from '@expo-google-fonts/inter';

import { Loading } from '@components/Loading';

import { Routes } from './src/routes';

export default function App() {
  const [fontsLoaded] = useFonts({
    Inter_700Bold,
    Inter_400Regular
  });

  return (
    <View style={{ flex: 1 }}>
      {/* <StatusBar /> */}

      { fontsLoaded ? <Routes /> : <Loading /> }
    </View>
  );
}
