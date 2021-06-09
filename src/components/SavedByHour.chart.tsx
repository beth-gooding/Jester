import React, { useMemo } from 'react';
import { VictoryPie } from 'victory-native';
import { useAppContext } from '../App.provider';
import groupBy from 'lodash/groupBy';
import orderBy from 'lodash/orderBy';
import { format } from 'date-fns';
import { GraphContainer } from './GraphContainer';

export const SavedByHour: React.FC = () => {
  const { savedJokes } = useAppContext();

  const data = useMemo(() => {
    const orderedJokes = orderBy(savedJokes, 'timestamp', 'asc');
    const groupedJokes = groupBy(orderedJokes, (item) => {
      // eslint-disable-next-line radix
      var hour = parseInt(format(new Date(item.timestamp), 'HH'));
      if (hour >= 0 && hour < 6) {
        return 'Night';
      } else if (hour >= 6 && hour <= 12) {
        return 'Morning';
      } else if (hour >= 12 && hour <= 18) {
        return 'Afternoon';
      } else {
        return 'Evening';
      }
    });
    return Object.entries(groupedJokes).map(([hour, jokesInHour]) => ({
      x: hour,
      y: jokesInHour.length,
    }));
  }, [savedJokes]);

  return (
    <GraphContainer title={'Overall Number of Jokes \n Saved Per Hour'}>
      <VictoryPie
        data={data}
        width={300}
        innerRadius={30}
        colorScale={'blue'}
        animate={{
          easing: 'exp',
        }}
        labels={({ datum }) => `${datum.x}`}
        labelRadius={35}
        labelPlacement={'parallel'}
        style={{
          data: { stroke: 'white', strokeWidth: 2 },
          labels: { fill: 'white', fontSize: 14 },
        }}
        padAngle={0}
      />
    </GraphContainer>
  );
};
