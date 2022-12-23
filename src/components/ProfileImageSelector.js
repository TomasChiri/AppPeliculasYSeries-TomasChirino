import React, { useState } from "react";
import { StyleSheet, Text, View, Alert, Image, Button } from "react-native";
import * as ImagePicker from "expo-image-picker";

const ProfileImageSelector = (props) => {
  const [pickedUri, setPickedUri] = useState();

  const verifyPermissions = async () => {
    const { status } = await ImagePicker.requestCameraPermissionsAsync();

    if (status !== "granted") {
      Alert.alert(
        "Permisos insuficientes",
        "Necesita dar permisos de la camara para usar la aplicacion",
        [{ text: "OK" }]
      );
      return false;
    }
    return true;
  };

  const handlerTakeImage = async () => {
    const isCameraOk = await verifyPermissions();
    if (!isCameraOk) return;

    const image = await ImagePicker.launchCameraAsync({
      allowsEditing: true,
      aspect: [16, 9],
      quality: 0.8,
    });
    setPickedUri(image.assets[0].uri);
    props.onImage(image.assets[0].uri);
  };

  return (
    <View style={styles.container}>
      <View style={styles.preview}>
        {!pickedUri ? (
          <Text style={styles.text}>Toque el boton para tomar una foto de perfil</Text>
        ) : (
          <Image style={styles.image} source={{ uri: pickedUri }} />
        )}
      </View>
      <Button
        title="Tomar foto de perfil"
        color={"white"}
        onPress={handlerTakeImage}
      />
    </View>
  );
};

export default ProfileImageSelector;

const styles = StyleSheet.create({
  container: {
    marginBottom: 10,
  },
  preview: {
    width: "100%",
    height: 200,
    marginBottom: 10,
    justifyContent: "center",
    alignItems: "center",
    padding: 10
  },
  text:{
    color: "white",
    borderWidth: 1,
    borderColor: "white",
    padding: 30,
    borderRadius: 50,
    fontSize: 18,
    maxWidth: "50%"
  },
  image: {
    width: "50%",
    height: "100%",
    borderRadius: 100,
    borderWidth: 2,
    borderColor: "white"
  },
});