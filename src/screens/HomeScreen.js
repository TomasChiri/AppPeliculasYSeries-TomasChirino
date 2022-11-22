import { StyleSheet, Text, View, Pressable } from 'react-native'
import React from 'react'

const HomeScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>INICIO</Text>
      <View style={styles.buttonContainer}>
        <Pressable style={styles.button} onPress={() => navigation.navigate("Movies")}>
            <Text style={styles.buttonTitle}>Peliculas</Text>
        </Pressable>
        <Pressable style={styles.button} onPress={() => navigation.navigate("Series")}>
            <Text style={styles.buttonTitle}>Series</Text>
        </Pressable>
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
        height: "90%",
        justifyContent: "space-evenly",
        alignItems: "center"
    },
    button:{
        backgroundColor: "#6699CC",
        height: "35%",
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