import {
  View,
  Text,
  SafeAreaView,
  Pressable,
  ImageBackground,
  TextInput,
  Image,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  FlatList,
  ActivityIndicator,
} from "react-native";
import React, { useState } from "react";
import styles from "../../../shared/styles";
import { Link, useRouter } from "expo-router";
import Ionicons from "react-native-vector-icons/Ionicons";

import FoodCard from "../../../shared/FoodCard";

const recommendation = [
  "item1",
  "item2",
  "item3",
  "item4",
  "item5",
  "item6",
  "item7",
  "item8",
];

const beverages = [
  "item1",
  "item2",
  "item3",
  "item4",
  "item5",
  "item6",
  "item7",
  "item8",
];

const Home = () => {
  const router = useRouter();
  const isLoading = false;
  const error = false;

  const handleCardPress = (item) => {
    // Implement the desired behavior when a card is pressed
    console.log(`Card for ${item} was pressed.`);
    // You can perform any actions you want here
  };

  return (
    <View style={{ flex: 1, alignItems: "center", paddingVertical: 10 }}>
      <ScrollView>
        {/* Search Bar */}
        <View style={styles.searchContainer}>
          <View style={styles.searchWrapper}>
            <TextInput
              placeholder="Search"
              value=""
              onChange={() => {}}
              style={{ paddingLeft: 20, fontSize: 18 }}
            />
          </View>
          <View>
            <TouchableOpacity
              onPress={() => {
                console.log("search assaa pressed");
              }}
              style={styles.searchBtn}
            >
              <Ionicons
                name="search"
                size={30}
                //style={{ marginHorizontal: 10 }}
                color={"#fff"}
              />
            </TouchableOpacity>
          </View>
        </View>

        {/* Recommended for you */}
        <View style={homeStyles.container}>
          <View style={{ padding: 12, marginLeft: 5 }}>
            <Text style={{ fontWeight: "bold", fontSize: 17 }}>
              Recommended For You
            </Text>
            <Text>Select from your favourites</Text>
          </View>
          <View style={{ marginLeft: 110, flexDirection: "row" }}>
            <Text>See All</Text>
            <Ionicons name="chevron-forward-outline" size={20} />
          </View>
        </View>

        {/* Cards- rexommended food */}
        <View style={{ height: 270 }}>
          {isLoading ? (
            <ActivityIndicator size="large" color="#0000ff" />
          ) : error ? (
            <Text>Something went Wrong! ;/</Text>
          ) : (
            <FlatList
              horizontal
              data={recommendation}
              renderItem={({ item }) => (
                <FoodCard item={item} handleCardPress={handleCardPress} />
              )}
              keyExtractor={(item) => item?.food_id}
              contentContainerStyle={{ paddingHorizontal: 10, columnGap: 15 }}
            />
          )}
        </View>

        {/* Beverages*/}
        <View style={homeStyles.container}>
          <View style={{ padding: 12, marginLeft: 5 }}>
            <Text style={{ fontWeight: "bold", fontSize: 17 }}>
              Recommended For You
            </Text>
            <Text>Select from your favourites</Text>
          </View>
          <View style={{ marginLeft: 110, flexDirection: "row" }}>
            <Text>See All</Text>
            <Ionicons name="chevron-forward-outline" size={20} />
          </View>
        </View>

        {/* Cards- Beverages */}
        <View>
          {isLoading ? (
            <ActivityIndicator size="large" color="#0000ff" />
          ) : error ? (
            <Text>Something went Wrong! ;/</Text>
          ) : (
            <FlatList
              horizontal
              data={beverages}
              renderItem={({ item }) => (
                <FoodCard item={item} handleCardPress={handleCardPress} />
              )}
              keyExtractor={(item) => item?.beverage_id}
              contentContainerStyle={{ paddingHorizontal: 10, columnGap: 15 }}
            />
          )}
        </View>
      </ScrollView>
    </View>
  );
};

export default Home;

const homeStyles = StyleSheet.create({
  container: {
    flexDirection: "row",
    height: "auto",
    marginTop: 10,
    width: "100%",
    alignItems: "center",
  },
});
