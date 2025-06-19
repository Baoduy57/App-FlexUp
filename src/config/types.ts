export type RootStackParamList = {
  Welcome: undefined;
  Onboarding: undefined;
  Register: undefined;
  Login: undefined;
  Settings: undefined;
  InforUser: undefined;
  GoalSelection: undefined;
  WelcomeBack: undefined;
  BottomTabs: undefined;
  WorkoutDetail: { category: any };
  ExerciseDetail: {
    exercise: {
      name: string;
      time: string;
      image: any;
      description?: string;
      steps?: {
        title: string;
        description: string;
      }[];
    };
  };
};

export type Workout = {
  title: string;
  time: string;
  enabled: boolean;
};
