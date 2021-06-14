import { NavigatorScreenParams } from '@react-navigation/native';

export type RootStackParamsList = {
  BottomTabs: NavigatorScreenParams<BottomTabsParamList>;
  WriteJokesModal: undefined;
};

export type BottomTabsParamList = {
  NewJokes: undefined;
  SavedJokes: undefined;
  Stats: undefined;
};

export type JokeWithTimeStamp = {
  timestamp: number;
  joke: string;
};

export type AppData = {
  jokes: JokeWithTimeStamp[];
};
