import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import { useTheme } from "../../context/ThemeContext";
import { useNavigation, useRoute } from "@react-navigation/native";
import { Video, ResizeMode } from "expo-av";
import { Ionicons } from "@expo/vector-icons"; // Cần cài: expo install @expo/vector-icons

export default function ExerciseDetail() {
  const { theme, mode } = useTheme();
  const isDark = mode === "dark";
  const navigation = useNavigation();
  const route = useRoute();
  const { exercise } = route.params as any;

  return (
    <SafeAreaView
      style={{ flex: 1, backgroundColor: theme.background, marginTop: 60 }}
    >
      <ScrollView style={{ flex: 1, backgroundColor: theme.background }}>
        {/* Video với nút X */}
        <View style={{ position: "relative" }}>
          <Video
            source={exercise.video}
            style={styles.video}
            useNativeControls
            resizeMode={ResizeMode.CONTAIN}
            isLooping
            shouldPlay
          />

          {/* Nút X */}
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            style={styles.closeButton}
          >
            <Ionicons name="close" size={28} color="#fff" />
          </TouchableOpacity>
        </View>

        {/* Nội dung */}
        <View style={{ padding: 16 }}>
          <View style={[styles.infoCard, { backgroundColor: theme.card }]}>
            <Text style={[styles.title, { color: theme.text }]}>
              {exercise.name}
            </Text>
            <Text style={[styles.subText, { color: isDark ? "#aaa" : "#777" }]}>
              {exercise.level} | {exercise.calories} Calories Burn
            </Text>
          </View>

          <View style={[styles.infoCard, { backgroundColor: theme.card }]}>
            <Text style={[styles.sectionTitle, { color: theme.text }]}>
              Descriptions
            </Text>
            <Text
              style={{
                color: isDark ? "#ccc" : "#555",
                marginBottom: 12,
                fontSize: 15,
              }}
            >
              {exercise.description}
            </Text>
          </View>

          <View style={[styles.infoCard, { backgroundColor: theme.card }]}>
            <Text style={[styles.sectionTitle, { color: theme.text }]}>
              How To Do It
            </Text>
            {exercise.steps.map(
              (step: { title: string; description: string }, index: number) => (
                <View key={index} style={styles.stepContainer}>
                  <View style={styles.stepIndicator}>
                    <Text style={[styles.stepNumber, { color: theme.primary }]}>
                      {String(index + 1).padStart(2, "0")}
                    </Text>
                    <View
                      style={[
                        styles.stepCircle,
                        { backgroundColor: theme.primary },
                      ]}
                    />
                    {index < exercise.steps.length - 1 && (
                      <View
                        style={[
                          styles.verticalLine,
                          { backgroundColor: theme.primary },
                        ]}
                      />
                    )}
                  </View>
                  <View style={{ flex: 1 }}>
                    <Text style={[styles.stepTitle, { color: theme.text }]}>
                      {step.title}
                    </Text>
                    <Text
                      style={[
                        styles.stepDesc,
                        { color: isDark ? "#ccc" : "#555" },
                      ]}
                    >
                      {step.description}
                    </Text>
                  </View>
                </View>
              )
            )}
          </View>
        </View>

        <TouchableOpacity
          style={[styles.button, { backgroundColor: theme.primary }]}
          onPress={() => navigation.goBack()}
        >
          <Text style={styles.buttonText}>Save</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  video: {
    width: "100%",
    height: 250, // 👈 tăng chiều cao lên
    backgroundColor: "#000",
    borderRadius: 40,
  },
  closeButton: {
    position: "absolute",
    top: 5,
    left: 15,
    backgroundColor: "rgba(0,0,0,0.5)",
    borderRadius: 24,
    padding: 4,
  },
  title: {
    fontSize: 23,
    fontWeight: "bold",
    marginTop: 8,
  },
  subText: {
    fontSize: 17,
    marginTop: 4,
    marginBottom: 16,
  },
  sectionTitle: {
    fontSize: 19,
    fontWeight: "bold",
    marginTop: 16,
    marginBottom: 8,
  },
  infoCard: {
    margin: 5,
    padding: 10,
    borderRadius: 13,
  },
  stepItem: {
    flexDirection: "row",
    marginBottom: 12,
    alignItems: "flex-start",
  },
  stepNumber: {
    marginRight: 12,
    fontWeight: "bold",
  },
  button: {
    margin: 16,
    padding: 16,
    borderRadius: 12,
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },
  stepContainer: {
    flexDirection: "row",
    marginBottom: 20,
  },
  stepIndicator: {
    alignItems: "center",
    marginRight: 12,
  },

  stepCircle: {
    width: 10,
    height: 10,
    borderRadius: 5,
    marginVertical: 4,
  },
  verticalLine: {
    width: 2,
    height: 40,
  },
  stepTitle: {
    fontSize: 17,
    fontWeight: "600",
    marginBottom: 4,
  },
  stepDesc: {
    fontSize: 14,
    lineHeight: 18,
  },
});
