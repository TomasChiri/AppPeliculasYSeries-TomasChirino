import React, {useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import ProfileImageSelector from '../components/ProfileImageSelector';

const ProfileScreen = () => {
  const [image, setImage] = useState();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Usuario88475</Text>
      <ProfileImageSelector onImage={setImage}/>
    </View>
  )
}

export default ProfileScreen

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: "#002D62"
  },
  title:{
    fontSize: 25,
    color: "white",
    textAlign: "center",
    marginTop: 15,
  }
})