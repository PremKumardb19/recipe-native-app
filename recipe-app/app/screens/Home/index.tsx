import React from "react";
import { View, ScrollView } from "react-native";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import Banner from "./components/Banner/index";
import ItemList from "./components/ItemList";
import CategoryList from "./components/CategoryList/index";
import Cards from "./components/Cards/index";
import ImageSlider from "./components/ImageSlider/index"
import styles from "./styles";
const HomeScreen = () => {
  return (
    <ScrollView style={styles.container}>
      <Header />
      <SearchBar />
      <Banner />
      <ImageSlider/>
      <ItemList />
      <CategoryList />
      <Cards/>
    </ScrollView>
  );
};

export default HomeScreen;
