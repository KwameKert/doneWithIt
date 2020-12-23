import React, {useRef} from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import InputImage from "./InputImage";

function InputImageList({ imageUris = [], onAddImage, onRemoveImage }) {
    const scrolRef = useRef();

  return (
    <View>
    <ScrollView horizontal ref={scrolRef} onContentSizeChange={()=> scrolRef.current.scrollToEnd()}>
     
        <View style={styles.container}>
          {imageUris.map((uri) => (
            <View key={uri} style={styles.image}>
              <InputImage
                imageUri={uri}
                onChangeImage={() => onRemoveImage(uri)}
              />
            </View>
          ))}
          <InputImage onChangeImage={(uri) => onAddImage(uri)} />
        </View>
     
    </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
  },
  image: {
    marginRight: 10,
  },
});

export default InputImageList;
