import React, { useState, useEffect, useRef } from "react";
import { View, Image, Dimensions, FlatList } from "react-native";

const { width } = Dimensions.get("window");

const images = [
  require("../../../../assets/images/slider1.jpg"),
  require("../../../../assets/images/slider2.jpg"),
  require("../../../../assets/images/slider3.jpg"),
  require("../../../../assets/images/slider4.jpg"),
  require("../../../../assets/images/slider5.jpg"),
  require("../../../../assets/images/slider6.jpg"),
];

const ImageSlider = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const flatListRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => {
        const nextIndex = (prevIndex + 1) % images.length;
        flatListRef.current?.scrollToIndex({ index: nextIndex, animated: true });
        return nextIndex;
      });
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <View style={{ height: 200, width: "100%", alignItems: "center" }}>
      <FlatList
        ref={flatListRef}
        data={images}
        keyExtractor={(_, index) => index.toString()}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ height: 200 }} 
        onMomentumScrollEnd={(event) => {
          const index = Math.floor(event.nativeEvent.contentOffset.x / width);
          setActiveIndex(index);
        }}
        renderItem={({ item }) => (
          <Image
            source={item}
            style={{
              width: width,
              height: 200,
              resizeMode: "contain",
            }}
          />
        )}
      />
      <View style={{ flexDirection: "row", position: "absolute", bottom: 10 }}>
        {images.map((_, index) => (
          <View
            key={index}
            style={{
              width: 8,
              height: 8,
              borderRadius: 4,
              backgroundColor: activeIndex === index ? "orangered" : "gray",
              marginHorizontal: 3,
            }}
          />
        ))}
      </View>
    </View>
  );
};

export default ImageSlider;
