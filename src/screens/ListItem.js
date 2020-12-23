import React from 'react';
import {StyleSheet, Text, View, Image, TouchableHighlight} from 'react-native';
import Swipeable from 'react-native-gesture-handler/Swipeable';

import {MaterialCommunityIcons} from '@expo/vector-icons';

import colors from '../config/colors';
import AppText from '../components/AppText';


function ListItem({image, title, subTitle, onPress,iconComponent, renderRightActions}) {
    return (
        <Swipeable renderRightActions={renderRightActions}>
        <TouchableHighlight 
        underlayColor={colors.light}
        onPress={onPress}>
            <View style={styles.container}>
                        {iconComponent}
                        {image && <Image style={styles.image} source={image} />}
                        <View  style={styles.imageRating}>
                            <AppText  style={styles.header} numberOfLines={1}>{title}</AppText>
                            {subTitle && <AppText style={styles.price}  numberOfLines={1}>{subTitle}</AppText>}
                        </View>
                        <MaterialCommunityIcons name="chevron-right" size={25} color={colors.medium} style={styles.chevronLeft}/>
                    </View>
        </TouchableHighlight>
        </Swipeable>
      
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        paddingVertical: 10,
        padding: 20,
        backgroundColor: colors.white
    },
    header:{
        fontWeight:"bold"
    }, 
    image: {
        width: 50, 
        height: 50, 
        borderRadius: 50
    },
    imageRating: {
        flex:1,
        paddingLeft: 10,
        justifyContent: "center"
    },
    price: {
        color: colors.medium
    },
    chevronLeft:{
        alignSelf:"center"
    }
})

export default ListItem;