import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import { perfectSize } from "./Login";
import { Image } from "expo-image";
import { Ionicons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
const Wishlist = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View>
          <Ionicons
            name="arrow-back"
            size={perfectSize(24)}
            color="black"
            style={{ marginLeft: perfectSize(10) }}
          />
        </View>
        <View>
          <Text style={styles.text}>Wishlist</Text>
          <Text style={styles.text}>0 items</Text>
        </View>
        <View>
          <Feather
            name="shopping-cart"
            size={perfectSize(24)}
            color="black"
            style={{ marginRight: perfectSize(10) }}
            onPress={() => navigation.navigate("Cart")}
          />
        </View>
      </View>
      <View
        style={{ justifyContent: "flex-end", alignItems: "center", flex: 1 }}
      >
        <Image
          source={require("../assets/notification.png")}
          style={{ width: 200, height: 200, resizeMode: "cover" }}
        />
      </View>
      <View style={{ alignItems: "center", flex: 1 }}>
        <Text style={styles.headings}>Your wishlist is empty</Text>
        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
            marginTop: perfectSize(10),
          }}
        >
          <Text style={styles.content}>Add items to wishlist,</Text>
          <Text style={[styles.content, { marginBottom: perfectSize(20) }]}>
            Review item by time and easily move to cart
          </Text>
          <TouchableOpacity style={styles.signin}>
            <Text style={[styles.content, { color: "white" }]}>
              Continue Shopping
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Wishlist;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",

    padding: perfectSize(10),
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
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
    width: perfectSize(160),
    backgroundColor: "red",
    height: perfectSize(35),
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
  },
});
