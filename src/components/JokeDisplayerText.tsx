import React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { Text } from 'react-native';

type JokeDisplayerTextProps = {
  jokeToDisplay: string;
};

export const JokeDisplayerText: React.FC<JokeDisplayerTextProps> = ({
  jokeToDisplay,
}) => {
  return (
    <View style={styles.jokeContainer}>
      <Text style={styles.jokeTitle}>Here's a joke for you:</Text>
      <ScrollView
        overScrollMode={'always'}
        persistentScrollbar={true}
        showsVerticalScrollIndicator={true}
      >
        <Text style={styles.joke}>{jokeToDisplay}</Text>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  joke: {
    textAlign: 'center',
    paddingHorizontal: 5,
    fontSize: 20,
    fontFamily: 'TitilliumWeb-Regular',
  },
  jokeTitle: {
    textAlign: 'center',
    padding: 5,
    fontFamily: 'TitilliumWeb-Bold',
    fontSize: 18,
  },
  jokeContainer: {
    margin: 5,
    maxHeight: 160,
  },
});
