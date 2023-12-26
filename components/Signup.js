import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Image,
} from "react-native";
import React, { useState } from "react";
import {
  useFonts,
  Montserrat_500Medium,
  Montserrat_600SemiBold,
  Montserrat_800ExtraBold,
} from "@expo-google-fonts/montserrat";
import Checkbox from "expo-checkbox";
import { FontAwesome } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";

import { perfectSize } from "./Login";
import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";

const Signup = ({ navigation }) => {
  const [isChecked, setChecked] = useState(false);
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
      <View style={style.header}>
        <Image
          source={require("../assets/logowhite.png")}
          style={{ width: perfectSize(250), resizeMode: "contain" }}
        />
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
        <View
          style={{
            marginHorizontal: perfectSize(45),
            marginTop: perfectSize(20),
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <Checkbox
            style={{ color: "red" }}
            value={isChecked}
            onValueChange={setChecked}
            color={isChecked ? "red" : undefined}
          />
          <Text
            style={{
              marginLeft: perfectSize(5),
              fontFamily: "Montserrat_500Medium",
            }}
          >
            I Agree to Steel-Ghar Terms of use, privacy-policy and Refund terms
          </Text>
        </View>
        <View style={{ marginTop: perfectSize(55) }}>
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

export default Signup;
const style = StyleSheet.create({
  header: {
    flex: 1.5,

    justifyContent: "center",
    alignItems: "center",
  },

  inputContainer: {
    flex: 4,
    backgroundColor: "white",
    borderTopStartRadius: perfectSize(20),
    borderTopEndRadius: perfectSize(20),
  },
  inputfield: {
    flexDirection: "row",
    borderWidth: 1,
    borderRadius: perfectSize(10),
    marginHorizontal: perfectSize(40),
    marginVertical: perfectSize(5),
    height: perfectSize(55),
    alignItems: "center",
    padding: perfectSize(10),
    marginTop: perfectSize(25),
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
    marginTop: perfectSize(40),
    alignItems: "center",
  },
});
