import { StyleSheet, Text, ScrollView, Image, View, TouchableOpacity} from 'react-native';
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import FontAwesome from "@expo/vector-icons/FontAwesome";


const SeriesDetailsScreen = () => {
  const serie = useSelector((state) => state.series.selectedSeries);

  return (
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.title}>{serie.name}</Text>
        <Image source={{uri:serie.image}} style={styles.image}/>
        <Text style={styles.description}>Año: {serie.year}</Text>
        <Text style={styles.description}>Temporadas: {serie.seasons}</Text>
        <Text style={styles.description}>Sinposis: {serie.description}</Text>
        <View>
          <Text style={styles.recommend}>El {serie.approval} de la gente la recomienda</Text>
          <Text style={styles.recommend}>¿Vos la recomendas?</Text>
          <View style={styles.thumbs}>
            <TouchableOpacity>
              <FontAwesome name='thumbs-down'  size={50} color={"red"}/>
            </TouchableOpacity>
            <TouchableOpacity>
              <FontAwesome name='thumbs-up'  size={50} color={"green"}/>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
  )
}

export default SeriesDetailsScreen;

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        backgroundColor: "#264653",
        padding:8,
        alignItems: "center"
    },
    title:{
        fontFamily: "NotoSerifBold",
        fontSize: 40,
        color:"white",
        textAlign:"center"
    },
    image: {
      height: 400,
      width: "90%",
      resizeMode: "contain",
      borderRadius: 60,
      marginTop:10
  },
  description:{
    marginTop:30,
    fontFamily: "NotoSerif",
    fontSize: 16,
    color:"white",
    textAlign: "justify",
    paddingHorizontal: 20
  },
  recommend: {
    textAlign: "center",
    fontFamily: "NotoSerifBold",
    color: "white",
    fontSize: 25,
    marginTop: 25,
  },
  thumbs:{
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 15
  }
})