import { StyleSheet, Text, View } from 'react-native';
import { useFonts } from 'expo-font';
import BottomTabNavigator from './src/navigation/BottomTabNavigator';
import { Provider } from 'react-redux';
import store from './src/store';

export default function App() {
  const [fontsLoaded] = useFonts({
    "NotoSerif": require("./src/assets/fonts/NotoSerifKhojki-Regular.ttf"),
    "NotoSerifBold": require("./src/assets/fonts/NotoSerifKhojki-Bold.ttf")
  });

  if(!fontsLoaded){
    return null;
  }

  return (
    <Provider store={store}>
      <BottomTabNavigator />
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
