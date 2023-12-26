import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  TextInput,
} from "react-native";
import React from "react";
import { perfectSize } from "./Login";
import { data } from "./Products";

const Grid = () => {
  return (
    // <ScrollView showsVerticalScrollIndicator={false}>
    <View style={styles.cardcontainer}>
      {data.map((item) => {
        return (
          <View style={styles.cards} key={item.id}>
            <View style={{ height: perfectSize(143) }}>
              <Image source={item.image} style={styles.logo} />
              <View style={styles.name}>
                <Text style={[styles.cards.text, { color: "white" }]}>
                  {item.name}
                </Text>
              </View>
            </View>
            <View style={styles.secondContainer}>
              <Text style={styles.cards.text}>Price Starts From</Text>
              <Text
                style={[
                  styles.cards.text,
                  { fontFamily: "Montserrat_600SemiBold" },
                ]}
              >
                ₹{item.price}
              </Text>
            </View>
            <View style={styles.thirdContainer}>
              <View style={styles.thirdContainer.box}>
                <TextInput
                  placeholder="Kgs"
                  style={styles.thirdContainer.input}
                  keyboardType="numeric"
                />
              </View>
              <View style={styles.thirdContainer.box}>
                <TextInput
                  placeholder="Pieces"
                  style={styles.thirdContainer.input}
                  keyboardType="numeric"
                />
              </View>
            </View>
          </View>
        );
      })}
    </View>
    // </ScrollView>
  );
};

export default Grid;
const styles = StyleSheet.create({
  cardcontainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    marginVertical: perfectSize(10),
    backgroundColor: "white",
  },
  cards: {
    // padding: perfectSize(8),
    backgroundColor: "#fff",
    margin: perfectSize(5),
    width: "47.40%",
    borderRadius: 2,
    // height: perfectSize(250),
    shadowColor: "dark",
    shadowOpacity: 0.1,
    elevation: 10,
    // shadowOffset: { width: 1, height: 0.5 },
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
  name: {
    position: "absolute",
    backgroundColor: "red",
    padding: perfectSize(perfectSize(5)),
    bottom: 10,
    flex: 1,
    alignSelf: "center",
    borderRadius: perfectSize(3),
  },
  price: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  secondContainer: {
    alignItems: "center",
  },
  thirdContainer: {
    flexDirection: "row",
    marginTop: perfectSize(10),
    text: {
      fontFamily: "Montserrat_500Medium",
      fontSize: perfectSize(14),
    },
    input: {
      fontFamily: "Montserrat_500Medium",
      fontSize: perfectSize(12),
      width: 80,
      flex: 1,
      textAlign: "center",
    },
    box: {
      flex: 1,
      alignItems: "center",
      borderWidth: 0.5,
      borderColor: "gray",
      padding: perfectSize(10),
      justifyContent: "center",
    },
  },
});
