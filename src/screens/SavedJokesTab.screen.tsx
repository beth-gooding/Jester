import React, { useMemo } from 'react';
import { StyleSheet, View } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { useAppContext } from '../App.provider';
import { SavedJokeListItem } from '../components/SavedJokeListItem';
import groupBy from 'lodash/groupBy';
import orderBy from 'lodash/orderBy';
import { format } from 'date-fns';
import { JokeWithTimeStamp } from '../types';
import { Drawer } from '../components/Drawer';

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
        <View style={styles.dayContainer}>
          <Drawer title={item.day}>
            {item.jokesInDay.map((joke: JokeWithTimeStamp) => (
              <SavedJokeListItem jokeObject={joke} key={joke.timestamp} />
            ))}
          </Drawer>
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
    backgroundColor: '#febd00',
  },
  dayContainer: {
    margin: 10,
    borderWidth: 2,
    borderRadius: 15,
    borderColor: '#1C72E3',
    backgroundColor: 'white',
  },
});
