import { View, Text } from "react-native";
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import CategoryContent from "./CategoryContent";
import SubCategory from "./SubCategory";
import Division from "./Division";
import SubDivision from "./SubDivision";
import Products from "./Products";
import {
  useFonts,
  Montserrat_500Medium,
  Montserrat_600SemiBold,
  Montserrat_800ExtraBold,
} from "@expo-google-fonts/montserrat";
const CategoryStackNavigation = () => {
  let [fontsLoaded] = useFonts({
    Montserrat_500Medium,
    Montserrat_600SemiBold,
    Montserrat_800ExtraBold,
  });

  if (!fontsLoaded) {
    return null;
  }
  const stack = createStackNavigator();
  return (
    <stack.Navigator>
      <stack.Screen
        name="Shop By Category"
        component={CategoryContent}
        options={{
          headerTitleStyle: {
            fontSize: 16,
            fontFamily: "Montserrat_600SemiBold",
          },
          headerTitleAlign: "center",
        }}
      />
      <stack.Screen
        name="SubCategory"
        component={SubCategory}
        options={{
          headerTitleStyle: {
            fontSize: 16,
            fontFamily: "Montserrat_600SemiBold",
          },
          headerTitleAlign: "center",
        }}
      />
      <stack.Screen
        name="Division"
        component={Division}
        options={{
          headerTitleStyle: {
            fontSize: 16,
            fontFamily: "Montserrat_600SemiBold",
          },
          headerTitleAlign: "center",
        }}
      />
      <stack.Screen
        name="Subdivision"
        component={SubDivision}
        options={{
          headerTitleStyle: {
            fontSize: 16,
            fontFamily: "Montserrat_600SemiBold",
          },
          headerTitleAlign: "center",
        }}
      />
      <stack.Screen
        name="Products"
        component={Products}
        options={{
          headerTitleStyle: {
            fontSize: 16,
            fontFamily: "Montserrat_600SemiBold",
          },
          headerTitleAlign: "center",
        }}
      />
    </stack.Navigator>
  );
};

export default CategoryStackNavigation;
