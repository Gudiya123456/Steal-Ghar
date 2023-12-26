import { View, Text } from "react-native";
import React, { useState } from "react";
import { Feather } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { perfectSize } from "./Login";
const RightItems = ({ navigation }) => {
  const [cart, setCart] = useState();
  const [wishlist, setWishlist] = useState();
  return (
    <View style={{ flexDirection: "row", marginRight: perfectSize(22) }}>
      <Feather
        name="shopping-cart"
        size={perfectSize(24)}
        color="black"
        style={{ marginRight: perfectSize(15) }}
      />
      {cart && (
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
      )}
      <AntDesign
        name="hearto"
        size={perfectSize(24)}
        color="black"
        onPress={() => navigation.navigate("Wishlist")}
      />
      {wishlist && (
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
      )}
    </View>
  );
};

export default RightItems;
