import { View, Text } from "react-native";
import React from "react";
import Navbar from "./Navbar";

const Sample = ({ navigation }) => {
  return (
    <View>
      <Text onPress={() => navigation.openDrawer()}>Sample</Text>
    </View>
  );
};

export default Sample;
