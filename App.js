import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

export const App = () => {
  return (
    <NavigationContainer>
      <View style={styles.jokeJenerator}>
        <Text style={styles.jokeJeneratorText}>Joke Jenerator</Text>
      </View>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  jokeJenerator: {
    flex: 1,
    justifyContent: 'center',
  },
  jokeJeneratorText: {
    alignSelf: 'center',
  },
});
