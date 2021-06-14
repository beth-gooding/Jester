import React from 'react';
import { StyleSheet, View } from 'react-native';

export const ButtonPair: React.FC = ({ children }) => {
  return <View style={styles.btnContainer}>{children}</View>;
};

const styles = StyleSheet.create({
  btnContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingBottom: 85,
  },
});
