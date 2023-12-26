import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Image,
} from "react-native";
import React from "react";
import {
  useFonts,
  Montserrat_500Medium,
  Montserrat_600SemiBold,
  Montserrat_800ExtraBold,
} from "@expo-google-fonts/montserrat";

import { FontAwesome } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { perfectSize } from "./Login";
import { Ionicons } from "@expo/vector-icons";

import { MaterialCommunityIcons } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
const FabricatorRegistrations = () => {
  let [fontsLoaded] = useFonts({
    Montserrat_500Medium,
    Montserrat_600SemiBold,
    Montserrat_800ExtraBold,
  });

  if (!fontsLoaded) {
    return null;
  }
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "red" }}>
      <StatusBar style="light" />
      <View style={style.header}>
        <View>
          <Image
            source={require("../assets/logowhite.png")}
            style={{ width: perfectSize(250), resizeMode: "contain" }}
          />
        </View>
      </View>
      <View>
        <Text
          style={{
            fontFamily: "Montserrat_500Medium",
            fontSize: perfectSize(20),
            color: "white",
            textAlign: "center",
            marginTop: perfectSize(-50),
          }}
        >
          Register for Fabricator
        </Text>
      </View>
      <View style={style.inputContainer}>
        <View style={style.inputfield}>
          <FontAwesome name="user-o" size={perfectSize(22)} color="black" />
          <TextInput
            style={style.input}
            placeholder="Enter Your Full Name"
            underlineColorAndroid="transparent"
          />
        </View>

        <View style={style.inputfield}>
          <MaterialCommunityIcons
            name="email-outline"
            size={perfectSize(22)}
            color="black"
          />
          <TextInput
            style={style.input}
            placeholder="Enter Your Email Address"
            underlineColorAndroid="transparent"
            inputMode="email"
          />
        </View>

        <View style={style.inputfield}>
          <Feather name="phone" size={perfectSize(22)} color="black" />
          <TextInput
            style={style.input}
            placeholder="Enter Your Phone Number"
            underlineColorAndroid="transparent"
            keyboardType="numeric"
            maxLength={10}
          />
        </View>

        <View style={style.inputfield}>
          <Entypo name="address" size={perfectSize(22)} color="black" />
          <TextInput
            style={style.input}
            placeholder="Enter Your Address 1"
            underlineColorAndroid="transparent"
          />
        </View>
        <View style={style.inputfield}>
          <Entypo name="address" size={perfectSize(22)} color="black" />
          <TextInput
            style={style.input}
            placeholder="Enter Your Address 2"
            underlineColorAndroid="transparent"
          />
        </View>

        <View style={style.inputfield}>
          <Ionicons
            name="location-outline"
            size={perfectSize(22)}
            color="black"
          />
          <TextInput
            style={style.input}
            placeholder="Enter Your PinCode"
            underlineColorAndroid="transparent"
            maxLength={6}
            keyboardType="numeric"
          />
        </View>
        <View style={{ marginTop: perfectSize(35) }}>
          <TouchableOpacity style={style.button}>
            <Text style={style.button.text}>Signup</Text>
          </TouchableOpacity>
        </View>

        <View style={style.footer}>
          <Text
            style={{
              fontFamily: "Montserrat_500Medium",
              fontSize: perfectSize(16),
            }}
          >
            Already Have an account ?
          </Text>
          <TouchableOpacity onPress={() => navigation.navigate("login")}>
            <Text
              style={{
                fontFamily: "Montserrat_600SemiBold",
                marginTop: perfectSize(10),
                fontSize: perfectSize(16),
              }}
            >
              Login
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default FabricatorRegistrations;
const style = StyleSheet.create({
  header: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  inputContainer: {
    flex: 4,
    borderTopEndRadius: perfectSize(20),
    borderTopStartRadius: perfectSize(20),
    backgroundColor: "white",
    justifyContent: "center",
  },
  inputfield: {
    flexDirection: "row",

    borderWidth: 1,
    borderRadius: perfectSize(10),
    marginHorizontal: perfectSize(40),
    marginVertical: perfectSize(1),
    height: perfectSize(55),
    alignItems: "center",
    padding: perfectSize(10),
    marginTop: perfectSize(25),
    text: {
      marginHorizontal: perfectSize(40),
      fontFamily: "Montserrat_600SemiBold",

      fontSize: perfectSize(16),
    },
  },
  input: {
    fontSize: perfectSize(16),
    fontFamily: "Montserrat_600SemiBold",
    flex: 1,
    paddingLeft: perfectSize(10),
  },
  button: {
    backgroundColor: "red",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 10,
    borderRadius: 10,
    flexDirection: "row",
    marginHorizontal: perfectSize(40),
    text: {
      color: "white",
      fontSize: perfectSize(16),
      fontFamily: "Montserrat_600SemiBold",
    },
  },

  footer: {
    flex: 0.7,
    justifyContent: "center",
    alignItems: "center",
    text: {},
  },
});
