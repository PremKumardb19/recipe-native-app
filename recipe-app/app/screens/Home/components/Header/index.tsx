import React, { useEffect, useState } from "react";
import { View, Text } from "react-native";
import * as Location from "expo-location";
import { MaterialIcons, Ionicons } from "@expo/vector-icons";
import styles from "./styles";

const Header = () => {
  const [location, setLocation] = useState("Fetching...");

  useEffect(() => {
    const fetchLocation = async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        setLocation("Permission Denied");
        return;
      }
      let loc = await Location.getCurrentPositionAsync({});
      let reverseGeocode = await Location.reverseGeocodeAsync(loc.coords);
      if (reverseGeocode.length > 0) {
        let { city, country } = reverseGeocode[0];
        setLocation(`${city}, ${country}`);
      }
    };
    fetchLocation();
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.left}>
        <MaterialIcons name="location-on" size={24} color="orangered" />
        <Text style={styles.text}>{location}</Text>
      </View>
      <Ionicons name="notifications-outline" size={24} color="black" />
    </View>
  );
};

export default Header;
