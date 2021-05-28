import React, { useMemo } from 'react';
import { VictoryPie } from 'victory-native';
import { useAppContext } from '../App.provider';
import groupBy from 'lodash/groupBy';
import orderBy from 'lodash/orderBy';
import { format } from 'date-fns';
import { Drawer } from './Drawer';
import { StyleSheet, View } from 'react-native';

export const SavedByHour: React.FC = () => {
  const { savedJokes } = useAppContext();

  const data = useMemo(() => {
    const orderedJokes = orderBy(savedJokes, 'timestamp', 'asc');
    const groupedJokes = groupBy(orderedJokes, (item) =>
      format(new Date(item.timestamp), 'HH'),
    );
    return Object.entries(groupedJokes).map(([day, jokesInHour]) => ({
      x: day,
      y: jokesInHour.length,
    }));
  }, [savedJokes]);

  return (
    <View style={styles.graphContainer}>
      <Drawer title={'Overall Number of Jokes \n Saved Per Hour'}>
        <VictoryPie
          data={data}
          width={300}
          innerRadius={40}
          colorScale={'blue'}
          animate={{
            easing: 'exp',
          }}
        />
      </Drawer>
    </View>
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
  graphContainer: {
    margin: 10,
    borderWidth: 2,
    borderRadius: 15,
    borderColor: '#1C72E3',
    backgroundColor: 'white',
    opacity: 0.95,
  },
});
