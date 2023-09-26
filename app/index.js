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
} from "react-native";
import React, { useState } from "react";
import styles from "../shared/styles";
import { Link, useRouter } from "expo-router";

const index = () => {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Image
          source={require("../assets/Cover.png")}
          style={{
            height: 200,
            marginTop: 80,
          }}
          resizeMode="contain"
        />
      </View>
      <Text style={{ fontWeight: "bold", fontSize: 25, paddingVertical: 50 }}>
        Welcome
      </Text>
      <Text style={{ color: "#558" }}> Register your self to get a</Text>
      <Text style={{ color: "#558" }}> better experience of</Text>
      <Text style={{ color: "#558" }}> Food Ordering!</Text>

      <TouchableOpacity
        style={styles.squareBtn}
        activeOpacity={0.7}
        onPress={() => {
          router.push("/Register");
        }}
      >
        <Text style={{ color: "#EEE", fontWeight: "bold" }}>
          {" "}
          Create Account{" "}
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[
          styles.squareBtn,
          { backgroundColor: "#D1D5FA", marginTop: 15 },
        ]}
        activeOpacity={0.7}
        onPress={() => {
          router.push("/Login");
        }}
      >
        <Text style={{ color: "#6B3DB6", fontWeight: "bold" }}> Login </Text>
      </TouchableOpacity>

      <Text style={{ marginTop: 50, fontSize: 12 }}>
        By Logging in or Registering, you have agreed to the{" "}
      </Text>
      <Text style={{ fontSize: 12 }}>
        {" "}
        <Text style={textStyle.terms}>Terms and Conditions </Text>
        and <Text style={textStyle.terms}>Privacy Policy.</Text>
      </Text>
    </View>
  );
};

export default index;

const textStyle = StyleSheet.create({
  terms: {
    color: "#6B3DB6",
  },
});
