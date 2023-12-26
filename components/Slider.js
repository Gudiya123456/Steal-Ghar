import { View, Image, StyleSheet, Dimensions } from "react-native";

import { perfectSize } from "./Login";
import React, { useState } from "react";

import Carousel, { Pagination } from "react-native-snap-carousel";
export const { width } = Dimensions.get("window");

const ImageCarousel = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const data = [
    { id: 1, image: require("../assets/slider.jpg") },
    { id: 2, image: require("../assets/8mm.jpg") },
    { id: 3, image: require("../assets/20mm.png") },
    { id: 4, image: require("../assets/16mm.png") },

    // Add more images as needed
  ];

  const renderItem = ({ item }) => (
    <View style={styles.slide}>
      <Image source={item.image} style={styles.image} />
    </View>
  );

  return (
    <View>
      <Carousel
        data={data}
        renderItem={renderItem}
        sliderWidth={width}
        itemWidth={width}
        autoplay={true}
        autoplayDelay={5000}
        autoplayInterval={5000}
        onSnapToItem={(index) => setActiveSlide(index)}
        loop={true}
      />
      <Pagination
        dotsLength={data.length}
        activeDotIndex={activeSlide}
        containerStyle={{
          position: "absolute",
          bottom: 0,
          width: "100%",
        }}
        dotStyle={{
          width: 10,
          height: 10,
          borderRadius: 5,
          marginHorizontal: 5,
          backgroundColor: "white",
        }}
        inactiveDotStyle={
          {
            // Style for inactive dots
          }
        }
        inactiveDotOpacity={0.4}
        inactiveDotScale={0.6}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  slide: {
    marginTop: perfectSize(20),
    marginHorizontal: perfectSize(15),
    width: width - 26,
    height: 200, // Adjust as needed

    backgroundColor: "white",
    overflow: "hidden",
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    width: "auto",
  },
});

export default ImageCarousel;
