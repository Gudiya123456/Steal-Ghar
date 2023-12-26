import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { perfectSize } from "./Login";
import {
  useFonts,
  Montserrat_500Medium,
  Montserrat_600SemiBold,
} from "@expo-google-fonts/montserrat";
const HomeCatogory = () => {
  let [fontsLoaded] = useFonts({
    Montserrat_500Medium,
    Montserrat_600SemiBold,
  });

  if (!fontsLoaded) {
    return null;
  }
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.text}>Home Free Delivery</Text>
      </View>
      <View style={styles.card}>
        <Text style={styles.text}>Easy Refund Policy</Text>
      </View>
      <View style={styles.card}>
        <Text style={styles.text}>Get Quality Certificate</Text>
      </View>
      <View
        style={{
          padding: 3,
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text style={styles.text}>Verified Suppliers</Text>
      </View>
    </View>
  );
};

export default HomeCatogory;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: "white",
    padding: perfectSize(8),
  },
  card: {
    flex: 1,
    borderRightWidth: 1,
    padding: perfectSize(4),
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: perfectSize(14),
    fontFamily: "Montserrat_500Medium",
    textAlign: "center",
  },
});
