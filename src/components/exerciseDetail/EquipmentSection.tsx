import React from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  TouchableOpacity,
} from "react-native";

interface Props {
  equipments: { name: string; image: any }[];
  onAdd: () => void;
  theme: any;
  isDark: boolean;
}

export default function EquipmentSection({
  equipments,
  onAdd,
  theme,
  isDark,
}: Props) {
  return (
    <View style={styles.section}>
      <View style={styles.headerRow}>
        <Text style={[styles.sectionTitle, { color: theme.text }]}>
          You'll Need
        </Text>
        <TouchableOpacity onPress={onAdd}>
          <Text style={{ color: theme.primary, fontWeight: "bold" }}>
            + Add
          </Text>
        </TouchableOpacity>
      </View>
      <FlatList
        horizontal
        data={equipments}
        keyExtractor={(_, index) => index.toString()}
        renderItem={({ item }) => (
          <View
            style={[
              styles.card,
              { backgroundColor: isDark ? "#333" : "#f2f2f2" },
            ]}
          >
            <View style={styles.item}>
              <Image source={item.image} style={styles.image} />
              <Text style={[styles.name, { color: theme.text }]}>
                {item.name}
              </Text>
            </View>
          </View>
        )}
        showsHorizontalScrollIndicator={false}
        style={{ marginTop: 8 }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  section: {
    marginHorizontal: 16,
    marginTop: 16,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: "bold",
  },
  headerRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  card: {
    padding: 12,
    marginRight: 12,
    borderRadius: 12,
  },
  item: {
    alignItems: "center",
  },
  image: {
    width: 40,
    height: 40,
    marginBottom: 6,
    resizeMode: "contain",
  },
  name: {
    fontSize: 13,
    textAlign: "center",
  },
});
