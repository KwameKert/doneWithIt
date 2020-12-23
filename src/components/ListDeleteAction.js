import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {MaterialCommunityIcons} from '@expo/vector-icons';

import colors from '../config/colors';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
function ListDeleteAction({onPress}) {
    return (
        <TouchableWithoutFeedback  onPress={onPress}>
            <View style={styles.container} >
                        <MaterialCommunityIcons 
                        name="trash-can" 
                        size={30} 
                        color={colors.white} 
                        />
                    </View>
        </TouchableWithoutFeedback>
       
    );
}

const styles = StyleSheet.create({
    container: {
        width: 70, 
        height: '100%',
        backgroundColor: colors.danger,
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export default ListDeleteAction;