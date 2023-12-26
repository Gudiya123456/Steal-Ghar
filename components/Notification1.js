import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { perfectSize } from "./Login";
import { Ionicons } from "@expo/vector-icons";

const Notification1 = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Ionicons name="arrow-back" size={perfectSize(24)} color="black" />
        <View style={{ flex: 1, alignItems: "center" }}>
          <Text style={styles.text}> Notifications</Text>
        </View>
      </View>
      <View style={styles.secondContainer}>
        <View style={{ alignItems: "center" }}>
          <Text style={[styles.text, { marginBottom: perfectSize(12) }]}>
            No Notifications
          </Text>
          <Text style={[styles.content, { marginBottom: perfectSize(4) }]}>
            We will notify you once we have
          </Text>
          <Text style={styles.content}>something for you</Text>
          <View style={[styles.box, { backgroundColor: "pink" }]}>
            <View style={{ flexDirection: "row" }}>
              <Ionicons
                name="notifications-circle"
                size={perfectSize(50)}
                color="black"
              />
              <View style={{ flex: 1, justifyContent: "center" }}>
                <View
                  style={[styles.firstLine, { backgroundColor: "pink" }]}
                ></View>
                <View
                  style={[styles.secondLine, { backgroundColor: "pink" }]}
                ></View>
              </View>
            </View>
          </View>
          <View style={[styles.box, { backgroundColor: "skyblue" }]}>
            <View style={{ flexDirection: "row" }}>
              <Ionicons
                name="notifications-circle"
                size={perfectSize(50)}
                color="black"
              />
              <View style={{ flex: 1, justifyContent: "center" }}>
                <View
                  style={[styles.firstLine, { backgroundColor: "skyblue" }]}
                ></View>
                <View
                  style={[styles.secondLine, { backgroundColor: "skyblue" }]}
                ></View>
              </View>
            </View>
          </View>
          <View style={[styles.box, { backgroundColor: "orange" }]}>
            <View style={{ flexDirection: "row" }}>
              <Ionicons
                name="notifications-circle"
                size={perfectSize(50)}
                color="black"
              />
              <View style={{ flex: 1, justifyContent: "center" }}>
                <View
                  style={[styles.firstLine, { backgroundColor: "orange" }]}
                ></View>
                <View
                  style={[styles.secondLine, { backgroundColor: "orange" }]}
                ></View>
              </View>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Notification1;
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
  content: {
    fontFamily: "Montserrat_500Medium",
    fontSize: perfectSize(14),
  },
  secondContainer: {
    flex: 1,

    justifyContent: "center",
  },
  box: {
    marginTop: perfectSize(20),

    padding: perfectSize(10),
    borderRadius: 7,
    flexDirection: "row",
    alignItems: "center",
    opacity: 0.6,
    width: "70%",
  },
  firstLine: {
    height: perfectSize(13),
    width: "40%",

    opacity: 1,
  },
  secondLine: {
    marginTop: perfectSize(10),

    height: perfectSize(13),
    width: "80%",
  },
});
