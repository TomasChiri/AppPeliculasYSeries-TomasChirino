import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const MovieDetailsScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Aca iria detalle de pelicula</Text>
    </View>
  )
}

export default MovieDetailsScreen

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
})