import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { RootNavigator } from './src/screens/Root.navigator';
import { AppProvider } from './src/App.provider';

export const App: React.FC = () => {
  return (
    <AppProvider>
      <NavigationContainer>
        <RootNavigator />
      </NavigationContainer>
    </AppProvider>
  );
};

const styles = StyleSheet.create({});
