import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from "react-native";
import React from "react";
import { perfectSize } from "./Login";
import {
  useFonts,
  Montserrat_500Medium,
  Montserrat_600SemiBold,
  Montserrat_800ExtraBold,
} from "@expo-google-fonts/montserrat";
import { Image } from "expo-image";
import { AntDesign } from "@expo/vector-icons";
const CategoryContent = ({ navigation }) => {
  let [fontsLoaded] = useFonts({
    Montserrat_500Medium,
    Montserrat_600SemiBold,
    Montserrat_800ExtraBold,
  });

  if (!fontsLoaded) {
    return null;
  }
  const Data = [
    {
      id: 1,
      image: require("../assets/slider.jpg"),
      name: "5mm",
      productscount: "1000 products",
    },
    {
      id: 2,
      image: require("../assets/8mm.jpg"),
      name: "8mm",
      productscount: "2000 products",
    },
    {
      id: 3,
      image: require("../assets/16mm.png"),
      name: "Category Name",
      productscount: "3000 products",
    },
    {
      id: 4,
      image: require("../assets/32mm.png"),
      name: "Category Name",
      productscount: "3000 products",
    },
    {
      id: 5,
      image: require("../assets/20mm.png"),
      name: "Category Name",
      productscount: "3000 products",
    },
    {
      id: 6,
      image: require("../assets/16mm.png"),
      name: "Category Name",
      productscount: "3000 products",
    },
    {
      id: 7,
      image: require("../assets/16mm.png"),
      name: "Category Name",
      productscount: "3000 products",
    },
  ];
  const apple = () => {
    console.log(123);
    alert(9);
    // navigation.navigate("SubCategory")
  };
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.container}>
        {/* <View style={styles.header}>
          <Text style={styles.header.text}>Shop By Category</Text>
        </View> */}
        {Data.map((items) => {
          return (
            <TouchableOpacity
              onPress={() => {
                navigation.navigate("SubCategory", { id: items.id });
              }}
              key={items.id}
            >
              <View style={styles.categorycontainer}>
                <View
                  style={{
                    width: perfectSize(90),
                    height: perfectSize(80),
                  }}
                >
                  <Image source={items.image} style={styles.image} />
                </View>
                <View style={styles.content}>
                  <Text
                    style={[
                      styles.content.text,
                      { fontFamily: "Montserrat_600SemiBold" },
                    ]}
                  >
                    {items.name}
                  </Text>
                  <Text
                    style={[
                      styles.content.text,
                      { fontSize: perfectSize(13), marginTop: perfectSize(7) },
                    ]}
                  >
                    {items.productscount}
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

export default CategoryContent;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: perfectSize(10),
  },
  header: {
    backgroundColor: "white",
    padding: perfectSize(12),

    borderRadius: 3,
    text: {
      fontFamily: "Montserrat_600SemiBold",
      fontSize: perfectSize(16),
    },
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
    marginTop: perfectSize(13),
    padding: perfectSize(10),
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
