import React, { useMemo } from 'react';
import { ImageBackground, StyleSheet, View } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { useAppContext } from '../App.provider';
import { SavedJokeListItem } from '../components/SavedJokeListItem';
import groupBy from 'lodash/groupBy';
import orderBy from 'lodash/orderBy';
import { format } from 'date-fns';
import { JokeWithTimeStamp } from '../types';
import { Drawer } from '../components/Drawer';

const networkImageUrl =
  'https://images.unsplash.com/photo-1525538182201-02cd1909effb?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=967&q=80';

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
    <ImageBackground
      source={{ uri: networkImageUrl }}
      style={styles.jokeJenerator}
    >
      <FlatList
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
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  jokeJenerator: {
    flex: 1,
    justifyContent: 'center',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  dayContainer: {
    margin: 10,
    borderWidth: 2,
    borderRadius: 15,
    borderColor: '#1C72E3',
    backgroundColor: 'white',
    opacity: 0.85,
  },
});
