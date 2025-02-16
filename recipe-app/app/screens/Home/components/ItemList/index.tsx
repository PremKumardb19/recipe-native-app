import React from "react";
import { View, ScrollView, Image, Text } from "react-native";
import styles from "./styles";
import {items} from "../../../../data/index"


const ItemList = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Prem, What's on your mind?</Text>
        <View style={styles.hr} />
      </View>

      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.list}>
        {items.slice(0, 10).map((item, index) => (
          <View key={index} style={styles.item}>
            <Image source={item.image} style={styles.image} />
            <Text style={styles.text}>{item.name}</Text>
          </View>
        ))}
      </ScrollView>

      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.list}>
        {items.slice(10, 20).map((item, index) => (
          <View key={index} style={styles.item}>
            <Image source={item.image} style={styles.image} />
            <Text style={styles.text}>{item.name}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

export default ItemList;
