import React from 'react';
import {  createStackNavigator } from '@react-navigation/stack';
import Listings from '../../screens/Listings';
import ListDetailsScreen from '../../screens/ListDetailsScreen';


const Stack = createStackNavigator();

const FeedNavigator = () => (
    <Stack.Navigator mode="modal">
        <Stack.Screen name="Feed" component={Listings} />
        <Stack.Screen name="FeedDetail" component={ListDetailsScreen} />
    </Stack.Navigator>
);


export default FeedNavigator;