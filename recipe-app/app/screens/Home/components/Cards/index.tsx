import React, { useState } from "react";
import { View, Text, Image, FlatList, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontAwesome, FontAwesome5 } from "@expo/vector-icons";
import styles from "./styles";
import {data} from "../../../../data/index";

const Card = ({ item }) => {
  const [liked, setLiked] = useState(false);
  const navigation = useNavigation();

  return (
    <TouchableOpacity 
      style={styles.card} 
      onPress={() => navigation.navigate("Details", { item })}
    >
      <Image source={item.image} style={styles.image} />

      <TouchableOpacity onPress={() => setLiked(!liked)} style={styles.heartIcon}>
        <FontAwesome name={liked ? "heart" : "heart-o"} size={28} color="red" />
      </TouchableOpacity>

      

      <View style={styles.discountTag}>
        <Text style={styles.discountText}>{item.discount}</Text>
      </View>

      <View style={styles.textContainer}>
        <View style={styles.titleRow}>
          <Text style={styles.title}>{item.title}</Text>
          <View style={styles.ratingRow}>
            <FontAwesome name="star" size={18} color="gold" />
            <Text style={styles.rating}>{item.rating}</Text>
          </View>
        </View>
        <Text style={styles.caption}>{item.caption}</Text>
        <Text style={styles.restaurant}>{item.restaurant}</Text>
      </View>

      <View style={styles.priceTag}>
        <Text style={styles.priceText}>{item.price}</Text>
      </View>
    </TouchableOpacity>
  );
};

const Cards = () => {
  const firstHalf = data.slice(0, 6);
  const secondHalf = data.slice(6, 12);

  return (
    <View>
      <FlatList
        data={firstHalf}
        keyExtractor={(item) => item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={[styles.list, { marginBottom: 20 }]}
        renderItem={({ item }) => <Card item={item} />}
      />

      <FlatList
        data={secondHalf}
        keyExtractor={(item) => item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={[styles.list, { marginBottom: 20 }]}
        renderItem={({ item }) => <Card item={item} />}
      />
    </View>
  );
};

export default Cards;
