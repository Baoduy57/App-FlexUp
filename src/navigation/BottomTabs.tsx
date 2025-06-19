import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import { useTheme } from "../context/ThemeContext";
import HomeScreen from "../screens/home/HomeScreen";
import WorkoutScreen from "../screens/home/WorkoutScreen";
import NutritionScreen from "../screens/home/NutritionScreen";
import ProgressScreen from "../screens/home/ProgressScreen";
import ProfileScreen from "../screens/home/ProfileScreen";
import SettingsScreen from "../screens/settings/SettingsScreen";

const Tab = createBottomTabNavigator();

export default function BottomTabs() {
  const { theme, mode } = useTheme();

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarStyle: {
          backgroundColor: theme.background,
          borderTopColor: mode === "dark" ? "#333" : "#ccc",
          paddingBottom: 6,
          paddingTop: 4,
          height: 60,
        },
        tabBarActiveTintColor: theme.primary,
        tabBarInactiveTintColor: mode === "dark" ? "#888" : "#666",
        tabBarIcon: ({ color, size }) => {
          let iconName: string;

          switch (route.name) {
            case "Home":
              iconName = "home-outline";
              break;
            case "Workout":
              iconName = "barbell-outline";
              break;
            case "Nutrition":
              iconName = "restaurant-outline";
              break;
            case "Progress":
              iconName = "stats-chart-outline";
              break;
            case "Profile":
              iconName = "person-outline";
              break;
            default:
              iconName = "ellipse";
          }

          return <Ionicons name={iconName as any} size={size} color={color} />;
        },
      })}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{ tabBarLabel: "Home" }}
      />
      <Tab.Screen
        name="Workout"
        component={WorkoutScreen}
        options={{ tabBarLabel: "Workout" }}
      />
      <Tab.Screen
        name="Nutrition"
        component={NutritionScreen}
        options={{ tabBarLabel: "Nutrition" }}
      />
      <Tab.Screen
        name="Progress"
        component={ProgressScreen}
        options={{ tabBarLabel: "Progrees" }}
      />
      <Tab.Screen
        name="Profile"
        component={SettingsScreen}
        options={{ tabBarLabel: "Profile" }}
      />
    </Tab.Navigator>
  );
}
