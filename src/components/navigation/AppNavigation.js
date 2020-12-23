import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import ListingEditScreen from "../../screens/ListingEditScreen";
import FeedNavigator from "./FeedNavigator";
import AccountNavigator from "./AccountNavigator";
import NewListingButton from "./NewListingButton";
import routes from "./routes";
const Tab = createBottomTabNavigator();
const AppNavigator = () => (
  <Tab.Navigator
  >
    <Tab.Screen
      name="Feeds"
      component={FeedNavigator}
      options={{
        tabBarIcon: ({ size, color }) => (
          <MaterialCommunityIcons name="home" color={color} size={size} />
        ),
      }}
    />
    <Tab.Screen
      options={({ navigation }) => ({
        tabBarButton: () => (
          <NewListingButton
            onPress={() => navigation.navigate(routes.LISTINGS)}
          />
        ),
      })}
      name="Post"
      component={ListingEditScreen}
    />
    <Tab.Screen
      options={{
        tabBarIcon: ({ size, color }) => (
          <MaterialCommunityIcons name="account" color={color} size={size} />
        ),
      }}
      name="Account"
      component={AccountNavigator}
    />
  </Tab.Navigator>
);

export default AppNavigator;
