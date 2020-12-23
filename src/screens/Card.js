import React from 'react';
import { View , StyleSheet, Text, Image} from 'react-native';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import colors from '../config/colors';

function  Card({title, subTitle, imageUrl, style, onPress}) {
    return (
        <TouchableWithoutFeedback onPress={onPress}>
        <View style={[styles.container, style]}>
            <Image source={{uri: imageUrl}}  style={styles.imageHolder} />
            <View style={styles.content}>
            <Text style={styles.header}>{title} </Text>
            <Text style={styles.price}>{subTitle} </Text>
            </View>
        
        </View>
        </TouchableWithoutFeedback>
    );
}


const styles = StyleSheet.create({
    container:{
        width:'100%',
        backgroundColor: colors.white,
        borderRadius: 15,
        marginVertical:10,
        overflow: "hidden"
    },
    imageHolder: {
        width: '100%',
        height: 200,
    },
    content:{
        padding: 20
    },
    header: {
        fontSize: 22,
        color: colors.black,
        fontWeight: "500",
    },  
    price: {
        fontSize: 17,
        color: colors.secondary,
        fontWeight:"bold"
    }
    
})
export default Card;