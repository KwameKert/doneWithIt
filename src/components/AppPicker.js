import React, { useState } from 'react';
import { StyleSheet, View , TextInput, Text, Modal, Button, FlatList} from 'react-native';
import {MaterialCommunityIcons} from '@expo/vector-icons';

import Colors from '../config/colors';
import defaultStyles from  '../config/defaultStyles'
import AppText from './AppText';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import PickerItem from './PickerItem';


function AppPicker({placeholder, icon, items, selectedItem, onSelectItem, width='100%'}) {
    const [modalVisible, setModalVisible] = useState(false);
    return (
        <>
        <TouchableWithoutFeedback onPress={()=> setModalVisible(true)}>
        <View style={[styles.container, {width:width}]}>
        {icon && <MaterialCommunityIcons  style={styles.icon} name={icon} size={25} />}
        {selectedItem ? (
            <AppText style={styles.text}>{selectedItem.label}</AppText>
        ) : (
        <AppText style={styles.placeholder}>{placeholder}</AppText>
        )}
       

        <MaterialCommunityIcons name="chevron-down" size={25} />
         
         </View>
     </TouchableWithoutFeedback>
     <Modal visible={modalVisible} animationType={"fade"}>
        <Button title="Close" onPress={()=> setModalVisible(false)}/>
        <FlatList
        data={items}
        keyExtractor={item=>  item.value.toString()}
        renderItem={({item})=>
         <PickerItem 
          label={item.label} 
         onPress={()=>{
            onSelectItem(item)
            setModalVisible(false)
         }
           } 
      /> }/>
     </Modal>
     </>
    );
}


const styles = StyleSheet.create({
    container: {
        flexDirection:"row",
        backgroundColor: Colors.light,
        borderRadius: 20,
        width: '100%',
        padding: 10,
        marginVertical:20
    },
    text: {
       flex: 1,
       color: Colors.black
    },
    placeholder:{
        flex:1,
        color: 'grey'
    },  
    icon: {
        paddingHorizontal: 10
    }
})


export default AppPicker;