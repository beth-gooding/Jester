import React from 'react';
import { StyleSheet } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { useAppContext } from '../App.provider';
import { SavedJokeListItem } from '../components/SavedJokeListItem';

export const SavedJokesTab: React.FC = () => {
  const { savedJokes } = useAppContext();
  return (
    <FlatList
      style={styles.listContainer}
      keyExtractor={(item) => item.timestamp}
      data={savedJokes}
      renderItem={({ item }) => <SavedJokeListItem jokeObject={item} />}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  listContainer: {
    backgroundColor: 'white',
  },
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
