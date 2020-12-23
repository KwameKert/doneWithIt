import React from 'react';
import { View, StyleSheet} from 'react-native';

import {MaterialCommunityIcons} from '@expo/vector-icons';

function Icon({name, size = 40, backgroundColor = "#000", color="#fff"}) {
    return (
        <View style={{width:size, height: size, backgroundColor,color, justifyContent: 'center', alignItems: 'center', borderRadius: size/2}}>
            <MaterialCommunityIcons name={name} size={size*0.5 } color={color} />
        </View>
    );
}


const styles = StyleSheet.create({
    // iconStyle: {
    //     width: size /2
    // }
})

export default Icon;