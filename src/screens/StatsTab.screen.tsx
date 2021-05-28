import React from 'react';
import { StyleSheet, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { SavedByDay } from '../components/SavedByDay.chart';

export const StatsTab: React.FC = () => {
  return (
    <View style={styles.jokeJenerator}>
      <View style={styles.container}>
        <ScrollView style={styles.scrollContainer}>
          <SavedByDay />
        </ScrollView>
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
  title: {
    fontFamily: 'TitilliumWeb-Bold',
    fontWeight: 'bold',
    fontSize: 21,
  },
  scrollContainer: {
    paddingVertical: 15,
  },
});
