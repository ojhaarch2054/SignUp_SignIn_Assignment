import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { FontAwesome } from "@expo/vector-icons";

const LoginView = () => {
  
  const forgotPw = () => {
    console.log("Forgot Password clicked");
  };

  const signUpPress = () => {
    console.log("You are redirecting to sign up...");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>
      <Text style={styles.signinText}>Please sign in to continue.</Text>

      <View style={styles.viewContainer}>
        <FontAwesome name="envelope" size={20} style={styles.icon} />
        <TextInput placeholder="Email" keyboardType="email-address" />
      </View>

      <View style={styles.viewContainer}>
        <FontAwesome name="lock" size={20} style={styles.icon} />

        <TextInput placeholder="Password" secureTextEntry={true} />
        <TouchableOpacity onPress={forgotPw}>
          <Text style={styles.forgotText}>FORGOT</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={styles.btn}>
        <FontAwesome
          name="arrow-right"
          size={20}
          style={styles.rightArrowIcon}
        />
        <Text style={styles.logInText}>LOGIN</Text>
      </TouchableOpacity>

      <View style={styles.logInContainer}>
        <Text>
          Don't have an account?
          <TouchableOpacity onPress={signUpPress}>
            <Text style={styles.logInStyle}> Sign Up</Text>
          </TouchableOpacity>
        </Text>
      </View>
    </View>
  );
};

export default LoginView;

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
    marginTop: 70,
  },
  signinText: {
    marginBottom: 80,
  },
  forgotText: {
    marginLeft: 140,
    color: "orange",
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
  logInText: {
    color: "white",
  },
  icon: {
    marginRight: 10,
    width: 16,
  },
  rightArrowIcon: {
    color: "white",
  },
  logInStyle: {
    color: "orange",
  },
  logInContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 330,
  },
});
