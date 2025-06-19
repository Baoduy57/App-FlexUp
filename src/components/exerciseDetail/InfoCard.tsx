import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { useTheme } from "../../context/ThemeContext";

interface Props {
  title: string;
  selectedTime: string;
  selectedDifficulty: string;
  onDatePress: () => void;
  onDifficultyPress: () => void;
}

export default function InfoCard({
  title,
  selectedTime,
  selectedDifficulty,
  onDatePress,
  onDifficultyPress,
}: Props) {
  const { theme, mode } = useTheme();
  const isDark = mode === "dark";

  return (
    <View style={[styles.card, { backgroundColor: theme.card }]}>
      <Text style={[styles.title, { color: theme.text }]}>{title}</Text>
      <Text style={{ color: isDark ? "#aaa" : "#666" }}>
        11 Exercises | 32 mins | 300 Calories Burn
      </Text>

      <TouchableOpacity onPress={onDatePress} activeOpacity={0.7}>
        <View
          style={[
            styles.item,
            { backgroundColor: isDark ? "#2f3e46" : "#e0ecff" },
          ]}
        >
          <View style={styles.row}>
            <Text style={styles.icon}>📅</Text>
            <Text style={[styles.label, { color: theme.text }]}>
              Schedule Workout
            </Text>
          </View>
          <Text style={[styles.value, { color: theme.text }]}>
            {selectedTime}
          </Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity onPress={onDifficultyPress} activeOpacity={0.7}>
        <View
          style={[
            styles.item,
            { backgroundColor: isDark ? "#3e2f46" : "#f5e1ff" },
          ]}
        >
          <View style={styles.row}>
            <Text style={styles.icon}>💪</Text>
            <Text style={[styles.label, { color: theme.text }]}>
              Difficulty
            </Text>
          </View>
          <Text style={[styles.value, { color: theme.text }]}>
            {selectedDifficulty}
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    margin: 16,
    padding: 16,
    borderRadius: 16,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
  },
  item: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 14,
    borderRadius: 16,
    marginTop: 12,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
  },
  icon: {
    fontSize: 18,
    marginRight: 10,
  },
  label: {
    fontSize: 14,
    fontWeight: "500",
  },
  value: {
    fontSize: 13,
    fontWeight: "600",
  },
});
