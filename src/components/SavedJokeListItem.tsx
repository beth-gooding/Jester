import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { JokeWithTimeStamp } from '../types';
import { DiscardJokeIcon } from '../components/DiscardJoke.icon';
import { useAppContext } from '../App.provider';

type JokeItemRowProps = {
  jokeObject: JokeWithTimeStamp;
};

export const SavedJokeListItem: React.FC<JokeItemRowProps> = (jokeItem) => {
  const { handleDeleteJoke } = useAppContext();
  return (
    <View style={styles.jokeContainer}>
      <Text style={styles.joke}>{jokeItem.jokeObject.joke}</Text>
      <TouchableOpacity onPress={() => handleDeleteJoke(jokeItem.jokeObject)}>
        <DiscardJokeIcon size={30} color={'red'} />
      </TouchableOpacity>
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
    alignItems: 'center',
  },
  joke: {
    textAlign: 'center',
    paddingVertical: 5,
    fontWeight: 'bold',
  },
});
