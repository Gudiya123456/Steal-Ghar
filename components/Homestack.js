import { View, Text } from "react-native";
import React, { useState } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "./Home1";

import Wishlist from "./Wishlist";
import Cart from "./Cart";
const Homestack = () => {
  const stack = createStackNavigator();
  return (
    <stack.Navigator>
      <stack.Screen
        name="home"
        component={Home}
        options={{ headerShown: false }}
      />

      <stack.Screen
        name="Wishlist"
        component={Wishlist}
        options={{ headerShown: false }}
      />
      <stack.Screen name="Cart" component={Cart} />
    </stack.Navigator>
  );
};

export default Homestack;
