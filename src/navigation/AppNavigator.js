import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../screens/HomeScreen";
import MoviesScreen from "../screens/MoviesScreen";
import MovieDetailsScreen from "../screens/MovieDetailsScreen";
import SeriesScreen from "../screens/SeriesScreen";
import SeriesDetailsScreen from "../screens/SeriesDetailsScreen";

const Stack = createNativeStackNavigator();

export default ShopNavigator = () => {
    return(
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Home" component={HomeScreen}/>
                <Stack.Screen name="Movies" component={MoviesScreen}/>
                <Stack.Screen name="MovieDetails" component={MovieDetailsScreen}/>
                <Stack.Screen name="Series" component={SeriesScreen}/>
                <Stack.Screen name="SeriesDetails" component={SeriesDetailsScreen}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
};