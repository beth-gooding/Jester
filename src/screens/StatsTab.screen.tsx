import React from 'react';
import { ImageBackground, StyleSheet, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { SavedByDay } from '../components/SavedByDay.chart';
import { SavedByHour } from '../components/SavedByHour.chart';

const networkImageUrl =
  'https://images.unsplash.com/photo-1521913626209-0fbf68f4c4b1?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80';

export const StatsTab: React.FC = () => {
  return (
    <ImageBackground
      source={{ uri: networkImageUrl }}
      style={styles.jokeJenerator}
    >
      <View style={styles.container}>
        <ScrollView style={styles.scrollContainer}>
          <SavedByDay />
          <SavedByHour />
        </ScrollView>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  jokeJenerator: {
    flex: 1,
    justifyContent: 'center',
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
    paddingTop: 15,
  },
});
