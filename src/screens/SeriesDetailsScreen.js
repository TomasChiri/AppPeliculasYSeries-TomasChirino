import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const SeriesDetailsScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Aca iria detalle de serie</Text>
    </View>
  )
}

export default SeriesDetailsScreen

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