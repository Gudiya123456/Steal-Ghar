import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import { perfectSize } from "./Login";
import {
  useFonts,
  Montserrat_500Medium,
  Montserrat_600SemiBold,
  Montserrat_800ExtraBold,
} from "@expo-google-fonts/montserrat";
import { Ionicons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
const AccountContent = () => {
  let [fontsLoaded] = useFonts({
    Montserrat_500Medium,
    Montserrat_600SemiBold,
    Montserrat_800ExtraBold,
  });

  if (!fontsLoaded) {
    return null;
  }
  return (
    <View style={styles.container}>
      <View style={styles.firstContainer}>
        <Text style={styles.headings}>Account</Text>
        <View style={styles.log}>
          <View style={{ flex: 1 }}>
            <Text style={styles.content}>Login To Get Exclusive Perks</Text>
          </View>
          <View>
            <TouchableOpacity style={styles.logbuttun}>
              <Text style={[styles.content, { color: "white" }]}>Login</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <View style={styles.secondContainer}>
        <Text style={styles.headings}>Account Settings </Text>
        <View style={styles.Notification}>
          <Ionicons
            name="notifications-outline"
            size={perfectSize(22)}
            color="black"
          />
          <Text style={styles.content}> Notification Settings</Text>
        </View>
        <View style={styles.Notification}>
          <Ionicons
            name="md-headset-outline"
            size={perfectSize(22)}
            color="black"
          />
          <Text style={styles.content}> Help Center</Text>
        </View>
      </View>
      <View style={styles.thirdContainer}>
        <Text style={styles.headings}>Earn With Steel Ghar</Text>
        <TouchableOpacity style={styles.signup}>
          <Text style={[styles.content, { color: "white" }]}>
            Signup as Fabricator
          </Text>
        </TouchableOpacity>
      </View>
      <View style={styles.fourthContainer}>
        <Text style={styles.headings}>Feedback / Information</Text>
        <View style={styles.Notification}>
          <MaterialCommunityIcons
            name="shield-lock-outline"
            size={perfectSize(22)}
            color="black"
          />
          <Text style={styles.content}> Terms , Policy and License</Text>
        </View>
        <View style={styles.Notification}>
          <FontAwesome
            name="question-circle-o"
            size={perfectSize(22)}
            color="black"
          />
          <Text style={styles.content}> FAQ's</Text>
        </View>
      </View>
    </View>
  );
};

export default AccountContent;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: perfectSize(10),
  },
  headings: {
    fontFamily: "Montserrat_600SemiBold",
    fontSize: perfectSize(16),
  },
  firstContainer: {
    backgroundColor: "white",
    padding: perfectSize(15),
    marginTop: perfectSize(10),
  },
  content: {
    fontFamily: "Montserrat_500Medium",
    fontSize: perfectSize(14),
  },
  log: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: perfectSize(5),
  },
  logbuttun: {
    backgroundColor: "red",
    width: perfectSize(90),
    justifyContent: "center",
    alignItems: "center",
    height: perfectSize(28),
    borderRadius: perfectSize(5),
  },
  secondContainer: {
    backgroundColor: "white",
    marginVertical: perfectSize(20),
    padding: perfectSize(15),
  },
  Notification: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: perfectSize(10),
  },
  thirdContainer: {
    backgroundColor: "white",
    padding: perfectSize(15),
  },
  signup: {
    backgroundColor: "red",
    width: perfectSize(180),
    justifyContent: "center",
    alignItems: "center",
    height: perfectSize(35),
    borderRadius: perfectSize(5),
    marginVertical: perfectSize(10),
  },
  fourthContainer: {
    backgroundColor: "white",
    marginVertical: perfectSize(20),
    padding: perfectSize(15),
  },
});
