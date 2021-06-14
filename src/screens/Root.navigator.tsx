import React from 'react';
import { BottomTabs } from './BottomTabs.navigator';
import {
  CardStyleInterpolators,
  createStackNavigator,
  StackNavigationOptions,
} from '@react-navigation/stack';
import { WriteJokesModal } from './WriteJokesModal';
import { Platform } from 'react-native';
import { NavigatorScreenParams } from '@react-navigation/native';

type RootStackParamsList = {
  BottomTabs: NavigatorScreenParams<BottomTabsParamList>;
  WriteJokesModal: undefined;
};

type BottomTabsParamList = {
  NewJokes: undefined;
  SavedJokes: undefined;
  Stats: undefined;
};

const RootStack = createStackNavigator<RootStackParamsList>();

const modalScreenOptions: Partial<StackNavigationOptions> = {
  title: '',
  gestureDirection: 'vertical',
  gestureEnabled: true,
  cardOverlayEnabled: true,
  cardStyleInterpolator: Platform.select({
    ios: CardStyleInterpolators.forVerticalIOS,
    android: CardStyleInterpolators.forBottomSheetAndroid,
  }),
};

export const RootNavigator: React.FC = () => {
  return (
    <RootStack.Navigator initialRouteName="BottomTabs">
      <RootStack.Screen
        name="BottomTabs"
        component={BottomTabs}
        options={{ headerShown: false, title: 'New Jokes' }}
      />
      <RootStack.Screen
        name="WriteJokesModal"
        component={WriteJokesModal}
        options={modalScreenOptions}
      />
    </RootStack.Navigator>
  );
};
