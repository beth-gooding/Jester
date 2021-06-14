import React from 'react';
import { BottomTabs } from './BottomTabs.navigator';
import {
  CardStyleInterpolators,
  createStackNavigator,
  StackNavigationOptions,
} from '@react-navigation/stack';
import { WriteJokesModal } from './WriteJokesModal';
import { Platform } from 'react-native';

const RootStack = createStackNavigator();

const modalScreenOptions: Partial<StackNavigationOptions> = {
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
        options={{ headerShown: false }}
      />
      <RootStack.Screen
        name="WriteJokesModal"
        component={WriteJokesModal}
        options={modalScreenOptions}
      />
    </RootStack.Navigator>
  );
};
