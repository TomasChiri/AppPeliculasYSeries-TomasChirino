import { TouchableOpacity, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const MoviesScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
        <Text style={styles.title}>Peliculas</Text>
        <View style={styles.movieContainer}>
            <Text>Aca iria una pelicula</Text>
            <TouchableOpacity style={styles.button} onPress={() => {navigation.navigate("MovieDetails")}}>
                <Text style={styles.buttonTitle}>Ir a detalle de Pelicula</Text>
            </TouchableOpacity>
        </View>
    </View>
  )
}

export default MoviesScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#1d1160",
        alignItems: "center",
    },
    title:{
        fontFamily: "NotoSerifBold",
        fontSize: 40,
        color:"white",
    },
    movieContainer:{
        backgroundColor:"white",
        height: "20%",
        width: "60%",
        padding: 10,
        alignItems: "center",
        justifyContent: 'space-between',
        borderRadius: 12
    },
    button:{
        backgroundColor: "#662d91",
        height: "35%",
        width: "80%",
        borderRadius: 16,
        justifyContent: "center",
        alignItems: "center"
    },
    buttonTitle:{
        fontFamily: "NotoSerif",
        color: "white"
    }
})