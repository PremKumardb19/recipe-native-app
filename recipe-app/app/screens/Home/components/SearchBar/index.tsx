import React from "react";
import { View } from "react-native";
import { Searchbar } from "react-native-paper";
import styles from "./styles";
import { useState } from "react";

const SearchBar = () => {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <View style={styles.container}>
      <Searchbar
        placeholder="Search for recipes..."
        value={searchQuery}
        onChangeText={setSearchQuery}
      />
    </View>
  );
};

export default SearchBar;
