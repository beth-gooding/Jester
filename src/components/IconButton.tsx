import React from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';

type IconButtonProps = {
  iconStyles: {}[];
  onPressFunction: () => any;
};

export const IconButton: React.FC<IconButtonProps> = ({
  children,
  iconStyles,
  onPressFunction,
}) => {
  return (
    <TouchableOpacity onPress={onPressFunction} style={styles.btn}>
      <View style={iconStyles}>{children}</View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  btn: {
    shadowOffset: { width: 7, height: 7 },
    shadowColor: 'black',
    shadowOpacity: 0.2,
    elevation: 2,
    backgroundColor: 'white',
    borderRadius: 50,
    height: 90,
    width: 90,
  },
});
