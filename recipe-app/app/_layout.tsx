import React, { useState } from "react";
import { StatusBar, View, ScrollView } from "react-native";
import AppNavigator from "./navigation/AppNavigator";

const App = () => {
 

  return (
    <>
      <StatusBar barStyle= "dark-content" backgroundColor= "white" />

      
        <AppNavigator />
      
    </>
  );
};

export default App;
