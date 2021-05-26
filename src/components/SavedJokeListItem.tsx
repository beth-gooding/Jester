import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { format } from 'date-fns';
import { JokeWithTimeStamp } from '../types';

type JokeItemRowProps = {
  jokeObject: JokeWithTimeStamp;
};

export const SavedJokeListItem: React.FC<JokeItemRowProps> = (jokeItem) => {
  return (
    <View style={styles.jokeContainer}>
      <Text style={styles.joke}>{jokeItem.jokeObject.joke}</Text>
      <Text>
        {format(new Date(jokeItem.jokeObject.timestamp), 'dd MMM, yyyy')}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  jokeContainer: {
    backgroundColor: 'white',
    borderWidth: 2,
    borderRadius: 15,
    margin: 5,
    padding: 5,
  },
  joke: {
    textAlign: 'center',
    paddingVertical: 5,
    fontWeight: 'bold',
  },
});
