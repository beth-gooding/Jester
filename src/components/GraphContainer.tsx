import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Drawer } from './Drawer';

type GraphContainerProps = {
  title: string;
};

export const GraphContainer: React.FC<GraphContainerProps> = ({
  title,
  children,
}) => {
  return (
    <View style={styles.graphContainer}>
      <Drawer title={title}>{children}</Drawer>
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
