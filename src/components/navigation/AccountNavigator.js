import React from 'react';
import {  createStackNavigator } from '@react-navigation/stack';

import AccountScreen from '../../screens/AccountScreen';
import Messages from '../../screens/MessageScreen';


const Stack = createStackNavigator();

const AccountNavigator = () => (
    <Stack.Navigator >
        <Stack.Screen name="Account" component={AccountScreen} />
        <Stack.Screen name="Messages" component={Messages} />
    </Stack.Navigator>
);


export default AccountNavigator;