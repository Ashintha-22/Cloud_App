import { View, Text, TouchableOpacity, Image, StyleSheet } from "react-native";
import React from "react";
import styles from "./styles";

const FoodCard = ({ item, handleCardPress }) => {
  return (
    <View>
      <TouchableOpacity
        style={cardStyle.container(item)}
        onPress={() => handleCardPress(item)}
      >
        <View style={cardStyle.logoContainer(item)}>
          <Image
            style={cardStyle.logoImage}
            source={require("../assets/Cappucino.png")}
          />
        </View>
        <View style={cardStyle.textContainer}>
          <Text style={cardStyle.jobName(item)} numberOfLines={1}>
            {item}
          </Text>
          <Text style={{ color: "#999" }}>Price: Rs. 500</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default FoodCard;

const cardStyle = StyleSheet.create({
  card: {
    width: 150,
    height: 200,
    backgroundColor: "#fff",
    margin: 10,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  container: (item) => ({
    width: 200,
    //height: 250,
    padding: 5,
    backgroundColor: "#fff",
    borderRadius: 20,
    justifyContent: "space-between",
  }),
  logoContainer: (item) => ({
    width: 190,
    height: 190,
    backgroundColor: "#fff",
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  }),
  logoImage: {
    width: "90%",
    height: "90%",
    borderRadius: 12,
  },
  textContainer: {
    marginLeft: 3,
    padding: 10,
  },
  companyName: {
    color: "#B3AEC6",
    marginTop: 10 / 1.5,
  },
  infoContainer: {
    marginTop: 10,
  },
  jobName: (item) => ({
    color: "black",
    fontSize: 18,
  }),
  infoWrapper: {
    flexDirection: "row",
    marginTop: 5,
    justifyContent: "flex-start",
    alignItems: "center",
  },
  location: {
    color: "#B3AEC6",
  },
});
