import React from 'react';
import { StyleSheet, View } from 'react-native';
import colors from '../../config/colors';
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { TouchableOpacity, TouchableWithoutFeedback } from 'react-native-gesture-handler';

function NewListingButton({onPress}) {
    return (
       <View style={styles.container}>
        <TouchableOpacity onPress={onPress}>
           <MaterialCommunityIcons name="plus-circle" color={colors.white} size={40} />
       </TouchableOpacity>
       </View>
    );
}

const styles = StyleSheet.create({
    container:{
        alignItems: 'center',
        backgroundColor: colors.primary,
        borderColor: colors.white,
        borderWidth: 10,
        height: 80,
        width: 80,
        bottom: 25,
        justifyContent:'center',
        borderRadius: 40
    }
})

export default NewListingButton;