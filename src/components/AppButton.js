import React from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';

import Colors from '../config/colors';


function AppButton({title, onPress, color = "primary"}) {
    return (
        <TouchableOpacity style={[styles.container, {backgroundColor: Colors[color] }]} onPress={onPress}>
            <Text style={styles.text}>{title}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.primary,
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        padding: 15,
        borderRadius: 25,
        marginVertical: 10
      
    },
    text: {
        color: Colors.white,
        fontSize: 20,
        fontWeight: 'bold',
        textTransform: "uppercase"
    }
})

export default AppButton;