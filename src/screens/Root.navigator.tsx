import React from 'react';
import { BottomTabs } from './BottomTabs.navigator';
import { createStackNavigator } from '@react-navigation/stack';

const RootStack = createStackNavigator();

export const RootNavigator: React.FC = () => {
  return (
    <RootStack.Navigator initialRouteName="BottomTabs">
      <RootStack.Screen
        name="BottomTabs"
        component={BottomTabs}
        options={{ headerShown: false }}
      />
    </RootStack.Navigator>
  );
};
