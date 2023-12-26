import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { perfectSize } from "./Login";
import { Feather } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { Image } from "expo-image";

const Navbar = ({ navigation }) => {
  return (
    <View style={style.nav}>
      <>
        <Text>
          <Feather
            name="menu"
            size={perfectSize(24)}
            color="black"
            onPress={() => navigation.openDrawer()}
          />
        </Text>
        <Image source={require("../assets/logo.png")} style={style.logo} />
      </>

      <View
        style={{ flexDirection: "row", flex: 1, justifyContent: "flex-end" }}
      >
        <Feather
          name="shopping-cart"
          size={perfectSize(24)}
          color="black"
          style={{ marginRight: perfectSize(15) }}
        />
        <View
          style={{
            position: "absolute",
            right: perfectSize(28),
            top: perfectSize(-10),
            backgroundColor: "red",
            borderRadius: perfectSize(18),
            height: perfectSize(20),
            minWidth: perfectSize(20),
            padding: perfectSize(3),
            lineHeight: perfectSize(16),
            color: "white",
            textAlign: "center",
          }}
        >
          <Text
            style={{
              fontSize: perfectSize(12),
              padding: perfectSize(3),
              lineHeight: perfectSize(10),
              color: "white",
              textAlign: "center",
            }}
          >
            0
          </Text>
        </View>

        <AntDesign name="hearto" size={perfectSize(24)} color="black" />
        <View
          style={{
            position: "absolute",
            right: perfectSize(-10),
            top: perfectSize(-10),
            backgroundColor: "red",
            borderRadius: perfectSize(18),
            height: perfectSize(20),
            minWidth: perfectSize(20),
            padding: perfectSize(3),
            lineHeight: perfectSize(16),
            color: "white",
            textAlign: "center",
          }}
        >
          <Text
            style={{
              fontSize: perfectSize(12),
              padding: 3,
              lineHeight: perfectSize(10),
              color: "white",
              textAlign: "center",
            }}
          >
            0
          </Text>
        </View>
      </View>
    </View>
  );
};

export default Navbar;
const style = StyleSheet.create({
  nav: {
    paddingVertical: perfectSize(10),
    paddingHorizontal: perfectSize(20),
    backgroundColor: "#fff",
    flexDirection: "row",
    shadowColor: "black",
  },
  logo: {
    marginLeft: perfectSize(10),
    width: perfectSize(200),
    resizeMode: "contentFit",
  },
});
