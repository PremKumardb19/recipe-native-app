import React from "react";
import { View, Text, Image, ScrollView, TouchableOpacity } from "react-native";
import { useRoute } from "@react-navigation/native";
import { FontAwesome, FontAwesome5 } from "@expo/vector-icons";
import styles from "./styles";
import {useEffect} from "react"
import useDataStore from "@/app/store/dataStore";

const Details = () => {
  const { item } = useRoute().params;
  const { count, setCount,increase, decrease,showMore,setShowMore } = useDataStore()
  useEffect(()=>{
       setShowMore(false)
       setCount(0)
  },[])
  const totalPrice = (parseInt(item.price.substring(1)) * count).toFixed(2);
  
  return (
    <ScrollView style={styles.container}>
     
      <Image source={item.image} style={styles.recipeImage} />

    
      <View style={styles.header}>
        <Text style={styles.title}>{item.title}</Text>
        <View style={styles.ratingRow}>
          <FontAwesome name="star" size={20} color="gold" />
          <Text style={styles.rating}>{item.rating}</Text>
        </View>
      </View>

     
      <View style={styles.row}>
        <Text style={styles.restaurant}>{item.restaurant}</Text>
        <View style={styles.tagsContainer}>
          <View style={styles.timeTag}>
            <FontAwesome5 name="clock" size={14} color="white" />
            <Text style={styles.timeText}>{item.time}</Text>
          </View>
          <View style={styles.discountTag}>
            <Text style={styles.discountText}>{item.discount}</Text>
          </View>
        </View>
      </View>

      
      <Text style={styles.description}>
        {showMore ? item.description : `${item.description.substring(0, 100)}...`}
      </Text>
      <TouchableOpacity onPress={() => setShowMore(!showMore)}>
        <Text style={styles.showMore}>{showMore ? "Show Less" : "Show More"}</Text>
      </TouchableOpacity>

     
      <View style={styles.orderContainer}>
        <Text style={styles.price}>{count > 0 ? `₹${totalPrice}` : `${item.price}.00`}</Text>
        <View style={styles.counterContainer}>
          {count > 0 && (
            <TouchableOpacity style={styles.counterButton} onPress={decrease}>
              <Text style={styles.counterText}>-</Text>
            </TouchableOpacity>
          )}
          <Text style={styles.count}>{count}</Text>
          <TouchableOpacity style={styles.counterButton} onPress={increase}>
            <Text style={styles.counterText}>+</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

export default Details;
