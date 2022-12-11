import { StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import React from 'react';


const ListItem = ({item, onSelected}) => {

    return (
      <View style={styles.container}>
          <Image source={{uri:item.image}} style={styles.image}/>
          <Text style={styles.title}>{item.name}</Text>
          <TouchableOpacity style={styles.button} onPress={() => onSelected(item)}>
              <Text style={{color:"white"}}>Ver Mas</Text>
          </TouchableOpacity>
      </View>
    )
  }
  
  export default ListItem;
  
  const styles = StyleSheet.create({
      container: {
          width: "100%",
          height: 350,
          padding: 20,
          marginTop: 20,
          marginBottom: 20,
          alignItems: "center",
          shadowColor: "black",
          shadowOffset: {width: 0, height: 2},
          shadowRadius: 6,
          shadowOpacity: 0.5,
          elevation: 5,
          borderRadius: 10,
          backgroundColor: "white",
      },
      image: {
          height: "75%",
          width: "90%",
          resizeMode: "contain",
          borderRadius: 25
      },
      title: {
          fontSize: 20,
          marginTop: 10
      },
      button: {
          marginTop: 20,
          backgroundColor: "grey",
          height: 35,
          width: "40%",
          justifyContent: 'center',
          alignItems: "center",
          borderRadius: 10,
      }
  })