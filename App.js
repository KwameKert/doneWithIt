import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import NavigationTheme from "./src/components/navigation/NavigationTheme";

import AppNavigator from './src/components/navigation/AppNavigation';



export default function App() {

  return (
    <NavigationContainer theme={NavigationTheme}>
      <AppNavigator/>
    </NavigationContainer>
  );
}
