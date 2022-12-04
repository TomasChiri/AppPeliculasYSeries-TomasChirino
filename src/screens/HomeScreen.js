import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'

const HomeScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>INICIO</Text>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("Movies")}>
            <Text style={styles.buttonTitle}>Peliculas</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("Series")}>
            <Text style={styles.buttonTitle}>Series</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#002D62",
        alignItems: "center",
    },
    title:{
        fontFamily: "NotoSerifBold",
        fontSize: 40,
        color:"white",
    },
    buttonContainer:{
        width: "100%",
        height: "60%",
        justifyContent: "space-evenly",
        alignItems: "center",
        marginTop: 10
    },
    button:{
        backgroundColor: "#6699CC",
        height: "30%",
        width: "80%",
        borderRadius: 16,
        justifyContent: "center",
        alignItems: "center"
    },
    buttonTitle:{
        fontFamily: "NotoSerif",
        fontSize: 35,
        color: "white"
    }
})