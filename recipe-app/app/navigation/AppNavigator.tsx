import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import Icon from "react-native-vector-icons/Ionicons";
import HomeScreen from "../screens/Home/index";
import DetailsScreen from "../screens/RecipeDetails/index";
import SearchScreen from "../screens/Search/index";
import CartScreen from "../screens/Cart/index";
import ProfileScreen from "../screens/Profile/index";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const HomeStack = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name="HomeMain" component={HomeScreen} />
    <Stack.Screen name="Details" component={DetailsScreen} options={{ headerShown: true, title: "Details" }}/>
  </Stack.Navigator>
);

const AppNavigator = () => {
  return (
    
      <Tab.Navigator
        screenOptions={({ route }) => ({
          headerShown: false,
          tabBarActiveTintColor: "orangered",
          tabBarInactiveTintColor: "gray",
          tabBarStyle: { backgroundColor: "white", height: 60 },
          tabBarShowLabel: false,
          tabBarIcon: ({ focused, color }) => {
            let iconName;
            let iconSize = 32;

            if (route.name === "Home") {
              iconName = focused ? "home" : "home-outline";
            } else if (route.name === "Search") {
              iconName = focused ? "search" : "search-outline";
            } else if (route.name === "Cart") {
              iconName = focused ? "cart" : "cart-outline";
            } else if (route.name === "Profile") {
              iconName = focused ? "person" : "person-outline";
            }

            return <Icon name={iconName} size={iconSize} color={color} />;
          },
        })}
      >
        <Tab.Screen name="Home" component={HomeStack} />
        <Tab.Screen name="Search" component={SearchScreen} />
        <Tab.Screen name="Cart" component={CartScreen} />
        <Tab.Screen name="Profile" component={ProfileScreen} />
      </Tab.Navigator>
   
  );
};

export default AppNavigator;
