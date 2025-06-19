// src/screens/settings/SettingsScreen.tsx
import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Switch,
  SafeAreaView,
  StatusBar,
  TouchableOpacity,
} from "react-native";
import { useTheme } from "../../context/ThemeContext";
import { RootStackParamList } from "../../config/types";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useNavigation } from "@react-navigation/native";

export default function SettingsScreen() {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const { theme, mode, toggleTheme } = useTheme();

  const handlePressWelcome = () => {
    navigation.navigate("Welcome");
  };

  return (
    <SafeAreaView
      style={[styles.container, { backgroundColor: theme.background }]}
    >
      <StatusBar
        barStyle={mode === "dark" ? "light-content" : "dark-content"}
        backgroundColor={theme.background}
      />
      <Text style={[styles.title, { color: theme.text }]}>Settings</Text>

      <View style={styles.settingRow}>
        <Text style={[styles.label, { color: theme.text }]}>Dark Mode</Text>
        <Switch
          value={mode === "dark"}
          onValueChange={toggleTheme}
          trackColor={{ false: "#767577", true: "#81b0ff" }}
          thumbColor={mode === "dark" ? "#32CD32" : "#f4f3f4"}
        />
      </View>

      <TouchableOpacity
        style={[styles.viewMore, { backgroundColor: theme.primary }]}
        onPress={handlePressWelcome} // ✅ truyền đúng category
      >
        <Text style={{ color: "#fff" }}>Go Welcome</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 30,
  },
  settingRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
  label: {
    fontSize: 18,
  },
  viewMore: {
    alignSelf: "flex-start",
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 12,
    marginTop: 8,
  },
});
