import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export const StatsTab: React.FC = () => {
  return (
    <View style={styles.jokeJenerator}>
      <Text>Stats screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  jokeJenerator: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
