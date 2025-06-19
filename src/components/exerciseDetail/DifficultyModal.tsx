import React from "react";
import { View, Text, Modal, Pressable, StyleSheet } from "react-native";
import { useTheme } from "../../context/ThemeContext";

interface Props {
  visible: boolean;
  selected: string;
  onSelect: (level: string) => void;
  onClose: () => void;
}

export default function DifficultyModal({
  visible,
  selected,
  onSelect,
  onClose,
}: Props) {
  const { theme } = useTheme();

  return (
    <Modal visible={visible} transparent animationType="fade">
      <View style={styles.overlay}>
        <View style={[styles.box, { backgroundColor: theme.card }]}>
          <Text style={[styles.title, { color: theme.text }]}>
            Choose Difficulty
          </Text>
          {["Beginner", "Intermediate", "Advanced"].map((level) => (
            <Pressable key={level} onPress={() => onSelect(level)}>
              <Text
                style={[
                  styles.option,
                  {
                    color: level === selected ? theme.primary : theme.text,
                    fontWeight: level === selected ? "bold" : "normal",
                  },
                ]}
              >
                {level}
              </Text>
            </Pressable>
          ))}
          <Pressable onPress={onClose}>
            <Text style={[styles.option, { color: "red" }]}>Cancel</Text>
          </Pressable>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.4)",
    justifyContent: "center",
    alignItems: "center",
  },
  box: {
    borderRadius: 16,
    padding: 20,
    width: "80%",
    alignItems: "center",
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 12,
  },
  option: {
    fontSize: 16,
    paddingVertical: 8,
  },
});
