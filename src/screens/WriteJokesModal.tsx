import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

export const WriteJokesModal: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text>This is my modal where the user can write new jokes</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
