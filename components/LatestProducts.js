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
const LatestProducts = (props) => {
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
      <View style={styles.header}>
        <Text style={styles.container.text}>Latest Products</Text>
        <AntDesign name="rightcircle" size={perfectSize(18)} color="black" />
      </View>

      <View style={styles.cardcontainer}>
        {props.products.map((item) => {
          return (
            <View style={styles.cards} key={item.id}>
              <View style={{ height: perfectSize(143) }}>
                <Image source={{uri:`https://sourcefilesolutions.com/steelghar/console/public/storage/${item.product_image}`}}  style={styles.logo} />
              </View>

              <View style={{ flex: 1, marginVertical: perfectSize(12) }}>
                <Text style={styles.cards.text}>{item.product_name}</Text>
                <View style={styles.price}>
                  <Text
                    style={[
                      styles.cards.text,
                      { color: "green", fontSize: perfectSize(12) },
                    ]}
                  >
                    Starts From
                  </Text>
                  <Text style={[styles.cards.text]}>₹ 5500</Text>
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
