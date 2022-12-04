import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'

const SeriesScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
        <Text style={styles.title}>Series</Text>
        <View style={styles.seriesContainer}>
            <Text>Aca iria una Serie</Text>
            <TouchableOpacity style={styles.button} onPress={() => {navigation.navigate("SeriesDetails")}}>
                <Text style={styles.buttonTitle}>Ir a detalle de Serie</Text>
            </TouchableOpacity>
        </View>
    </View>
  )
}

export default SeriesScreen

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
    seriesContainer:{
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