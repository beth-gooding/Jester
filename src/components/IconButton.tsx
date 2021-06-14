import React from 'react';
import { View, TouchableOpacity } from 'react-native';

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
    <TouchableOpacity onPress={onPressFunction} style={iconStyles}>
      <View style={iconStyles}>{children}</View>
    </TouchableOpacity>
  );
};
