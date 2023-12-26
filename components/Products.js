import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import { perfectSize } from "./Login";
import { Feather } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import {
  useFonts,
  Montserrat_500Medium,
  Montserrat_600SemiBold,
  Montserrat_800ExtraBold,
} from "@expo-google-fonts/montserrat";
// import { ScrollView } from "react-native-gesture-handler";
import Grid from "./Grid";
import ListView from "./ListView";

//https://steeloncall.com/tmt-bars
export const data = [
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
  {
    id: 5,
    image: require("../assets/32mm.png"),
    name: "32mm_rebars",
    price: "58,056.00",
  },
  {
    id: 6,
    image: require("../assets/32mm.png"),
    name: "32mm_rebars",
    price: "58,056.00",
  },
  {
    id: 7,
    image: require("../assets/32mm.png"),
    name: "32mm_rebars",
    price: "58,056.00",
  },
  {
    id: 8,
    image: require("../assets/32mm.png"),
    name: "32mm_rebars",
    price: "58,056.00",
  },
  {
    id: 9,
    image: require("../assets/32mm.png"),
    name: "32mm_rebars",
    price: "58,056.00",
  },
  {
    id: 10,
    image: require("../assets/32mm.png"),
    name: "32mm_rebars",
    price: "58,056.00",
  },
];
const Products = () => {
  const [grid, setGrid] = useState(true);

  let [fontsLoaded] = useFonts({
    Montserrat_500Medium,
    Montserrat_600SemiBold,
    Montserrat_800ExtraBold,
  });

  if (!fontsLoaded) {
    return null;
  }
  const setboxgrid = () => {
    setGrid(true);
  };
  const setboxlist = () => {
    setGrid(false);
  };
  return (
    <>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.container}>
          <View style={styles.gridContainer}>
            <View style={styles.buttons}>
              <View
                style={{
                  backgroundColor: grid ? "skyblue" : "white",
                }}
              >
                <Feather
                  name="grid"
                  size={perfectSize(24)}
                  color={grid ? "white" : "black"}
                  style={{
                    padding: perfectSize(10),
                  }}
                  onPress={() => setGrid(true)}
                />
              </View>
              <View
                style={{
                  backgroundColor: !grid ? "skyblue" : "white",
                }}
              >
                {/* <Feather
                name="menu"
                size={perfectSize(24)}
                color={grid ? "black" : "white"}
                style={{ padding: perfectSize(10) }}
                onPress={() => setGrid(false)}
              /> */}
                <MaterialIcons
                  name="table-rows"
                  size={perfectSize(24)}
                  color={grid ? "black" : "white"}
                  style={{ padding: perfectSize(10) }}
                  onPress={() => setGrid(false)}
                />
              </View>
            </View>
          </View>
          {grid ? <Grid /> : <ListView />}
          <View style={styles.note}>
            <View style={{ flex: 0.14 }}>
              <Text
                style={{
                  fontFamily: "Montserrat_600SemiBold",
                  fontSize: perfectSize(14),
                  color: "red",
                }}
              >
                Note :
              </Text>
            </View>
            <View style={{ flex: 1 }}>
              <Text style={styles.note.text}>
                1 . Material will shipped through nearest authorized
                distributor.
              </Text>
              <Text style={styles.note.text}>
                2 . Material will be shipped within 2-5 working days,unloading
                is customer's responsibility.
              </Text>
              <Text style={styles.note.text}>
                3 . The standard weight bridge tolerance "+/- 0.5%" is to be
                allowed and standard quantity variation (+/- 5%) is to be
                allowed.
              </Text>
              <Text style={styles.note.text}>
                4 . Test certificate will be provided for premium brands for
                above 1 MT.
              </Text>
            </View>
          </View>
          <View style={{ height: perfectSize(50) }}></View>
        </View>
      </ScrollView>
      <View style={styles.proceed}>
        <TouchableOpacity style={styles.proceed.button}>
          <Text style={styles.proceed.text}>Proceed</Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

export default Products;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginVertical: perfectSize(10),
    backgroundColor: "white",
    padding: perfectSize(10),
  },
  gridContainer: {
    flexDirection: "row",
    justifyContent: "flex-end",
    backgroundColor: "white",
  },
  buttons: {
    backgroundColor: "white",
    flexDirection: "row",
    width: "auto",

    marginBottom: perfectSize(10),
    shadowColor: "dark",
    shadowOpacity: 1,
    elevation: 10,
  },
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
    box: {
      flex: 1,
      alignItems: "center",
      borderWidth: 0.5,
      padding: perfectSize(10),
      justifyContent: "center",
    },
  },
  note: {
    flexDirection: "row",
    text: {
      fontFamily: "Montserrat_500Medium",
      fontSize: perfectSize(13),
    },
  },
  proceed: {
    position: "absolute",
    bottom: 20,
    alignSelf: "center",
    button: {
      backgroundColor: "red",
      width: perfectSize(130),
      height: perfectSize(40),
      justifyContent: "center",
      alignItems: "center",
      borderRadius: 5,
    },
    text: {
      color: "white",
      fontFamily: "Montserrat_500Medium",
      fontSize: perfectSize(16),
    },
  },
});
