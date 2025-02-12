import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { FontAwesome } from "@expo/vector-icons";

import React from "react";

const SignupView = () => {
  
    const signInPress = () => {
        console.log("redirecting to sign in page....")
    }
  return (
    <View style={styles.container}>
        <View style={styles.leftArrowContainer}>
      <FontAwesome name="arrow-left" size={20} style={styles.icon} />
      </View>
      <Text style={styles.title}>Create Account</Text>
      
      <View style={styles.viewContainer}>
        <FontAwesome name="user" size={20} style={styles.icon} />
        <TextInput placeholder="Full Name" />
      </View>

      <View style={styles.viewContainer}>
        <FontAwesome name="envelope" size={20} style={styles.icon} />
        <TextInput placeholder="Email" keyboardType="email-address" />
      </View>

      <View style={styles.viewContainer}>
        <FontAwesome name="lock" size={20} style={styles.icon} />

        <TextInput placeholder="Password" secureTextEntry={true} />
      </View>

      <View style={styles.viewContainer}>
        <FontAwesome name="lock" size={20} style={styles.icon} />
        <TextInput placeholder="Confirm Password" secureTextEntry={true} />
      </View>

      <TouchableOpacity style={styles.btn}>
        <FontAwesome
          name="arrow-right"
          size={20}
          style={styles.rightArrowIcon}
        />
        <Text style={styles.signupText}>Sign Up</Text>
      </TouchableOpacity>

      <View style={styles.signInContainer}>
        <Text>
          Already have an account?
          <TouchableOpacity onPress={signInPress}>
            <Text style={styles.signInStyle}> Sign In</Text>
          </TouchableOpacity>
        </Text>
      </View>
    </View>
  );
};

export default SignupView;

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  viewContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 15,
    paddingLeft: 10,
    padding: 5,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    marginTop:70,
  },
  btn: {
    borderRadius: 20,
    width: 90,
    height: 30,
    borderWidth: 1,
    borderColor: "gray",
    alignItems: "center",
    flex: 1,
    padding: 10,
    alignSelf: "flex-end",
    backgroundColor: "orange",
  },
  signupText: {
    color: "white",
  },
  icon: {
    marginRight: 10,
    width: 16
  },
  rightArrowIcon: {
    color: "white",
  },
  signInStyle: {
    color: "orange",
  },
  signInContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 330,
  },
  leftArrowContainer: {
    marginTop: 50
  }
});
