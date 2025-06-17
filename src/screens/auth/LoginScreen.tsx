import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { Feather, FontAwesome } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { RootStackParamList } from "../../config/types";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useTheme } from "../../context/ThemeContext";

export default function LoginScreen() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [secure, setSecure] = useState(true);

  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const { theme, mode } = useTheme();

  const handlePressLogin = () => {
    navigation.navigate("WelcomeBack");
  };

  const handlePressRegister = () => {
    navigation.navigate("Login");
  };

  return (
    <View style={[styles.container, { backgroundColor: theme.background }]}>
      <Text style={[styles.header, { color: theme.text }]}>Hey there,</Text>
      <Text style={[styles.title, { color: theme.text }]}>Welcome Back!</Text>

      {/* Email Input */}
      <View
        style={[
          styles.inputContainer,
          { backgroundColor: mode === "dark" ? "#222" : "#F2F2F2" },
        ]}
      >
        <FontAwesome
          name="envelope-o"
          size={20}
          color={mode === "dark" ? "#bbb" : "#999"}
          style={styles.icon}
        />
        <TextInput
          style={[styles.input, { color: theme.text }]}
          placeholder="Email"
          placeholderTextColor={mode === "dark" ? "#F2F2F2" : "#aaa"}
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
        />
      </View>

      {/* Password Input */}
      <View
        style={[
          styles.inputContainer,
          { backgroundColor: mode === "dark" ? "#222" : "#F2F2F2" },
        ]}
      >
        <FontAwesome
          name="lock"
          size={20}
          color={mode === "dark" ? "#bbb" : "#999"}
          style={styles.icon}
        />
        <TextInput
          style={[styles.input, { color: theme.text }]}
          placeholder="Password"
          placeholderTextColor={mode === "dark" ? "#F2F2F2" : "#aaa"}
          value={password}
          onChangeText={setPassword}
          secureTextEntry={secure}
        />
        <TouchableOpacity onPress={() => setSecure(!secure)}>
          <Feather
            name={secure ? "eye-off" : "eye"}
            size={20}
            color={mode === "dark" ? "#bbb" : "#999"}
            style={{ marginRight: 10 }}
          />
        </TouchableOpacity>
      </View>

      {/* Login Button */}
      <TouchableOpacity
        style={[styles.button, { backgroundColor: theme.primary }]}
        onPress={handlePressLogin}
      >
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>

      {/* OR Divider */}
      <View style={styles.divider}>
        <View
          style={[
            styles.line,
            { backgroundColor: mode === "dark" ? "#555" : "#ccc" },
          ]}
        />
        <Text
          style={[styles.or, { color: mode === "dark" ? "#F2F2F2" : "#888" }]}
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

      {/* Social Login */}
      <View style={styles.socialContainer}>
        <TouchableOpacity
          style={[
            styles.socialButton,
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
            styles.socialButton,
            {
              backgroundColor: theme.background,
              borderColor: mode === "dark" ? "#444" : "#ddd",
            },
          ]}
        >
          <FontAwesome name="facebook" size={24} color="#1877F2" />
        </TouchableOpacity>
      </View>

      {/* Register link */}
      <Text style={[styles.footer, { color: theme.text }]}>
        Don’t have an account?{" "}
        <Text
          style={[styles.link, { color: theme.primary }]}
          onPress={() => navigation.navigate("Register")}
        >
          Register
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
  header: {
    fontSize: 16,
    textAlign: "center",
  },
  title: {
    fontSize: 22,
    fontWeight: "700",
    marginBottom: 30,
    textAlign: "center",
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 14,
    paddingHorizontal: 16,
    marginBottom: 16,
  },
  icon: {
    marginRight: 8,
  },
  input: {
    flex: 1,
    height: 52,
    fontSize: 16,
  },
  button: {
    paddingVertical: 14,
    borderRadius: 28,
    alignItems: "center",
    marginTop: 10,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },
  divider: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 24,
  },
  line: {
    flex: 1,
    height: 1,
  },
  or: {
    marginHorizontal: 12,
    fontSize: 14,
  },
  socialContainer: {
    flexDirection: "row",
    justifyContent: "center",
    gap: 20,
  },
  socialButton: {
    width: 50,
    height: 50,
    borderRadius: 12,
    borderWidth: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  footer: {
    marginTop: 32,
    textAlign: "center",
    fontSize: 14,
  },
  link: {
    fontWeight: "600",
  },
});
