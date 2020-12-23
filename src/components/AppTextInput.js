import React from 'react';
import { StyleSheet, View , TextInput} from 'react-native';
import {MaterialCommunityIcons} from '@expo/vector-icons';

import Colors from '../config/colors';
import defaultStyles from  '../config/defaultStyles'

function AppTextInput({width ="100%", icon, placeholder, ...otherProps}) {
    return (
        <View style={[styles.container, {width: width}]}>
           {icon && <MaterialCommunityIcons  style={styles.icon} name={icon} size={25} />}
            <TextInput style={defaultStyles.text} placeholder={placeholder}  {...otherProps} />
            
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection:"row",
        backgroundColor: Colors.light,
        borderRadius: 20,
        padding: 10,
        marginVertical:20
    },
    textInput: {
       
    },
    icon: {
        paddingHorizontal: 10
    }
})

export default AppTextInput;