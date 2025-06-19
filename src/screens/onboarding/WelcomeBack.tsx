import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  useColorScheme,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../config/types";
import { useTheme } from "../../context/ThemeContext";

export default function WelcomeScreen() {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const { theme } = useTheme();

  return (
    <View style={[styles.container, { backgroundColor: theme.background }]}>
      <Image
        source={require("../../../assets/image/ngon2.png")} // đổi đường dẫn phù hợp
        style={styles.image}
        resizeMode="contain"
      />

      <Text style={[styles.title, { color: theme.text }]}>Welcome, Kit</Text>
      <Text style={[styles.subtitle, { color: theme.text }]}>
        You are all set now, let’s reach your{"\n"}goals together with us
      </Text>

      <TouchableOpacity
        style={[styles.button, { backgroundColor: theme.primary }]}
        onPress={() => navigation.navigate("BottomTabs")} // hoặc màn bạn muốn
      >
        <Text style={styles.buttonText}>Go To Home</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    width: "90%",
    height: 300,
    marginBottom: 24,
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 14,
    textAlign: "center",
    marginBottom: 40,
  },
  button: {
    paddingVertical: 16,
    paddingHorizontal: 40,
    borderRadius: 32,
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.15,
    shadowRadius: 8,
    elevation: 3,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },
});
