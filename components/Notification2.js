import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import { perfectSize } from "./Login";
import { Ionicons } from "@expo/vector-icons";
const Notification2 = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Ionicons name="arrow-back" size={perfectSize(24)} color="black" />
        <View style={{ flex: 1, alignItems: "center" }}>
          <Text style={styles.text}> Notifications</Text>
        </View>
      </View>
      <View style={styles.boxContainer}>
        <View style={styles.box}>
          <View style={styles.sidebox}></View>
          <View style={styles.content}>
            <Text style={styles.content.text}>Flat 10% OFF</Text>
            <Text style={styles.content.text}>Brand Name</Text>
            <TouchableOpacity style={styles.button}>
              <Text style={[styles.content.text, { color: "white" }]}>
                Shop Now
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.box}>
          <View style={styles.sidebox}></View>
          <View style={styles.content}>
            <Text style={styles.content.text}>Flat 10% OFF</Text>
            <Text style={styles.content.text}>Brand Name</Text>
            <TouchableOpacity style={styles.button}>
              <Text style={[styles.content.text, { color: "white" }]}>
                Shop Now
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Notification2;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: perfectSize(10),
    backgroundColor: "white",
    padding: perfectSize(10),
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
  },

  text: {
    fontFamily: "Montserrat_600SemiBold",
    fontSize: perfectSize(18),
  },
  boxContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  box: {
    shadowColor: "black",
    backgroundColor: "white",
    elevation: 5,
    shadowOffset: 1,
    flexDirection: "row",
    borderRadius: 5,
    marginVertical: perfectSize(10),
  },
  sidebox: {
    backgroundColor: "gray",
    width: perfectSize(50),
    height: "auto",
  },
  content: {
    flex: 1,
    marginLeft: perfectSize(10),
    justifyContent: "center",
    padding: perfectSize(5),
    text: {
      fontFamily: "Montserrat_600SemiBold",
      fontSize: perfectSize(14),
    },
  },
  button: {
    backgroundColor: "red",
    width: perfectSize(150),
    justifyContent: "center",
    alignItems: "center",
    height: perfectSize(28),
    borderRadius: 5,
    marginVertical: perfectSize(5),
  },
});
