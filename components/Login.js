import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Image,
} from "react-native";
import React from "react";
import { create } from "react-native-pixel-perfect";
import {
  useFonts,
  Montserrat_500Medium,
  Montserrat_600SemiBold,
  Montserrat_800ExtraBold,
} from "@expo-google-fonts/montserrat";
import { FontAwesome } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";

import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
export const PerfectFixSize = {
  width: 414,
  height: 896,
};
const auth=true;

export const perfectSize = create(PerfectFixSize);
const Login = ({ navigation }) => {
  let [fontsLoaded] = useFonts({
    Montserrat_500Medium,
    Montserrat_600SemiBold,
    Montserrat_800ExtraBold,
  });

  if (!fontsLoaded) {
    return null;
  }

  if (!fontsLoaded) {
    return null;
  }
  const Auth=()=>{
  if(!auth)
  {
    navigation.navigate('OTP')
  }
  else{
    navigation.navigate("Home")
  }
}
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "red" }}>
      <StatusBar style="light" />
      <View style={style.header}>
        <Image
          source={require("../assets/logowhite.png")}
          style={{ width: perfectSize(250), resizeMode: "contain" }}
        />
      </View>
      <View style={style.inputContainer}>
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
        <View style={{ marginTop: perfectSize(35) }}>
          <TouchableOpacity
            style={style.button}
            onPress={() => Auth()}
          >
            <Text style={style.button.text}>Get OTP</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Login;
const style = StyleSheet.create({
  header: {
    flex: 1.5,
    justifyContent: "center",
    alignItems: "center",
  },

  inputContainer: {
    flex: 3,
    backgroundColor: "white",
    borderTopEndRadius: 20,
    borderTopStartRadius: 20,
    paddingTop: perfectSize(50),
  },
  inputfield: {
    marginTop: perfectSize(10),
    flexDirection: "row",
    borderWidth: 1,
    borderRadius: perfectSize(10),
    marginHorizontal: perfectSize(40),
    marginVertical: perfectSize(5),
    height: perfectSize(55),
    alignItems: "center",
    padding: perfectSize(10),
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
});
