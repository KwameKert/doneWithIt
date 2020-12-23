import React from 'react';
import  { StyleSheet, Image, View} from 'react-native';
import {MaterialCommunityIcons} from '@expo/vector-icons';

import Colors from '../config/colors';

function ImageScreen(props) {
    return (
        <View style={styles.container}>
            <View style={styles.closeTag}>
                <MaterialCommunityIcons name="close" color="white" size={30} />
            </View>
            <View style={styles.deleteTag}>
            <MaterialCommunityIcons name="trash-can-outline" color="white" size={30} />
            </View>
            <Image  
            resizeMode="contain"
            source={require('../../assets/chair.jpg')}
             style={styles.image } />

        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.black,
        flex:1
    },
    image: {
        width: '100%',
        height: '100%'
    }, 
    closeTag: {
       
        top: 40,
        left: 20,
        position: 'absolute'
    },
    deleteTag: {
        top: 40,
        right: 20,
        position: 'absolute'
    }
})

export default ImageScreen;