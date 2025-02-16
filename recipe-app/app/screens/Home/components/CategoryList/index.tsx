import React from "react";
import { ScrollView, Text, TouchableOpacity } from "react-native";
import styles from "./styles"

const categories = ["Breakfast", "Lunch", "Dinner", "Desserts"];

const CategoryList = () => {
  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.container}>
      {categories.map((category, index) => (
        <TouchableOpacity key={index} style={styles.button}>
          <Text style={styles.text}>{category}</Text>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
};

export default CategoryList;
