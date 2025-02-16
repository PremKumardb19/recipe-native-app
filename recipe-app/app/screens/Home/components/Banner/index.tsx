import React from "react";
import { View, Image } from "react-native";
import styles from "./styles"

const Banner = () => {
  return (
    <View style={styles.container}>
      <Image source={require("../../../../assets/images/banner.jpg")} style={styles.image} />
    </View>
  );
};

export default Banner;
