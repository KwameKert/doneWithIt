import React from 'react';
import { View, StyleSheet, Image, Text} from 'react-native';
import colors from '../config/colors';
import ListItem from './ListItem';

function ListDetailsScreen({route}) {
    const listing = route.params
    return (
        <View>
             <Image style={styles.imageHolder} source={{uri:listing.link}} /> 
            <Text style={styles.header}>{listing.name}</Text>
            <Text style={styles.price}>${listing.price}</Text>
            <ListItem  
            image={require("../../assets/mosh.jpg")}
            title="Kwame Asante"
            subTitle="5 Listings"
            />
        </View>
    );
}

const styles = StyleSheet.create({
        imageHolder: {
            width: '100%',
            height: 200
        },
        header: {
            fontSize: 23,
            fontWeight: "500",
            marginBottom: 5      
        },
        price: {
            color: colors.secondary,
            fontSize: 20,
            fontWeight: "bold"
        }

})

export default ListDetailsScreen;