import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import { useTheme } from "../../context/ThemeContext";
import { MaterialCommunityIcons as Icon } from "@expo/vector-icons";

const { width } = Dimensions.get("window");

export default function HomeScreen() {
  const { theme } = useTheme();

  return (
    <ScrollView
      style={[styles.container, { backgroundColor: theme.background }]}
      contentContainerStyle={{ paddingBottom: 80 }}
    >
      {/* Header */}
      <View style={[styles.headerBox, { backgroundColor: theme.primary }]}>
        <View style={styles.headerTop}>
          <Text style={[styles.greeting, { color: theme.textcard }]}>
            Hi Kit! 👋
          </Text>
          <Icon name="bell-outline" size={24} color={theme.textcard} />
        </View>
        <Text style={[styles.subGreeting, { color: theme.textcard }]}>
          Ready for today’s workout?
        </Text>
        <View style={styles.statsRow}>
          <StatBox icon="fire" value="320" label="Calories" color="#f21616" />
          <StatBox
            icon="cup-water"
            value="1.2L"
            label="Water"
            color="#46a8fa"
          />
          <StatBox
            icon="clock-outline"
            value="25m"
            label="Time"
            color="#32e348"
          />
        </View>
      </View>

      {/* Today's Workout */}
      <Card>
        <Text style={[styles.cardTitle, { color: theme.text }]}>
          Today’s Workout
        </Text>
        <Text style={[styles.cardSubtitle, { color: theme.text }]}>
          Upper Body Strength
        </Text>
        <View style={styles.exerciseInfoRow}>
          <Text style={{ color: theme.subtext }}>🕒 45 minutes</Text>
          <Text style={{ color: theme.subtext }}>🥊 8 exercises</Text>
        </View>
        <TouchableOpacity
          style={[styles.startButton, { backgroundColor: theme.primary }]}
        >
          <Text style={styles.startButtonText}>▶️ Start Workout</Text>
        </TouchableOpacity>
      </Card>

      {/* Weekly Progress */}
      <Card>
        <Text style={[styles.cardTitle, { color: theme.text }]}>
          This Week’s Progress
        </Text>
        <Text style={{ color: theme.subtext, marginBottom: 8 }}>
          Completed 3 out of 4 sessions
        </Text>
        <View
          style={[styles.progressBarBg, { backgroundColor: theme.progressBg }]}
        >
          <View
            style={[
              styles.progressBarFill,
              { backgroundColor: theme.progressFill, width: "75%" },
            ]}
          />
        </View>
        <Text style={{ color: theme.subtext, marginTop: 6 }}>
          1 more session to reach your goal!
        </Text>
      </Card>

      {/* Nutrition + Progress shortcuts */}
      <View style={styles.row2Box}>
        <Card small>
          <Icon
            name="target"
            size={28}
            color={theme.icon}
            style={{ marginBottom: 8 }}
          />
          <Text style={[styles.cardMiniTitle, { color: theme.text }]}>
            Track calories
          </Text>
          <Text style={{ color: theme.subtext, fontSize: 15 }}>
            Monitor intake
          </Text>
        </Card>
        <Card small>
          <Icon
            name="chart-line"
            size={28}
            color={theme.icon}
            style={{ marginBottom: 8 }}
          />
          <Text style={[styles.cardMiniTitle, { color: theme.text }]}>
            View stats
          </Text>
          <Text style={{ color: theme.subtext, fontSize: 15 }}>
            See performance
          </Text>
        </Card>
      </View>

      {/* Tips */}
      <Card>
        <Text style={[styles.cardTitle, { color: theme.text }]}>
          Quick Tips
        </Text>
        <TipItem icon="water" text="Drink water 30 minutes before workout" />
        <TipItem icon="run-fast" text="Warm up for 5–10 minutes" />
        <TipItem icon="arm-flex" text="Focus on correct form" />
        <TipItem icon="emoticon-happy-outline" text="Get enough rest" />
      </Card>
    </ScrollView>
  );
}

// Components
const StatBox = ({ icon, value, label, color }: any) => (
  <View style={styles.statBox}>
    <Icon name={icon} size={24} color={color} style={{ marginBottom: 4 }} />
    <Text style={{ color: "#fff", fontWeight: "600", fontSize: 16 }}>
      {value}
    </Text>
    <Text style={{ color: "#eee", fontSize: 13 }}>{label}</Text>
  </View>
);

const Card = ({ children, small = false }: any) => {
  const { theme } = useTheme();
  return (
    <View
      style={[
        styles.card,
        { backgroundColor: theme.card, shadowColor: theme.border },
        small && styles.cardSmall,
      ]}
    >
      {children}
    </View>
  );
};

const TipItem = ({ icon, text }: any) => {
  const { theme } = useTheme();
  return (
    <View style={styles.tipItem}>
      <Icon
        name={icon}
        size={25}
        color={theme.icon}
        style={{ marginRight: 8 }}
      />
      <Text style={{ color: theme.text, fontSize: 15 }}>{text}</Text>
    </View>
  );
};

// Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerBox: {
    padding: 20,
    paddingTop: 50,
    borderBottomLeftRadius: 32,
    borderBottomRightRadius: 32,
  },
  headerTop: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  greeting: {
    fontSize: 24,
    fontWeight: "bold",
  },
  subGreeting: {
    marginTop: 8,
    fontSize: 16,
  },
  statsRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 20,
  },
  statBox: {
    width: (width - 60) / 3,
    alignItems: "center",
  },
  card: {
    padding: 16,
    borderRadius: 16,
    marginHorizontal: 16,
    marginTop: 20,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  cardSmall: {
    flex: 1,
    marginHorizontal: 8,
    alignItems: "center",
    justifyContent: "center",
  },
  row2Box: {
    flexDirection: "row",
    marginTop: 16,
    paddingHorizontal: 8,
  },
  cardTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 6,
  },
  cardSubtitle: {
    fontSize: 15,
    marginBottom: 10,
  },
  exerciseInfoRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 12,
  },
  startButton: {
    paddingVertical: 12,
    borderRadius: 20,
    alignItems: "center",
  },
  startButtonText: {
    color: "#fff",
    fontWeight: "600",
    fontSize: 15,
  },
  progressBarBg: {
    height: 10,
    borderRadius: 5,
    overflow: "hidden",
  },
  progressBarFill: {
    height: 10,
  },
  cardMiniTitle: {
    fontWeight: "bold",
    marginBottom: 2,
    fontSize: 17,
  },
  tipItem: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 10,
  },
});
