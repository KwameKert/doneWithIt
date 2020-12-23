import React from 'react';
import {StyleSheet, View, FlatList} from 'react-native';


import Screen from '../components/Screen';
import ListItem from './ListItem';
import Icon from '../components/Icon';
import Colors from '../config/colors';
import colors from '../config/colors';
import ListItemSeparator from '../components/ListItemSeparator';

var menuItems = [
    {
        title: 'My Listings',
        icon: {
            name: 'format-list-bulleted',
            backgroundColor: Colors.secondary
        }
    },
    {
        title: 'My Messages',
        icon: {
            name: 'email',
            backgroundColor: Colors.primary
        },
        targetScreen: 'Messages'
    }
]

function AccountScreen({navigation}) {
    return (
        <Screen style={styles.screen}>
            <View style={styles.container}> 
            <ListItem 
            title="Kwame Asante" 
            subTitle="kerticeasante@gmail.com"
            image={require("../../assets/kwame.jpg")}
            />
            </View>
         

            <View style={styles.container}>

            <FlatList 
                data={menuItems}
                keyExtractor={menuItem=>menuItem.title}
                ItemSeparatorComponent={ListItemSeparator}
                renderItem={ ({item})=>
                    <ListItem
                    onPress={()=> navigation.navigate(item.targetScreen)}
                    title={item.title}
                    iconComponent={
                        <Icon  name={item.icon.name} backgroundColor={item.icon.backgroundColor}/>
                    }
                    
                    />            
                }
            />
            </View>

            <ListItem
                    title="Log Out"
                    iconComponent={
                        <Icon  name="logout" backgroundColor="#ffe66d"/>
                    }
                    
                    /> 

        </Screen>
    );
}

const styles = StyleSheet.create({
    container: {
        marginVertical: 20,
         
    },
    screen:{
        backgroundColor:colors.light
    }

  
})

export default AccountScreen;