import { StyleSheet, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import FontAwesome from "@expo/vector-icons/FontAwesome";
import AppNavigator from "./AppNavigator";
import ProfileNavigator from './ProfileNavigator';

const BottomTabs = createBottomTabNavigator();

export default BottomTabNavigator = () => {
    
  return (
    <NavigationContainer> 
        <BottomTabs.Navigator 
            initialRouteName='ShopTab'
            screenOptions={{
                headerShown: false, 
                tabBarShowLabel:false, 
                tabBarStyle: styles.tabBar,
                tabBarActiveBackgroundColor: "grey"
            }}>
            <BottomTabs.Screen name='ShopTab' component={AppNavigator}  options={{
                tabBarIcon: ({focus}) => (
                    <View style={styles.item}>
                        <FontAwesome name="home" size={25} color="white"/>
                        <Text style={{color:"white"}}>Inicio</Text>
                    </View>
                )
            }}/>
            <BottomTabs.Screen name='CartTab' component={ProfileNavigator}  options={{
                tabBarIcon: ({focus}) => (
                    <View style={styles.item}>
                        <FontAwesome name="user-circle" size={25} color="white"/>
                        <Text style={{color:"white"}}>Perfil</Text>
                    </View>
                )
            }}/>
        </BottomTabs.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
    tabBar: {
        height: 80,
        paddingTop: 10,
        backgroundColor: "#212529",
    },
    item: {
        flex: 1,
        justifyContent:"center",
        alignItems: "center"
    }
})