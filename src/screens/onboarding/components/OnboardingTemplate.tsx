// src/components/OnboardingTemplate.tsx
import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  Dimensions,
} from "react-native";
import { Feather } from "@expo/vector-icons";
import { useTheme } from "../../../context/ThemeContext";
// thêm dòng này

const { width, height } = Dimensions.get("window");

type Props = {
  title: string;
  description: string;
  image: any;
  onNext?: () => void;
  isLast?: boolean;
};

export default function OnboardingTemplate({
  title,
  description,
  image,
  onNext,
  isLast = false,
}: Props) {
  const { theme } = useTheme(); // dùng theme từ context

  return (
    <View style={[styles.container, { backgroundColor: theme.background }]}>
      <View style={[styles.topBackground, { backgroundColor: theme.primary }]}>
        <Image source={image} style={styles.image} />
      </View>
      <View style={styles.content}>
        <Text style={[styles.title, { color: theme.text }]}>{title}</Text>
        <Text style={[styles.description, { color: theme.text }]}>
          {description}
        </Text>
        {onNext && (
          <TouchableOpacity
            style={[
              styles.nextButton,
              { backgroundColor: theme.primary + "22" },
            ]}
            onPress={onNext}
          >
            <Feather
              name={isLast ? "check" : "arrow-right"}
              size={26}
              color={theme.primary}
            />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  topBackground: {
    height: height * 0.5,
    borderBottomLeftRadius: 80,
    borderBottomRightRadius: 80,
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    width: width * 0.6,
    height: height * 0.35,
    resizeMode: "contain",
  },
  content: {
    flex: 1,
    padding: 24,
    justifyContent: "space-between",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginTop: 32,
  },
  description: {
    fontSize: 16,
    textAlign: "center",
    marginTop: 16,
    lineHeight: 22,
  },
  nextButton: {
    alignSelf: "center",
    marginTop: 40,
    width: 60,
    height: 60,
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
  },
});
