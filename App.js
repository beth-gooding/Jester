/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const App = () => {
  return (
    <View style={styles.jokeJenerator}>
      <Text style={styles.jokeJeneratorText}>Joke Jenerator</Text>
    </View>
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

export default App;
