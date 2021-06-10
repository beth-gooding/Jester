import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { useAppContext } from '../App.provider';
import { Drawer } from './Drawer';

type GraphContainerProps = {
  title: string;
};

export const GraphContainer: React.FC<GraphContainerProps> = ({
  title,
  children,
}) => {
  const { savedJokes } = useAppContext();
  return (
    <View style={styles.graphContainer}>
      <Drawer title={title}>
        {savedJokes.length === 0 ? (
          <Text>Save some jokes to generate your stats</Text>
        ) : (
          children
        )}
      </Drawer>
    </View>
  );
};

const styles = StyleSheet.create({
  graphContainer: {
    margin: 10,
    borderWidth: 2,
    borderRadius: 15,
    borderColor: '#1C72E3',
    backgroundColor: 'white',
    opacity: 0.95,
  },
});
