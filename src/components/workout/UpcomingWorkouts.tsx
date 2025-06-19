import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Switch,
  TouchableOpacity,
  Modal,
  TextInput,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useTheme } from "../../context/ThemeContext";

type Workout = {
  title: string;
  time: string;
  enabled: boolean;
};

type Props = {
  workouts: Workout[];
  onCreateNewWorkout: (newWorkout: Workout) => void;
};

export default function UpcomingWorkouts({
  workouts,
  onCreateNewWorkout,
}: Props) {
  const { theme, mode } = useTheme();
  const isDark = mode === "dark";

  const [modalVisible, setModalVisible] = useState(false);
  const [newWorkout, setNewWorkout] = useState<Workout>({
    title: "",
    time: "",
    enabled: true,
  });

  const handleSave = () => {
    if (!newWorkout.title || !newWorkout.time) return;
    onCreateNewWorkout(newWorkout);
    setNewWorkout({ title: "", time: "", enabled: true });
    setModalVisible(false);
  };

  return (
    <View
      style={[
        styles.card,
        { backgroundColor: theme.card, shadowColor: theme.border },
      ]}
    >
      <View style={styles.row}>
        <Text style={[styles.sectionTitle, { color: theme.text }]}>
          Upcoming Workout
        </Text>
        <View style={{ flexDirection: "row", gap: 8 }}>
          <TouchableOpacity onPress={() => setModalVisible(true)}>
            <Ionicons
              name="add-circle-outline"
              size={22}
              color={theme.primary}
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={{ color: isDark ? "#aaa" : "#666" }}>See more</Text>
          </TouchableOpacity>
        </View>
      </View>

      {workouts.map((w, i) => (
        <View
          key={i}
          style={[
            styles.upcomingItem,
            { backgroundColor: isDark ? "#222" : "#f9f9f9" },
          ]}
        >
          <Ionicons name="fitness-outline" size={24} color={theme.primary} />
          <View style={{ flex: 1, marginLeft: 12 }}>
            <Text style={[styles.workoutTitle, { color: theme.text }]}>
              {w.title}
            </Text>
            <Text style={{ color: isDark ? "#aaa" : "#666" }}>{w.time}</Text>
          </View>
          <Switch value={w.enabled} />
        </View>
      ))}

      {/* Modal thêm lịch tập */}
      <Modal visible={modalVisible} animationType="slide" transparent>
        <View style={styles.modalWrapper}>
          <View
            style={[styles.modalContainer, { backgroundColor: theme.card }]}
          >
            <Text style={[styles.modalTitle, { color: theme.text }]}>
              Add New Workout
            </Text>

            <TextInput
              placeholder="Workout Title"
              placeholderTextColor={isDark ? "#888" : "#aaa"}
              value={newWorkout.title}
              onChangeText={(text) =>
                setNewWorkout((prev) => ({ ...prev, title: text }))
              }
              style={[
                styles.input,
                { color: theme.text, borderBottomColor: theme.border },
              ]}
            />

            <TextInput
              placeholder="Time (e.g. June 20, 3:00pm)"
              placeholderTextColor={isDark ? "#888" : "#aaa"}
              value={newWorkout.time}
              onChangeText={(text) =>
                setNewWorkout((prev) => ({ ...prev, time: text }))
              }
              style={[
                styles.input,
                { color: theme.text, borderBottomColor: theme.border },
              ]}
            />

            <View style={styles.switchRow}>
              <Text style={{ color: theme.text }}>Enable Notification</Text>
              <Switch
                value={newWorkout.enabled}
                onValueChange={(val) =>
                  setNewWorkout((prev) => ({ ...prev, enabled: val }))
                }
              />
            </View>

            <TouchableOpacity
              style={[styles.saveButton, { backgroundColor: theme.primary }]}
              onPress={handleSave}
            >
              <Text style={{ color: "#fff", textAlign: "center" }}>Save</Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => setModalVisible(false)}
              style={{ marginTop: 12 }}
            >
              <Text style={{ color: theme.text, textAlign: "center" }}>
                Cancel
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    marginTop: 16,
    marginHorizontal: 16,
    padding: 16,
    borderRadius: 16,
    backgroundColor: "#fff",
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: "bold",
  },
  upcomingItem: {
    flexDirection: "row",
    alignItems: "center",
    padding: 12,
    borderRadius: 12,
    marginTop: 12,
  },
  workoutTitle: {
    fontWeight: "bold",
    fontSize: 15,
  },
  modalWrapper: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.5)",
    justifyContent: "center",
    padding: 20,
  },
  modalContainer: {
    borderRadius: 20,
    padding: 20,
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 16,
  },
  input: {
    borderBottomWidth: 1,
    marginBottom: 16,
    paddingVertical: 4,
    fontSize: 16,
  },
  switchRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
  },
  saveButton: {
    padding: 12,
    borderRadius: 10,
  },
});
