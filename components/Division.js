import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import { perfectSize } from "./Login";
import { Image } from "expo-image";
import { AntDesign } from "@expo/vector-icons";

const DivisionContent = ({ route, navigation }) => {
  const id = route.params.id;

  const data = [
    {
      id: 1,
      category: 1,
      image: require("../assets/slider.jpg"),
      name: "Devision Name",
      productscount: "1000 products",
    },
    {
      id: 2,
      category: 2,
      image: require("../assets/8mm.jpg"),
      name: "Devision Name",
      productscount: "2000 products",
    },
    {
      id: 3,
      category: 1,
      image: require("../assets/16mm.png"),
      name: "Devision Name",
      productscount: "3000 products",
    },
    {
      id: 4,
      category: 3,
      image: require("../assets/32mm.png"),
      name: "Devision Name",
      productscount: "3000 products",
    },
    {
      id: 5,
      category: 5,
      image: require("../assets/20mm.png"),
      name: "Devision Name",
      productscount: "3000 products",
    },
    {
      id: 6,
      category: 2,
      image: require("../assets/16mm.png"),
      name: "Devision Name",
      productscount: "3000 products",
    },
    {
      id: 7,
      category: 2,
      image: require("../assets/16mm.png"),
      name: "Devision Name",
      productscount: "3000 products",
    },
    {
      id: 8,
      category: 1,
      image: require("../assets/16mm.png"),
      name: "Devision Name",
      productscount: "3000 products",
    },
    {
      id: 9,
      category: 2,
      image: require("../assets/16mm.png"),
      name: "Devision Name",
      productscount: "3000 products",
    },
    {
      id: 10,
      category: 1,
      image: require("../assets/16mm.png"),
      name: "Devision Name",
      productscount: "3000 products",
    },
  ];
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.container}>
        {data
          .filter((item) => item.category == id)
          .map((item) => {
            return (
              <TouchableOpacity
                onPress={() => navigation.navigate("Subdivision")}
                key={item.id}
              >
                <View style={styles.categorycontainer}>
                  <View
                    style={{
                      width: perfectSize(90),
                      height: perfectSize(80),
                    }}
                  >
                    <Image source={item.image} style={styles.image} />
                  </View>
                  <View style={styles.content}>
                    <Text
                      style={[
                        styles.content.text,
                        { fontFamily: "Montserrat_600SemiBold" },
                      ]}
                    >
                      {item.name}
                    </Text>
                    <Text
                      style={[
                        styles.content.text,
                        {
                          fontSize: perfectSize(13),
                          marginTop: perfectSize(7),
                        },
                      ]}
                    >
                      {item.productscount}
                    </Text>
                  </View>
                  <View style={{ flex: 1, alignItems: "flex-end" }}>
                    <AntDesign
                      name="rightcircle"
                      size={perfectSize(24)}
                      color="black"
                    />
                  </View>
                </View>
              </TouchableOpacity>
            );
          })}
      </View>
    </ScrollView>
  );
};

export default DivisionContent;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: perfectSize(10),
  },
  image: {
    resizeMode: "contentFit",
    width: "auto",
    height: perfectSize(80),
    borderRadius: 3,
  },
  categorycontainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    marginBottom: perfectSize(10),
    padding: perfectSize(8),
  },
  content: {
    flex: 1,
    marginLeft: perfectSize(20),
    text: {
      fontFamily: "Montserrat_500Medium",
      fontSize: perfectSize(15),
    },
  },
});
