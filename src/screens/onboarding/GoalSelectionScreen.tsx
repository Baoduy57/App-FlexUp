import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  useWindowDimensions,
  FlatList,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../config/types";
import { useTheme } from "../../context/ThemeContext";

const goals = [
  {
    id: "1",
    title: "Improve Shape",
    description:
      "I have a low amount of body fat and need / want to build more muscle",
    image: require("../../../assets/onboarding/onboard1.png"),
  },
  {
    id: "2",
    title: "Lean & Tone",
    description:
      "I'm 'skinny fat'. I look thin but have no shape. I want to add lean muscle in the right way",
    image: require("../../../assets/onboarding/onboard2.png"),
  },
  {
    id: "3",
    title: "Lose a Fat",
    description:
      "I have over 20 lbs to lose. I want to drop all this fat and gain muscle mass",
    image: require("../../../assets/onboarding/onboard2.png"),
  },
];

export default function GoalSelectionScreen() {
  const { width } = useWindowDimensions();
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const { theme } = useTheme();

  const [selectedId, setSelectedId] = useState<string | null>(null);

  const handleConfirm = () => {
    if (selectedId) {
      navigation.navigate("Login");
    }
  };

  return (
    <View style={[styles.container, { backgroundColor: theme.background }]}>
      <Text style={[styles.header, { color: theme.text }]}>
        What is your goal?
      </Text>
      <Text style={[styles.subText, { color: theme.text, opacity: 0.7 }]}>
        It will help us to choose a best program for you
      </Text>

      <FlatList
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        data={goals}
        keyExtractor={(item) => item.id}
        contentContainerStyle={{
          paddingVertical: 16,
          paddingHorizontal: 12,
        }}
        snapToAlignment="center"
        decelerationRate="fast"
        renderItem={({ item }) => {
          const isSelected = selectedId === item.id;

          return (
            <View style={{ width: width * 0.88, alignItems: "center" }}>
              <TouchableOpacity
                activeOpacity={0.9}
                style={[
                  styles.goalBox,
                  {
                    backgroundColor:
                      theme.background === "#FFFFFF" ? "#a696fa" : "#0b2608",
                    borderColor: isSelected ? theme.primary : "transparent",
                    borderWidth: 2,
                  },
                ]}
                onPress={() => setSelectedId(item.id)}
              >
                <Image
                  source={item.image}
                  style={styles.image}
                  resizeMode="contain"
                />
                <Text style={[styles.goalTitle, { color: theme.textcard }]}>
                  {item.title}
                </Text>
                <Text
                  style={[
                    styles.goalDesc,
                    { color: theme.textcard, opacity: 0.7 },
                  ]}
                >
                  {item.description}
                </Text>
              </TouchableOpacity>
            </View>
          );
        }}
      />

      <TouchableOpacity
        style={[
          styles.button,
          { backgroundColor: selectedId ? theme.primary : "#999" },
        ]}
        onPress={handleConfirm}
        disabled={!selectedId}
      >
        <Text style={styles.buttonText}>Confirm</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    justifyContent: "space-between",
    alignItems: "center",
  },
  header: {
    fontSize: 22,
    fontWeight: "bold",
    marginTop: 20,
    textAlign: "center",
  },
  subText: {
    fontSize: 14,
    textAlign: "center",
    maxWidth: 300,
    marginBottom: 8,
  },
  goalBox: {
    borderRadius: 20,
    padding: 20,
    alignItems: "center",
    marginHorizontal: 6,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  image: {
    width: 150,
    height: 150,
    marginBottom: 16,
  },
  goalTitle: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 8,
  },
  goalDesc: {
    fontSize: 13,
    textAlign: "center",
    maxWidth: 260,
  },
  button: {
    paddingVertical: 14,
    paddingHorizontal: 80,
    borderRadius: 30,
    marginBottom: 20,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 15,
  },
});
