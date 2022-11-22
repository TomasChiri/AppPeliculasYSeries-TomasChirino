import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { useFonts } from 'expo-font';
import AppNavigator from './src/navigation/AppNavigator';

export default function App() {
  const [fontsLoaded] = useFonts({
    "NotoSerif": require("./src/assets/fonts/NotoSerifKhojki-Regular.ttf"),
    "NotoSerifBold": require("./src/assets/fonts/NotoSerifKhojki-Bold.ttf")
  });

  if(!fontsLoaded){
    return null;
  }

  return <AppNavigator />
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
