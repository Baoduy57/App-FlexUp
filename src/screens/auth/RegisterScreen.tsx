import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import { Feather, FontAwesome } from "@expo/vector-icons";
import { RootStackParamList } from "../../config/types";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useNavigation } from "@react-navigation/native";
import { useTheme } from "../../context/ThemeContext";

const { width } = Dimensions.get("window");

export default function RegisterScreen() {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const { theme, mode } = useTheme();

  const handlePressRegister = () => {
    navigation.navigate("InforUser");
  };

  const handlePressLogin = () => {
    navigation.navigate("Login");
  };

  const inputBg = mode === "dark" ? "#222" : "#F2F2F2";
  const iconColor = mode === "dark" ? "#bbb" : "#999";

  return (
    <View style={[styles.container, { backgroundColor: theme.background }]}>
      <Text style={[styles.welcome, { color: theme.text }]}>Hey there,</Text>
      <Text style={[styles.title, { color: theme.text }]}>
        Create an Account
      </Text>

      {/* Input fields */}
      <View style={[styles.inputBox, { backgroundColor: inputBg }]}>
        <Feather name="user" size={20} color={iconColor} />
        <TextInput
          placeholder="First Name"
          placeholderTextColor={mode === "dark" ? "#F2F2F2" : "#aaa"}
          style={[styles.input, { color: theme.text }]}
        />
      </View>
      <View style={[styles.inputBox, { backgroundColor: inputBg }]}>
        <Feather name="user" size={20} color={iconColor} />
        <TextInput
          placeholder="Last Name"
          placeholderTextColor={mode === "dark" ? "#F2F2F2" : "#aaa"}
          style={[styles.input, { color: theme.text }]}
        />
      </View>
      <View style={[styles.inputBox, { backgroundColor: inputBg }]}>
        <Feather name="mail" size={20} color={iconColor} />
        <TextInput
          placeholder="Email"
          keyboardType="email-address"
          placeholderTextColor={mode === "dark" ? "#F2F2F2" : "#aaa"}
          style={[styles.input, { color: theme.text }]}
        />
      </View>
      <View style={[styles.inputBox, { backgroundColor: inputBg }]}>
        <Feather name="lock" size={20} color={iconColor} />
        <TextInput
          placeholder="Password"
          secureTextEntry
          placeholderTextColor={mode === "dark" ? "#F2F2F2" : "#aaa"}
          style={[styles.input, { color: theme.text }]}
        />
        <Feather name="eye-off" size={20} color={iconColor} />
      </View>

      {/* Terms */}
      <View style={styles.checkboxRow}>
        <View style={[styles.checkbox, { borderColor: iconColor }]} />
        <Text style={[styles.terms, { color: theme.text }]}>
          By continuing you accept our{" "}
          <Text style={[styles.link, { color: theme.primary }]}>
            Privacy Policy
          </Text>{" "}
          and{" "}
          <Text style={[styles.link, { color: theme.primary }]}>
            Term of Use
          </Text>
        </Text>
      </View>

      {/* Register Button */}
      <TouchableOpacity
        style={[styles.registerBtn, { backgroundColor: theme.primary }]}
        onPress={handlePressRegister}
      >
        <Text style={styles.registerText}>Register</Text>
      </TouchableOpacity>

      {/* Divider */}
      <View style={styles.dividerRow}>
        <View
          style={[
            styles.line,
            { backgroundColor: mode === "dark" ? "#555" : "#ccc" },
          ]}
        />
        <Text
          style={[
            styles.orText,
            { color: mode === "dark" ? "#F2F2F2" : "#888" },
          ]}
        >
          Or
        </Text>
        <View
          style={[
            styles.line,
            { backgroundColor: mode === "dark" ? "#555" : "#ccc" },
          ]}
        />
      </View>

      {/* Social buttons */}
      <View style={styles.socialRow}>
        <TouchableOpacity
          style={[
            styles.socialBtn,
            {
              backgroundColor: theme.background,
              borderColor: mode === "dark" ? "#444" : "#ddd",
            },
          ]}
        >
          <FontAwesome name="google" size={24} color="#DB4437" />
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.socialBtn,
            {
              backgroundColor: theme.background,
              borderColor: mode === "dark" ? "#444" : "#ddd",
            },
          ]}
        >
          <FontAwesome name="facebook" size={24} color="#1877F2" />
        </TouchableOpacity>
      </View>

      {/* Login link */}
      <Text style={[styles.loginText, { color: theme.text }]}>
        Already have an account?{" "}
        <Text
          style={[styles.loginLink, { color: theme.primary }]}
          onPress={handlePressLogin}
        >
          Login
        </Text>
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    justifyContent: "center",
  },
  welcome: {
    textAlign: "center",
    fontSize: 16,
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 30,
  },
  inputBox: {
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 14,
    paddingHorizontal: 16,
    marginBottom: 16,
    height: 50,
  },
  input: {
    flex: 1,
    marginLeft: 10,
    fontSize: 15,
  },
  checkboxRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  checkbox: {
    width: 20,
    height: 20,
    borderWidth: 1,
    marginRight: 10,
    borderRadius: 4,
  },
  terms: {
    flex: 1,
    fontSize: 13,
  },
  link: {
    textDecorationLine: "underline",
  },
  registerBtn: {
    borderRadius: 30,
    paddingVertical: 14,
    alignItems: "center",
    marginTop: 10,
    shadowColor: "#7B61FF",
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.3,
    shadowRadius: 10,
    elevation: 5,
  },
  registerText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  dividerRow: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 20,
  },
  line: {
    flex: 1,
    height: 1,
  },
  orText: {
    marginHorizontal: 10,
  },
  socialRow: {
    flexDirection: "row",
    justifyContent: "center",
    gap: 16,
  },
  socialBtn: {
    width: 50,
    height: 50,
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    elevation: 2,
  },
  loginText: {
    textAlign: "center",
    marginTop: 30,
  },
  loginLink: {
    fontWeight: "bold",
  },
});
