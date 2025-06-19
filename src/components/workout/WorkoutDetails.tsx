// WorkoutDetail.tsx
import React, { useState } from "react";
import {
  ScrollView,
  Image,
  TouchableOpacity,
  Platform,
  Text,
} from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import { useTheme } from "../../context/ThemeContext";
import { RootStackParamList } from "../../config/types";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import DateTimePicker from "@react-native-community/datetimepicker";
import InfoCard from "../exerciseDetail/InfoCard";
import EquipmentSection from "../exerciseDetail/EquipmentSection";
import ExerciseList from "../exerciseDetail/ExerciseList";
import AddEquipmentModal from "../exerciseDetail/AddEquipmentModal";
import DifficultyModal from "../exerciseDetail/DifficultyModal";

export default function WorkoutDetail() {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const { theme, mode } = useTheme();
  const isDark = mode === "dark";
  const route = useRoute();
  const { category } = route.params as any;

  const [equipments, setEquipments] = useState([
    { name: "Barbell", image: require("../../../assets/tool/tool1.png") },
    { name: "Jump Rope", image: require("../../../assets/tool/tool2.png") },
    { name: "Ropes", image: require("../../../assets/tool/tool3.png") },
  ]);
  const [showAddEquipment, setShowAddEquipment] = useState(false);
  const [newEquipment, setNewEquipment] = useState("");
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [workoutDate, setWorkoutDate] = useState(new Date());
  const [selectedTime, setSelectedTime] = useState("5/27, 09:00 AM");
  const [showDifficultyModal, setShowDifficultyModal] = useState(false);
  const [selectedDifficulty, setSelectedDifficulty] = useState("Beginner");

  const exercises = [
    {
      name: "Jumping Jack",
      time: "00:13",
      image: require("../../../assets/image/ngon6.png"),
      video: require("../../../assets/video/video1.mp4"),
      description:
        "Jumping Jack is a basic full-body workout that improves cardio and coordination.",
      steps: [
        {
          title: "Spread Your Arms",
          description: "To make the gestures feel more relaxed...",
        },
        {
          title: "Rest at The Toe",
          description: "The basis of this movement is jumping...",
        },
        {
          title: "Adjust Foot Movement",
          description: "Jumping Jack is not just an ordinary jump...",
        },
        {
          title: "Clapping Both Hands",
          description: "Clapping helps keep your rhythm...",
        },
      ],
    },
    {
      name: "Mountain Climbers",
      time: "00:30",
      image: require("../../../assets/exercise/exercise1.png"),
      video: require("../../../assets/video/video2.mp4"),
      description:
        "Mountain Climbers help strengthen your core while giving you a full-body cardio boost.",
      steps: [
        {
          title: "Plank Position",
          description: "Start in a high plank position, arms straight.",
        },
        {
          title: "Drive Knees",
          description: "Quickly drive one knee toward your chest and back.",
        },
        {
          title: "Alternate Legs",
          description: "Switch legs rapidly like you're running in place.",
        },
        {
          title: "Keep Back Straight",
          description: "Maintain a straight back to protect your spine.",
        },
      ],
    },
    {
      name: "Push-ups",
      time: "00:13",
      image: require("../../../assets/exercise/exercise2.png"),
      video: require("../../../assets/video/video3.mp4"),
      description:
        "Push-ups are a classic strength move that target chest, shoulders, and triceps.",
      steps: [
        {
          title: "Hands Shoulder-width Apart",
          description:
            "Place hands firmly on the ground, shoulder-width apart.",
        },
        {
          title: "Lower Your Body",
          description: "Bend your elbows to lower your chest down.",
        },
        {
          title: "Elbows at 45°",
          description: "Keep elbows angled to avoid shoulder strain.",
        },
        {
          title: "Push Back Up",
          description: "Return to start by straightening your arms.",
        },
      ],
    },
    {
      name: "Bodyweight Squats",
      time: "00:16",
      image: require("../../../assets/exercise/exercise3.png"),
      video: require("../../../assets/video/video4.mp4"),
      description:
        "Bodyweight squats are great for leg strength, balance, and mobility.",
      steps: [
        {
          title: "Feet Shoulder-width Apart",
          description: "Stand tall with feet aligned to shoulders.",
        },
        {
          title: "Lower Your Hips",
          description: "Push your hips back as if sitting into a chair.",
        },
        {
          title: "Keep Chest Up",
          description: "Maintain a lifted chest and straight back.",
        },
        {
          title: "Return to Start",
          description: "Drive through your heels to stand back up.",
        },
      ],
    },
  ];

  const handleAddEquipment = () => {
    if (newEquipment.trim()) {
      setEquipments([
        ...equipments,
        {
          name: newEquipment.trim(),
          image: require("../../../assets/tool/tool1.png"),
        },
      ]);
      setNewEquipment("");
      setShowAddEquipment(false);
    }
  };

  return (
    <ScrollView
      style={{ flex: 1, backgroundColor: theme.background }}
      contentContainerStyle={{ paddingBottom: 24 }}
    >
      <Image
        source={category.image}
        style={{
          width: "100%",
          height: 240,
          borderBottomLeftRadius: 32,
          borderBottomRightRadius: 32,
        }}
      />
      <InfoCard
        title={category.title}
        selectedTime={selectedTime}
        onDatePress={() => setShowDatePicker(true)}
        selectedDifficulty={selectedDifficulty}
        onDifficultyPress={() => setShowDifficultyModal(true)}
      />

      {showDatePicker && (
        <DateTimePicker
          value={workoutDate}
          mode="date"
          display="default"
          onChange={(event, selectedDate) => {
            // Ẩn DatePicker sau khi chọn trên Android
            if (Platform.OS === "android") {
              setShowDatePicker(false);
            }

            // Nếu người dùng không chọn gì (cancel), không làm gì cả
            if (!selectedDate) return;

            setWorkoutDate(selectedDate);

            const formatted =
              selectedDate.toLocaleDateString("en-GB") +
              ", " +
              selectedDate.toLocaleTimeString("en-US", {
                hour: "2-digit",
                minute: "2-digit",
              });

            setSelectedTime(formatted);

            // Giữ DatePicker nếu là iOS (nó không tự đóng như Android)
            setShowDatePicker(Platform.OS === "ios");
          }}
        />
      )}

      <EquipmentSection
        equipments={equipments}
        onAdd={() => setShowAddEquipment(true)}
        theme={theme}
        isDark={isDark}
      />

      <ExerciseList exercises={exercises} navigation={navigation} />

      <TouchableOpacity
        style={{
          marginTop: 24,
          marginHorizontal: 16,
          paddingVertical: 14,
          borderRadius: 16,
          alignItems: "center",
          backgroundColor: theme.primary,
        }}
      >
        <Text style={{ color: "#fff", fontWeight: "bold", fontSize: 16 }}>
          Start Workout
        </Text>
      </TouchableOpacity>

      <AddEquipmentModal
        visible={showAddEquipment}
        onClose={() => setShowAddEquipment(false)}
        onAdd={handleAddEquipment}
        value={newEquipment}
        onChange={setNewEquipment}
      />

      <DifficultyModal
        visible={showDifficultyModal}
        selected={selectedDifficulty}
        onSelect={(level) => {
          setSelectedDifficulty(level);
          setShowDifficultyModal(false);
        }}
        onClose={() => setShowDifficultyModal(false)}
      />
    </ScrollView>
  );
}
