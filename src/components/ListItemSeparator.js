import React from 'react';
import {StyleSheet, View} from 'react-native';

import Colors from '../config/colors';

function ListItemSeparator(props) {
    return (
       <View style={styles.container} />
    );
}


const styles = StyleSheet.create({
        container:{
            width: '100%',
            height: 2,
            backgroundColor: Colors.light
        }
})

export default ListItemSeparator;