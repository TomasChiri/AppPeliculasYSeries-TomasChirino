import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../screens/HomeScreen";
import MoviesScreen from "../screens/MoviesScreen";
import MovieDetailsScreen from "../screens/MovieDetailsScreen";
import SeriesScreen from "../screens/SeriesScreen";
import SeriesDetailsScreen from "../screens/SeriesDetailsScreen";

const Stack = createNativeStackNavigator();

export default ShopNavigator = () => {
    return(
            <Stack.Navigator screenOptions={{
                headerStyle: {backgroundColor: "#212529"},
                headerTintColor: "white",
            }}>
                <Stack.Screen name="Home" component={HomeScreen} options={{title: "Inicio"}}/>
                <Stack.Screen name="Movies" component={MoviesScreen} options={{title: "Peliculas"}}/>
                <Stack.Screen name="MovieDetails" component={MovieDetailsScreen} 
                options={({route}) => ({
                    title: route.params.name,
                })}/>
                <Stack.Screen name="Series" component={SeriesScreen} options={{title: "Series"}}/>
                <Stack.Screen name="SeriesDetails" component={SeriesDetailsScreen} 
                options={({route}) => ({
                    title: route.params.name,
                })}/>
            </Stack.Navigator>
    );
};