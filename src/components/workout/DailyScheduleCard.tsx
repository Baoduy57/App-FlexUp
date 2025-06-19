// components/workout/DailyScheduleCard.tsx
import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { useTheme } from "../../context/ThemeContext";

export default function DailyScheduleCard() {
  const { theme } = useTheme();

  return (
    <View
      style={[
        styles.card,
        { backgroundColor: theme.card, shadowColor: theme.border },
      ]}
    >
      <View style={styles.row}>
        <Text style={[styles.sectionTitle, { color: theme.text }]}>
          Daily Workout Schedule
        </Text>
        <TouchableOpacity
          style={[styles.checkButton, { backgroundColor: theme.primary }]}
        >
          <Text style={{ color: "#fff" }}>Check</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    marginTop: 16,
    marginHorizontal: 16,
    padding: 16,
    borderRadius: 16,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  checkButton: {
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 8,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: "bold",
  },
});
