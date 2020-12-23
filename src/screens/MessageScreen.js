import React, {useState} from 'react';
import {View, StyleSheet, SafeAreaView , Text, FlatList, Platform} from 'react-native'
import ListItem from './ListItem';

import Screen from '../components/Screen';
import ListItemSeparator from '../components/ListItemSeparator';
import ListDeleteAction from '../components/ListDeleteAction';



var array = [
    {
        id: 1,
        title: "T1",
        message: "D1",
        image: require('../../assets/mosh.jpg')
    },
    {
        id: 2,
        title: "T2",
        message: "D2",
        image: require('../../assets/mosh.jpg')
    },
    {
        id: 3,
        title: "T3",
        message: "D3",
        image: require('../../assets/mosh.jpg')
    },
    {
        id: 4,
        title: "T4",
        message: "D4",
        image: require('../../assets/mosh.jpg')
    },
];

function MessageScreen(props) {
    const [messages, setMessages ] = useState(array)
    const [refresh, setRefresh] = useState(false)

   const handleDelete = id =>{
         let newMessages = messages.filter(message => message.id != id)
         setMessages(newMessages)
    }
   
    return (
        <Screen >
            <FlatList
            data={messages}
            keyExtractor={(message)=> message.id.toString()}
            renderItem={({item})=>(
                <ListItem
                    title={item.title}
                    subTitle={item.message}
                    image={item.image}
                    
                    onPress={()=> console.log(item)}
                    renderRightActions={()=>(
                        <ListDeleteAction  onPress={()=> handleDelete(item.id)}/>
                    )}
                    />
            )}
            refreshing={refresh}
            onRefresh={()=>{
                setMessages([
                    {
                        id: 3,
                        title: "T3",
                        message: "D3",
                        image: require('../../assets/mosh.jpg')
                    }, 
                ])
            }}
            ItemSeparatorComponent={()=>(
                <ListItemSeparator />
            )}
            />
 
        </Screen>
    );
}


const styles = StyleSheet.create({
    container: {
        paddingTop: Platform.OS == "android" ? 40 : 0
    }
    
})

export default MessageScreen;