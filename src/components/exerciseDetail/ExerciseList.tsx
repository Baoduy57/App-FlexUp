import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { useTheme } from "../../context/ThemeContext";

interface Props {
  exercises: {
    name: string;
    time: string;
    image: any;
    video: any;
    description: string;
    steps: { title: string; description: string }[];
  }[];
  navigation: any;
}

export default function ExerciseList({ exercises, navigation }: Props) {
  const { theme, mode } = useTheme();
  const isDark = mode === "dark";

  return (
    <View style={styles.section}>
      <Text style={[styles.title, { color: theme.text }]}>Exercises</Text>
      {exercises.map((ex, index) => (
        <TouchableOpacity
          key={index}
          onPress={() =>
            navigation.navigate("ExerciseDetail", { exercise: ex })
          }
          activeOpacity={0.8}
          style={[styles.item, { backgroundColor: isDark ? "#222" : "#fff" }]}
        >
          <Image source={ex.image} style={styles.image} />
          <View style={{ marginLeft: 12, flex: 1 }}>
            <Text style={[styles.name, { color: theme.text }]}>{ex.name}</Text>
            <Text style={{ color: isDark ? "#aaa" : "#666" }}>{ex.time}</Text>
          </View>
        </TouchableOpacity>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  section: {
    marginHorizontal: 16,
    marginTop: 16,
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
  },
  item: {
    flexDirection: "row",
    padding: 12,
    borderRadius: 12,
    marginTop: 12,
    alignItems: "center",
  },
  image: {
    width: 60,
    height: 60,
    borderRadius: 12,
  },
  name: {
    fontSize: 15,
    fontWeight: "600",
  },
});
