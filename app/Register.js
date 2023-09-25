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
  KeyboardAvoidingView,
} from "react-native";
import React, { useState } from "react";
import styles from "../shared/styles";
import { Link, useRouter } from "expo-router";
import Ionicons from "react-native-vector-icons/Ionicons";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const router = useRouter();

  return (
    <SafeAreaView
      style={[styles.container, { backgroundColor: "rgba(209,213,250,0.8)" }]}
    >
      <Text style={{ fontWeight: "bold", fontSize: 25, color: "#511989" }}>
        Create Account
      </Text>

      {/* <View style={styles.imageCircle}>
        <TouchableOpacity>
          <Image
            source={require("../assets/camera.png")}
            style={{ width: 40, opacity: 0.6 }}
            resizeMode="contain"
          />
        </TouchableOpacity>
      </View> */}

      <View style={[{ marginTop: 50 }]}>
        <TextInput
          placeholder="First Name"
          valur={password}
          onChangeText={(text) => setPassword(text)}
          placeholderTextColor="#676767"
          style={styles.textInput}
        />
        <TextInput
          placeholder="Last Name"
          valur={password}
          onChangeText={(text) => setPassword(text)}
          placeholderTextColor="#676767"
          style={styles.textInput}
        />
        <TextInput
          placeholder="Email"
          value={email}
          onChangeText={(text) => setEmail(text)}
          placeholderTextColor="#676767"
          style={styles.textInput}
        />
        <TextInput
          placeholder="Password"
          valur={password}
          onChangeText={(text) => setPassword(text)}
          placeholderTextColor="#676767"
          style={styles.textInput}
          secureTextEntry={true}
        />
      </View>

      <TouchableOpacity
        activeOpacity={0.7}
        onPress={() => {
          router.push("FaceRef");
        }}
      >
        <View style={[styles.squareBtn]}>
          <Text style={[styles.textButton, { color: "white" }]}>SUBMIT</Text>
        </View>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default Register;
