import React, { useMemo } from 'react';
import { VictoryBar, VictoryChart, VictoryAxis } from 'victory-native';
import { useAppContext } from '../App.provider';
import groupBy from 'lodash/groupBy';
import orderBy from 'lodash/orderBy';
import { format } from 'date-fns';
import { GraphContainer } from './GraphContainer';
import { Text } from 'react-native';

export const SavedByDay: React.FC = () => {
  const { savedJokes } = useAppContext();
  const data = useMemo(() => {
    const orderedJokes = orderBy(savedJokes, 'timestamp', 'asc');
    const groupedJokes = groupBy(orderedJokes, (item) =>
      format(new Date(item.timestamp), 'dd.MM'),
    );
    const numberOfJokes = Object.keys(groupedJokes).length;
    return numberOfJokes > 4
      ? Object.entries(groupedJokes)
          .slice(numberOfJokes - 4, numberOfJokes)
          .map(([day, jokesInDay]) => ({
            x: day,
            y: jokesInDay.length,
          }))
      : Object.entries(groupedJokes).map(([day, jokesInDay]) => ({
          x: day,
          y: jokesInDay.length,
        }));
  }, [savedJokes]);

  return data.length === 0 ? (
    <Text>Save some jokes to generate your stats</Text>
  ) : (
    <GraphContainer
      title={'Number of Jokes \n Saved on the Last \n Four Active Days'}
    >
      <VictoryChart
        width={300}
        height={400}
        domainPadding={{ x: 15, y: 5 }}
        style={{ background: { fill: 'white' } }}
      >
        <VictoryBar
          data={data}
          style={{ data: { fill: '#1C72E3' } }}
          animate={{
            duration: 2000,
            easing: 'sin',
            onLoad: { duration: 1000 },
          }}
        />
        <VictoryAxis
          label="Date"
          style={{
            axisLabel: {
              fontSize: 22,
              fontFamily: 'TitilliumWeb-Regular',
              fontWeight: 'bold',
              padding: 25,
            },

            tickLabels: {
              fontSize: 18,
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
              fontSize: 22,
              fontFamily: 'TitilliumWeb-Regular',
              fontWeight: 'bold',
              padding: 30,
            },
            tickLabels: {
              fontSize: 19,
              padding: 0,
              fontFamily: 'TitilliumWeb-Light',
            },
            ticks: { stroke: 'black', size: 5 },
          }}
        />
      </VictoryChart>
    </GraphContainer>
  );
};
