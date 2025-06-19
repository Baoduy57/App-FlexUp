import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Platform,
  Dimensions,
  Image,
} from "react-native";
import { Picker } from "@react-native-picker/picker";
import DateTimePicker from "@react-native-community/datetimepicker";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../config/types";
import { useTheme } from "../../context/ThemeContext";
import { FontAwesome } from "@expo/vector-icons";

const { width } = Dimensions.get("window");

export default function InforUserScreen() {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const { theme, mode } = useTheme();
  const isDark = mode === "dark";

  const [gender, setGender] = useState("male");
  const [birthDate, setBirthDate] = useState(new Date());
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [showDatePicker, setShowDatePicker] = useState(false);

  const onNext = () => {
    navigation.navigate("GoalSelection");
  };

  return (
    <View style={[styles.container, { backgroundColor: theme.background }]}>
      {/* IMAGE */}
      <Image
        source={require("../../../assets/image/ngon.png")}
        style={styles.image}
        resizeMode="contain"
      />

      {/* TITLE */}
      <Text style={[styles.title, { color: theme.text }]}>
        Complete Your Profile
      </Text>
      <Text style={[styles.subtitle, { color: isDark ? "#aaa" : "#666" }]}>
        It will help us to know more about you!
      </Text>

      {/* GENDER */}
      <View
        style={[
          styles.inputContainer,
          { backgroundColor: isDark ? "#222" : "#F2F2F2" },
        ]}
      >
        <FontAwesome
          name="user"
          size={20}
          color={theme.text}
          style={styles.icon}
        />
        <Picker
          selectedValue={gender}
          style={[styles.picker, { color: theme.text }]}
          dropdownIconColor={theme.text}
          onValueChange={(itemValue) => setGender(itemValue)}
        >
          <Picker.Item label="Male" value="male" />
          <Picker.Item label="Female" value="female" />
          <Picker.Item label="Other" value="other" />
        </Picker>
      </View>

      {/* BIRTHDATE */}
      <TouchableOpacity
        style={[
          styles.inputContainer,
          { backgroundColor: isDark ? "#222" : "#F2F2F2" },
        ]}
        onPress={() => setShowDatePicker(true)}
      >
        <FontAwesome
          name="calendar"
          size={20}
          color={theme.text}
          style={styles.icon}
        />
        <Text
          style={{
            color: birthDate ? theme.text : isDark ? "#777" : "#aaa",
            paddingLeft: 36,
          }}
        >
          {birthDate.toDateString()}
        </Text>
      </TouchableOpacity>

      {showDatePicker && (
        <DateTimePicker
          value={birthDate}
          mode="date"
          display="default"
          onChange={(event, selectedDate) => {
            setShowDatePicker(Platform.OS === "ios");
            if (selectedDate) setBirthDate(selectedDate);
          }}
        />
      )}

      {/* WEIGHT */}
      <View
        style={[
          styles.inputContainer,
          { backgroundColor: isDark ? "#222" : "#F2F2F2" },
        ]}
      >
        <FontAwesome
          name="balance-scale"
          size={20}
          color={theme.text}
          style={styles.icon}
        />
        <TextInput
          placeholder="Your Weight (kg)"
          placeholderTextColor={isDark ? "#F2F2F2" : "#aaa"}
          keyboardType="numeric"
          style={[styles.input, { color: theme.text }]}
          value={weight}
          onChangeText={setWeight}
        />
      </View>

      {/* HEIGHT */}
      <View
        style={[
          styles.inputContainer,
          { backgroundColor: isDark ? "#222" : "#F2F2F2" },
        ]}
      >
        <FontAwesome
          name="arrows-v"
          size={20}
          color={theme.text}
          style={styles.icon}
        />
        <TextInput
          placeholder="Your Height (cm)"
          placeholderTextColor={isDark ? "#F2F2F2" : "#aaa"}
          keyboardType="numeric"
          style={[styles.input, { color: theme.text }]}
          value={height}
          onChangeText={setHeight}
        />
      </View>

      {/* BUTTON */}
      <TouchableOpacity
        style={[styles.button, { backgroundColor: theme.primary }]}
        onPress={onNext}
      >
        <Text style={styles.buttonText}>Next</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    justifyContent: "center",
  },
  image: {
    width: 180,
    height: 180,
    alignSelf: "center",
    marginBottom: 16,
  },
  title: {
    fontSize: 22,
    fontWeight: "700",
    marginBottom: 8,
    textAlign: "center",
  },
  subtitle: {
    fontSize: 14,
    textAlign: "center",
    marginBottom: 24,
  },
  inputContainer: {
    borderRadius: 14,
    paddingLeft: 44, // đủ chỗ icon
    paddingRight: 16,
    paddingVertical: 0,
    marginBottom: 16,
    height: 48,
    justifyContent: "center",
  },
  icon: {
    position: "absolute",
    left: 14,
    zIndex: 10,
  },
  input: {
    fontSize: 16,
    height: 48,
  },
  picker: {
    height: 48,
    width: "100%",
    marginTop: Platform.OS === "android" ? -6 : 0, // căn giữa Android
  },
  dateText: {
    fontSize: 16,
    height: 48,
    lineHeight: 48,
  },
  button: {
    marginTop: 20,
    paddingVertical: 14,
    borderRadius: 28,
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },
});
