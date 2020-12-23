import React, {useEffect} from 'react';
import { Alert, StyleSheet, View } from 'react-native';
import { MaterialCommunityIcons } from "@expo/vector-icons";
import * as ImagePicker from 'expo-image-picker';
import { Image } from 'react-native';

import Colors from '../config/colors';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';

function InputImage({imageUri, onChangeImage}) {

    const handlePress = () =>{
        if(!imageUri) {
            selectImage();
        }else {
            Alert.alert('Delete', 'Are you sure you want to delete this item', [
            {text: 'Yes', onPress:()=> onChangeImage(null)},
            {text: "No"}
        ])
    }
    }

    const requestPermission = async () =>{
        const {granted} = await ImagePicker.requestCameraPermissionsAsync();
        if(!granted){
          alert("You need to enable photo  access for this app");
        }
      };

      useEffect(()=>{
        requestPermission();
      }, [])

    const selectImage = async()=>{
        try {
          const result =  await ImagePicker.launchImageLibraryAsync({
              mediaTypes: ImagePicker.MediaTypeOptions.Images,
              quality: 0.5
          });
          if(!result.cancelled){
            onChangeImage(result.uri)
          }
        }catch (error) {
          console.log("Error reading image", error);
        }
      }

    return (
        <TouchableWithoutFeedback onPress={handlePress}>
        <View style={styles.container}>
            {!imageUri &&( <MaterialCommunityIcons name="camera" size={45} color={Colors.grey} />)}
            {imageUri && <Image source={{uri: imageUri}}  style={styles.image} />}
        </View>
        </TouchableWithoutFeedback>
    );
}


const styles = StyleSheet.create({
    container: {
        alignItems:'center',
        backgroundColor: Colors.light,
        borderRadius: 20,
        justifyContent: "center",
        width:'100%',
        padding: 20,
        overflow: "hidden"
      },
      image: {
          width: 45,
          height: 45
      }
})

export default InputImage;