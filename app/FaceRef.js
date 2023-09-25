import { View, Text, Button } from "react-native";
import React from "react";
import { Link, useRouter } from "expo-router";
import styles from "../shared/styles";

const FaceRef = () => {
  const router = useRouter();
  return (
    <View style={styles.container}>
      <Text>FaceRef</Text>
      <Text>Image added succesfully</Text>
      <Button
        onPress={() => {
          router.replace("/Home");
        }}
        title="Done"
      ></Button>
    </View>
  );
};

export default FaceRef;
