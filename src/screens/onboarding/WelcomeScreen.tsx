import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  Image,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { RootStackParamList } from "../../config/types";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useTheme } from "../../context/ThemeContext";

const { width, height } = Dimensions.get("window");

export default function WelcomeScreen() {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  const { theme, mode } = useTheme();

  const handlePress = () => {
    navigation.navigate("Onboarding");
  };

  return (
    <View style={[styles.container, { backgroundColor: theme.background }]}>
      {/* Logo Image */}
      <Image
        source={require("../../../assets/onboarding/logo3.png")} // Đường dẫn logo của bạn
        style={styles.logoImage}
        resizeMode="contain"
      />

      {/* Brand Text */}
      <View style={styles.logoContainer}>
        <Text style={[styles.logoText, { color: theme.text }]}>
          Flex
          <Text style={[styles.highlight, { color: theme.primary }]}>Up</Text>
        </Text>
        <Text
          style={[
            styles.subtitle,
            { color: mode === "dark" ? "#aaa" : "#666" },
          ]}
        >
          Everybody Can Train
        </Text>
      </View>

      {/* Get Started Button */}
      <TouchableOpacity
        style={[styles.button, { backgroundColor: theme.primary }]}
        onPress={handlePress}
      >
        <Text style={styles.buttonText}>Get Started</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: 80,
  },
  logoContainer: {
    alignItems: "center",
    marginBottom: 350, // Giảm xuống từ height * 0.2
  },
  logoText: {
    fontSize: 40,
    fontWeight: "bold",
  },
  highlight: {
    // color được override bằng theme.primary trong component
  },
  subtitle: {
    fontSize: 16,
    marginTop: 4, // Ít khoảng cách hơn giữa tiêu đề và mô tả
  },
  button: {
    paddingVertical: 16,
    paddingHorizontal: 60,
    borderRadius: 32,
    marginBottom: 60,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },
  logoImage: {
    width: 230, // to hơn
    height: 230,
    marginTop: 15, // tạo khoảng cách nhỏ với text bên dưới
  },
});
