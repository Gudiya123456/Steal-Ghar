import { SafeAreaView } from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home1 from "./Home1";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { NavigationContainer } from "@react-navigation/native";
import { FontAwesome } from "@expo/vector-icons";
import { StatusBar } from "expo-status-bar";
import Category from "./Category";
import Cart from "./Cart";
import { Ionicons } from "@expo/vector-icons";
import Account from "./Account";
import Navbar from "./Navbar";
import Notification from "./Notification";
import DrawerNavigation from "./DrawerNavigation";

const TabNavigation = () => {
  const tab = createBottomTabNavigator();
  return (
    <NavigationContainer independent={true}>
      {/* <SafeAreaView style={{ flex: 1 }}> */}
        <StatusBar style="dark" />
        {/* <Navbar /> */}
        <tab.Navigator>
          <tab.Screen
            name="Home1"
            component={Home1}
            options={{
              tabBarLabel: "Home1",
              headerShown: false,
              tabBarIcon: ({ color, size }) => (
                <MaterialCommunityIcons name="home" color={color} size={size} />
              ),
            }}
          />
          <tab.Screen
            name="Category"
            component={Category}
            options={{
              tabBarLabel: "Category",
              headerShown: false,
              tabBarIcon: ({ color, size }) => (
                <MaterialIcons name="category" size={size} color={color} />
              ),
            }}
          />
          <tab.Screen
            name="Notification"
            component={Notification}
            options={{
              tabBarLabel: "Notification",
              headerShown: false,
              tabBarIcon: ({ color, size }) => (
                <Ionicons
                  name="notifications-sharp"
                  size={size}
                  color={color}
                />
              ),
            }}
          />
          <tab.Screen
            name="Account"
            component={Account}
            options={{
              tabBarLabel: "Account",
              headerShown: false,
              tabBarIcon: ({ color, size }) => (
                <MaterialCommunityIcons
                  name="account"
                  size={size}
                  color={color}
                />
              ),
            }}
          />
        </tab.Navigator>
      {/* </SafeAreaView> */}
    </NavigationContainer>
  );
};

export default TabNavigation;
{
  /* <Tab.Screen
name="Feed"
component={Feed}
options={{
  tabBarLabel: 'Home',
  tabBarIcon: ({ color, size }) => (
    <MaterialCommunityIcons name="home" color={color} size={size} />
  ),
}}
/> */
}
