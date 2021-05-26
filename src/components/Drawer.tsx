import React, { useState, useCallback } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  LayoutAnimation,
  StyleSheet,
} from 'react-native';

type DrawerProps = {
  title: string;
};

export const Drawer: React.FC<DrawerProps> = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggleOpen = useCallback(() => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    setIsOpen((val) => !val);
  }, []);
  return (
    <View>
      <TouchableOpacity
        style={styles.drawerContainer}
        onPress={handleToggleOpen}
      >
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.title}>{isOpen ? '-  ' : '+  '}</Text>
      </TouchableOpacity>
      {isOpen ? children : null}
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 20,
    paddingVertical: 15,
  },
  drawerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
  },
});