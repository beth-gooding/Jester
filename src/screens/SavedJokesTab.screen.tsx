import React, { useMemo } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { useAppContext } from '../App.provider';
import { SavedJokeListItem } from '../components/SavedJokeListItem';
import groupBy from 'lodash/groupBy';
import orderBy from 'lodash/orderBy';
import { format } from 'date-fns';
import { JokeWithTimeStamp } from '../types';

export const SavedJokesTab: React.FC = () => {
  const { savedJokes } = useAppContext();
  const daysWithJokes = useMemo(() => {
    const orderedJokes = orderBy(savedJokes, 'timestamp', 'desc');
    const groupedJokes = groupBy(orderedJokes, (item) =>
      format(new Date(item.timestamp), 'dd MMM yyyy'),
    );
    return Object.entries(groupedJokes).map(([day, jokesInDay]) => ({
      day,
      jokesInDay,
    }));
  }, [savedJokes]);

  return (
    <FlatList
      style={styles.listContainer}
      keyExtractor={(item) => item.day}
      data={daysWithJokes}
      renderItem={({ item }) => (
        <View>
          <Text>{item.day}</Text>
          {item.jokesInDay.map((joke: JokeWithTimeStamp) => (
            <SavedJokeListItem jokeObject={joke} key={joke.timestamp} />
          ))}
        </View>
      )}
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
