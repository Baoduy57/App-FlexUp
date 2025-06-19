import React, { useState } from "react";
import { ScrollView, StyleSheet } from "react-native";
import { useTheme } from "../../context/ThemeContext";
import DailyScheduleCard from "../../components/workout/DailyScheduleCard";
import WorkoutCategories from "../../components/workout/WorkoutCategories";
import Header from "../../components/workout/Header";
import UpcomingWorkouts from "../../components/workout/UpcomingWorkouts";
import { Workout } from "../../config/types";

export default function WorkoutScreen() {
  const { theme } = useTheme();

  const [workouts, setWorkouts] = useState<Workout[]>([
    {
      title: "Fullbody Workout",
      time: "Today, 03:00pm",
      enabled: true,
    },
    {
      title: "Upperbody Workout",
      time: "June 05, 02:00pm",
      enabled: false,
    },
  ]);

  const categories = [
    {
      title: "Fullbody Workout",
      details: "11 Exercises | 32mins",
      image: require("../../../assets/categories/full.jpg"),
    },
    {
      title: "AB Workout",
      details: "12 Exercises | 24mins",
      image: require("../../../assets/categories/ABS.jpg"),
    },
    {
      title: "Upper Body Strength",
      details: "10 Exercises | 30mins",
      image: require("../../../assets/categories/Upper.webp"),
    },
    {
      title: "Lower Body Burn",
      details: "9 Exercises | 28mins",
      image: require("../../../assets/categories/Lower.jpg"),
    },
    {
      title: "Cardio Blast",
      details: "8 Exercises | 20mins",
      image: require("../../../assets/categories/Cardio.jpg"),
    },
    {
      title: "Stretch & Recovery",
      details: "6 Exercises | 15mins",
      image: require("../../../assets/categories/Stretch.jpg"),
    },
  ];

  const handleAddWorkout = (newWorkout: Workout) => {
    setWorkouts((prev) => [...prev, newWorkout]);
  };

  return (
    <ScrollView
      style={[styles.container, { backgroundColor: theme.background }]}
      showsVerticalScrollIndicator={false}
    >
      <Header />
      <DailyScheduleCard />
      <UpcomingWorkouts
        workouts={workouts}
        onCreateNewWorkout={handleAddWorkout}
      />
      <WorkoutCategories categories={categories} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
