import React, { useMemo } from 'react';
import { VictoryContainer, VictoryLegend, VictoryPie } from 'victory-native';
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
    return Object.entries(groupedJokes).map(([period, jokesInHour]) => ({
      x: period,
      y: jokesInHour.length,
    }));
  }, [savedJokes]);

  return (
    <GraphContainer title={'Overall Number of Jokes \n Saved Per Hour'}>
      <VictoryContainer width={300} height={450}>
        <VictoryLegend
          x={50}
          y={300}
          title={'Legend'}
          centerTitle
          orientation="vertical"
          gutter={25}
          standalone={false}
          width={300}
          itemsPerRow={2}
          style={{
            border: { stroke: '#1C72E3' },
            title: {
              fontSize: 17,
              fontFamily: 'TitilliumWeb-Bold',
              fontWeight: 'bold',
            },
          }}
          data={[
            { name: 'Morning', symbol: { fill: '#FEBD00', type: 'star' } },
            { name: 'Afternoon', symbol: { fill: '#1C72E3', type: 'star' } },
            { name: 'Evening', symbol: { fill: '#FE00C0', type: 'star' } },
            { name: 'Night', symbol: { fill: '#00FE3E', type: 'star' } },
          ]}
        />
        <VictoryPie
          data={data}
          width={300}
          height={300}
          innerRadius={30}
          colorScale={['#1C72E3', '#FEBD00', '#FE00C0', '#00FE3E']}
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
      </VictoryContainer>
    </GraphContainer>
  );
};
