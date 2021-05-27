import React, { useMemo } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { VictoryBar, VictoryChart, VictoryAxis } from 'victory-native';
import { useAppContext } from '../App.provider';
import groupBy from 'lodash/groupBy';
import orderBy from 'lodash/orderBy';
import { format } from 'date-fns';

export const StatsTab: React.FC = () => {
  const { savedJokes } = useAppContext();
  const data = useMemo(() => {
    const orderedJokes = orderBy(savedJokes, 'timestamp', 'asc');
    const groupedJokes = groupBy(orderedJokes, (item) =>
      format(new Date(item.timestamp), 'dd.MM'),
    );
    return Object.entries(groupedJokes).map(([day, jokesInDay]) => ({
      x: day,
      y: jokesInDay.length,
    }));
  }, [savedJokes]);

  return (
    <View style={styles.jokeJenerator}>
      <View style={styles.container}>
        <Text>Some nice graphs</Text>
        <VictoryChart
          width={350}
          height={400}
          style={{ background: { fill: 'white' } }}
        >
          <VictoryBar
            data={data}
            alignment="start"
            style={{ data: { fill: '#1C72E3' } }}
          />
          <VictoryAxis
            label="Date"
            style={{
              axisLabel: {
                fontSize: 25,
                fontFamily: 'TitilliumWeb-Regular',
                fontWeight: 'bold',
              },

              tickLabels: {
                fontSize: 20,
                padding: 5,
                fontFamily: 'TitilliumWeb-Light',
              },
            }}
          />
          <VictoryAxis
            dependentAxis={true}
            label="Number of saved jokes"
            style={{
              axisLabel: {
                fontSize: 20,
                fontFamily: 'TitilliumWeb-Regular',
                fontWeight: 'bold',
              },
              tickLabels: {
                fontSize: 20,
                padding: 5,
                fontFamily: 'TitilliumWeb-Light',
              },
              ticks: { stroke: 'black', size: 5 },
            }}
          />
        </VictoryChart>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  jokeJenerator: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#febd00',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
