import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Image,
} from "react-native";
import { useTheme } from "../../context/ThemeContext";
import { RootStackParamList } from "../../config/types";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useNavigation } from "@react-navigation/native";

interface Category {
  title: string;
  details: string;
  image: any;
}

export default function WorkoutCategories({
  categories: initialCategories,
}: {
  categories: Category[];
}) {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const { theme, mode } = useTheme();
  const isDark = mode === "dark";

  const [categories, setCategories] = useState(initialCategories);
  const [showForm, setShowForm] = useState(false);
  const [title, setTitle] = useState("");
  const [details, setDetails] = useState("");

  const handleAddCategory = () => {
    if (!title || !details) return;

    const newCategory: Category = {
      title,
      details,
      image: require("../../../assets/onboarding/onboard1.png"), // ảnh mặc định
    };

    setCategories([...categories, newCategory]);
    setTitle("");
    setDetails("");
    setShowForm(false);
  };

  const handlePressWorkoutDetail = (category: Category) => {
    navigation.navigate("WorkoutDetail", { category });
  };

  return (
    <View
      style={[
        styles.card,
        { backgroundColor: theme.card, shadowColor: theme.border },
      ]}
    >
      <View style={styles.headerRow}>
        <Text style={[styles.sectionTitle, { color: theme.text }]}>
          What Do You Want to Train
        </Text>
        <TouchableOpacity onPress={() => setShowForm(!showForm)}>
          <Text style={{ color: theme.primary, fontWeight: "bold" }}>
            + Add
          </Text>
        </TouchableOpacity>
      </View>

      {showForm && (
        <View style={styles.form}>
          <TextInput
            style={[
              styles.input,
              { color: theme.text, borderColor: theme.border },
            ]}
            placeholder="Workout title"
            placeholderTextColor={isDark ? "#888" : "#aaa"}
            value={title}
            onChangeText={setTitle}
          />
          <TextInput
            style={[
              styles.input,
              { color: theme.text, borderColor: theme.border },
            ]}
            placeholder="Details"
            placeholderTextColor={isDark ? "#888" : "#aaa"}
            value={details}
            onChangeText={setDetails}
          />
          <TouchableOpacity
            style={[styles.addButton, { backgroundColor: theme.primary }]}
            onPress={handleAddCategory}
          >
            <Text style={{ color: "#fff" }}>Add</Text>
          </TouchableOpacity>
        </View>
      )}

      {categories.map((c, i) => (
        <View
          key={i}
          style={[
            styles.categoryCard,
            { backgroundColor: isDark ? "#222" : "#eef1ff" },
          ]}
        >
          <View style={styles.row}>
            <View style={{ flex: 1 }}>
              <Text style={[styles.categoryTitle, { color: theme.text }]}>
                {c.title}
              </Text>
              <Text style={{ color: isDark ? "#aaa" : "#666" }}>
                {c.details}
              </Text>
              <TouchableOpacity
                style={[styles.viewMore, { backgroundColor: theme.primary }]}
                onPress={() => handlePressWorkoutDetail(c)} // ✅ truyền đúng category
              >
                <Text style={{ color: "#fff" }}>View more</Text>
              </TouchableOpacity>
            </View>
            <Image source={c.image} style={styles.image} resizeMode="cover" />
          </View>
        </View>
      ))}
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
  sectionTitle: {
    fontSize: 16,
    fontWeight: "bold",
  },
  headerRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 12,
  },
  categoryCard: {
    borderRadius: 16,
    padding: 16,
    marginTop: 12,
  },
  categoryTitle: {
    fontSize: 15,
    fontWeight: "600",
    marginBottom: 4,
  },
  viewMore: {
    alignSelf: "flex-start",
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 12,
    marginTop: 8,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 12,
    marginLeft: 12,
  },
  form: {
    marginBottom: 16,
  },
  input: {
    borderWidth: 1,
    borderRadius: 8,
    padding: 8,
    marginTop: 8,
  },
  addButton: {
    marginTop: 8,
    paddingVertical: 8,
    borderRadius: 8,
    alignItems: "center",
  },
});
