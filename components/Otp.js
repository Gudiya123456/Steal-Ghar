import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ImageBackground,
  Image,
} from "react-native";
import React from "react";
import {
  useFonts,
  Montserrat_500Medium,
  Montserrat_600SemiBold,
  Montserrat_800ExtraBold,
} from "@expo-google-fonts/montserrat";
import OTPTextInput from "react-native-otp-textinput";
import { perfectSize } from "./Login";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";

const Otp = ({navigation}) => {
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
        <Image
          source={require("../assets/logowhite.png")}
          style={{ width: perfectSize(250), resizeMode: "contain" }}
        />
      </View>

      <View style={style.inputContainer}>
        <View style={{ alignItems: "center", marginTop: perfectSize(50) }}>
          <Text
            style={{
              fontFamily: "Montserrat_600SemiBold",
              fontSize: perfectSize(20),
            }}
          >
            Enter OTP
          </Text>
          <View
            style={{
              marginHorizontal: perfectSize(50),
              marginTop: perfectSize(20),
            }}
          >
            <OTPTextInput tintColor="#fff" inputCount={4} style={style.otp} />
          </View>
          <View
            style={{
              marginTop: perfectSize(35),
              marginBottom: perfectSize(25),
            }}
          >
            <TouchableOpacity style={style.button}
            onPress={() => navigation.navigate("Home")}
            >

              <Text style={style.button.text}>SUBMIT</Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity>
            <Text
              style={{
                fontFamily: "Montserrat_600SemiBold",
                fontSize: perfectSize(18),
              }}
            >
              Resend OTP
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Otp;
const style = StyleSheet.create({
  header: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  inputContainer: {
    flex: 2,
    borderTopEndRadius: perfectSize(20),
    borderTopStartRadius: perfectSize(20),
    //backgroundColor: "#85dceb",
    backgroundColor: "white",
    padding: perfectSize(10),
  },

  button: {
    backgroundColor: "red",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 10,
    borderRadius: 10,
    flexDirection: "row",
    width: perfectSize(170),
    marginHorizontal: perfectSize(40),
    text: {
      color: "white",
      fontSize: perfectSize(16),
      fontFamily: "Montserrat_600SemiBold",
    },
  },
  otp: {
    backgroundColor: "#fff",
    borderColor: "#000",
    borderWidth: perfectSize(1),
    borderRadius: 10,
    height: perfectSize(55),
    width: perfectSize(55),
    borderBottomWidth: perfectSize(1),
    margin: perfectSize(15),
    textAlign: "center",
  },
});
