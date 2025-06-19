// src/navigation/RootStack.tsx
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { RootStackParamList } from "../config/types";
import WelcomeScreen from "../screens/onboarding/WelcomeScreen";
import OnboardingFlow from "../screens/onboarding/OnboardingFlow";
import RegisterScreen from "../screens/auth/RegisterScreen";
import LoginScreen from "../screens/auth/LoginScreen";
import SettingsScreen from "../screens/settings/SettingsScreen";
import InforUserScreen from "../screens/onboarding/InforUserScreen";
import GoalSelectionScreen from "../screens/onboarding/GoalSelectionScreen";
import WelcomeBack from "../screens/onboarding/WelcomeBack";
import BottomTabs from "./BottomTabs";
import WorkoutDetail from "../components/workout/WorkoutDetails";
import ExerciseDetailScreen from "../screens/workout/ExerciseDetailScreen";

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function RootStack() {
  return (
    <Stack.Navigator
      initialRouteName="Welcome"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="Welcome" component={WelcomeScreen} />
      <Stack.Screen name="Onboarding" component={OnboardingFlow} />
      <Stack.Screen name="Register" component={RegisterScreen} />
      <Stack.Screen name="InforUser" component={InforUserScreen} />
      <Stack.Screen name="GoalSelection" component={GoalSelectionScreen} />
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="WelcomeBack" component={WelcomeBack} />
      <Stack.Screen name="BottomTabs" component={BottomTabs} />
      <Stack.Screen
        name="WorkoutDetail"
        component={WorkoutDetail}
        options={{ headerShown: true, title: "Workout Detail" }}
      />
      <Stack.Screen
        name="ExerciseDetail"
        component={ExerciseDetailScreen}
        options={{ headerShown: false }}
      />

      <Stack.Screen name="Settings" component={SettingsScreen} />
    </Stack.Navigator>
  );
}
