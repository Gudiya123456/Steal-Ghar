import { View, Text, StyleSheet, Image } from "react-native";
import React from "react";
import { perfectSize } from "./Login";
import {
  useFonts,
  Montserrat_500Medium,
  Montserrat_600SemiBold,
  Montserrat_800ExtraBold,
} from "@expo-google-fonts/montserrat";

import { AntDesign } from "@expo/vector-icons";
const LatestProducts = () => {
  let [fontsLoaded] = useFonts({
    Montserrat_500Medium,
    Montserrat_600SemiBold,
    Montserrat_800ExtraBold,
  });

  if (!fontsLoaded) {
    return null;
  }
  const data = [
    {
      id: 1,
      image: require("../assets/20mm.png"),
      name: "20mm_rebars",
      price: "56,876.00",
    },
    {
      id: 2,
      image: require("../assets/8mm.jpg"),
      name: "8mm_rebars ",
      price: "58,056.00",
    },
    {
      id: 3,
      image: require("../assets/16mm.png"),
      name: "16mm_rebars",
      price: "56,876.00",
    },
    {
      id: 4,
      image: require("../assets/32mm.png"),
      name: "32mm_rebars",
      price: "58,056.00",
    },
  ];
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.container.text}>Latest Products</Text>
        <AntDesign name="rightcircle" size={perfectSize(18)} color="black" />
      </View>

      <View style={styles.cardcontainer}>
        {data.map((item) => {
          return (
            <View style={styles.cards} key={item.id}>
              <View style={{ height: perfectSize(143) }}>
                <Image source={item.image} style={styles.logo} />
              </View>

              <View style={{ flex: 1, marginVertical: perfectSize(12) }}>
                <Text style={styles.cards.text}>{item.name}</Text>
                <View style={styles.price}>
                  <Text
                    style={[
                      styles.cards.text,
                      { color: "green", fontSize: perfectSize(12) },
                    ]}
                  >
                    Starts From
                  </Text>
                  <Text style={[styles.cards.text]}>₹ {item.price}</Text>
                </View>
              </View>
            </View>
          );
        })}
      </View>
    </View>
  );
};

export default LatestProducts;
const styles = StyleSheet.create({
  container: {
    marginVertical: perfectSize(10),
    backgroundColor: "#ffcccd",
    padding: perfectSize(10),

    text: {
      fontSize: perfectSize(16),
      fontFamily: "Montserrat_600SemiBold",
    },
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: perfectSize(5),
    marginHorizontal: perfectSize(5),
  },
  cardcontainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
  },
  cards: {
    padding: perfectSize(8),
    backgroundColor: "#fff",
    margin: perfectSize(5),
    width: "47.40%",
    borderRadius: 8,
    // height: perfectSize(250),
    // shadowColor: "dark",
    // shadowOpacity: 0.1,
    // elevation: 10,
    // shadowOffset: { width: 1, height: 1 },
    text: {
      fontFamily: "Montserrat_500Medium",
      fontSize: perfectSize(14),
      marginVertical: perfectSize(2),
    },
  },
  logo: {
    width: "auto",
    height: perfectSize(140),
    resizeMode: "cover",
  },
  price: {
    flexDirection: "row",
    justifyContent: "space-between",
    flex: 1,
  },
});
