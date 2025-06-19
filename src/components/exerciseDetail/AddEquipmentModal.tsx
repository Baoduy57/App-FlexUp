import React from "react";
import {
  View,
  Text,
  Modal,
  Pressable,
  TextInput,
  StyleSheet,
} from "react-native";
import { useTheme } from "../../context/ThemeContext";

interface Props {
  visible: boolean;
  onClose: () => void;
  onAdd: () => void;
  value: string;
  onChange: (text: string) => void;
}

export default function AddEquipmentModal({
  visible,
  onClose,
  onAdd,
  value,
  onChange,
}: Props) {
  const { theme, mode } = useTheme();
  const isDark = mode === "dark";

  return (
    <Modal visible={visible} transparent animationType="fade">
      <View style={styles.overlay}>
        <View style={[styles.box, { backgroundColor: theme.card }]}>
          <Text style={[styles.title, { color: theme.text }]}>
            Add Equipment
          </Text>
          <TextInput
            value={value}
            onChangeText={onChange}
            placeholder="Enter equipment"
            placeholderTextColor={isDark ? "#aaa" : "#666"}
            style={[
              styles.input,
              { color: theme.text, borderColor: theme.border },
            ]}
          />
          <View style={styles.buttons}>
            <Pressable onPress={onClose} style={{ marginRight: 16 }}>
              <Text style={{ color: "red" }}>Cancel</Text>
            </Pressable>
            <Pressable onPress={onAdd}>
              <Text style={{ color: theme.primary }}>Add</Text>
            </Pressable>
          </View>
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
  input: {
    borderWidth: 1,
    borderRadius: 8,
    padding: 8,
    width: "100%",
  },
  buttons: {
    flexDirection: "row",
    marginTop: 12,
  },
});
