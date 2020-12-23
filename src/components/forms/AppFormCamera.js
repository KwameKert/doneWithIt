import React, {useState, useEffect} from "react";
import { View, StyleSheet, TouchableWithoutFeedback } from "react-native";
import { useFormikContext } from "formik";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import * as ImagePicker from 'expo-image-picker';
import { Image } from 'react-native';

import Colors from "../../config/colors";
import AppErrorMessage from './AppErrorMessage';
import { TouchableHighlight, TouchableOpacity } from "react-native-gesture-handler";

function AppFormCamera({ width, name}) {
  const {setFieldTouched, touched, errors, handleChange } = useFormikContext();

    const [imageUri, setImageUri ] = useState()
  const requestPermission = async () =>{
    const {granted} = await ImagePicker.requestCameraPermissionsAsync();
    if(!granted){
      alert("You need to enable photo  access for this app");
    }
  };

  const selectImage = async()=>{
    try {
      const result =  await ImagePicker.launchImageLibraryAsync();
      if(!result.cancelled){
        setImageUri(result.uri)
        handleChange(name)
      }
    } catch (error) {
      console.log("Error reading image", error);
    }
  }
  
  useEffect(()=>{
    requestPermission();
  }, [])
  return (
    <>
    <View style={styles.container}>
    {imageUri && <Image source={{uri: imageUri}} style={styles.image} />}
    <TouchableWithoutFeedback onPress={selectImage}>
        <View style={styles.imageUploader}>
          <MaterialCommunityIcons name="camera" size={30} color={Colors.grey} />
        </View>
      </TouchableWithoutFeedback>
    </View>

    <AppErrorMessage error={errors[name]} visible={touched[name]} />
    
    </>
  );
}

const styles = StyleSheet.create({

    container: {
        flexDirection: "row",
        marginVertical: 20,
    },
    image:{
        width: 65,
        height: 68,
        marginRight:10,
        borderRadius: 20
    },
    imageUploader: {
    backgroundColor: Colors.light,
    borderRadius: 20,
    justifyContent: "center",
    width: "20%",
    padding: 20,
  },
});
export default AppFormCamera;
