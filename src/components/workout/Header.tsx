// src/components/workout/WorkoutHeader.tsx
import React from "react";
import { View, Text, StyleSheet, Dimensions } from "react-native";
import { LineChart } from "react-native-chart-kit";
import { useTheme } from "../../context/ThemeContext";

const screenWidth = Dimensions.get("window").width;

export default function Header() {
  const { theme, mode } = useTheme();
  const isDark = mode === "dark";

  const workoutData = {
    labels: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
    datasets: [
      {
        data: [20, 45, 28, 80, 99, 43, 50],
        strokeWidth: 2,
      },
    ],
  };

  const chartConfig = {
    backgroundGradientFrom: isDark ? "#111" : "#fff",
    backgroundGradientTo: isDark ? "#111" : "#fff",
    color: (opacity = 1) =>
      isDark ? `rgba(255,255,255,${opacity})` : `rgba(0,0,0,${opacity})`,
    labelColor: () => (isDark ? "#ccc" : "#333"),
    strokeWidth: 2,
    propsForDots: {
      r: "4",
      strokeWidth: "2",
      stroke: theme.primary,
    },
  };

  return (
    <View style={styles.container}>
      <Text style={[styles.title, { color: theme.text }]}>Workout Tracker</Text>
      <LineChart
        data={workoutData}
        width={screenWidth - 32}
        height={220}
        chartConfig={chartConfig}
        bezier
        style={styles.chart}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    paddingTop: 32,
    alignItems: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  chart: {
    borderRadius: 16,
    marginTop: 16,
  },
});
