import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ProfileScreen from "../screens/ProfileScreen";

const Stack = createNativeStackNavigator();

export default ProfileNavigator = () => {
    return(

            <Stack.Navigator screenOptions={{
                headerStyle: {backgroundColor: "#212529"},
                headerTintColor: "white",
            }}>
                <Stack.Screen name="Profile" component={ProfileScreen} options={{title: "Perfil"}}/>
            </Stack.Navigator>

    );
};