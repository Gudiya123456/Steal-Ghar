import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import { perfectSize } from "./Login";
import { Image } from "expo-image";

const NotificationsContent = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.headings}>Notifications</Text>
      <View
        style={{ justifyContent: "flex-end", alignItems: "center", flex: 1 }}
      >
        <Image
          source={require("../assets/notification.png")}
          style={{ width: 200, height: 200, resizeMode: "cover" }}
        />
      </View>
      <View style={{ alignItems: "center", flex: 1 }}>
        <Text style={styles.headings}>You're missing out</Text>
        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
            marginTop: perfectSize(10),
          }}
        >
          <Text style={styles.content}>Signin to view personalised</Text>
          <Text style={[styles.content, { marginBottom: perfectSize(20) }]}>
            Notifications and offers
          </Text>
          <TouchableOpacity style={styles.signin}>
            <Text style={[styles.content, { color: "white" }]}>Signin</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default NotificationsContent;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    margin: perfectSize(10),
    padding: perfectSize(10),
  },
  headings: {
    fontFamily: "Montserrat_600SemiBold",
    fontSize: perfectSize(18),
    textAlign: "center",
  },
  image: {
    resizeMode: "cover",
    width: perfectSize(200),
    height: perfectSize(150),
    backgroundColor: "red",
  },
  content: {
    fontFamily: "Montserrat_500Medium",
    fontSize: perfectSize(14),
  },
  signin: {
    width: perfectSize(120),
    backgroundColor: "red",
    height: perfectSize(35),
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
  },
});
