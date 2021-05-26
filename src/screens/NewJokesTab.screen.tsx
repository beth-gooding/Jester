import React from 'react';
import { StyleSheet, ImageBackground } from 'react-native';
import { useEffect } from 'react';
import { useAppContext } from '../App.provider';
import { JokeDisplayer } from '../components/JokeDisplayer';

const networkImageUrl =
  'https://images.unsplash.com/photo-1485550409059-9afb054cada4?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=802&q=80';

export const NewJokesTab: React.FC = () => {
  const { handleFetchNewJoke } = useAppContext();

  useEffect(() => {
    handleFetchNewJoke();
  }, [handleFetchNewJoke]);

  return (
    <ImageBackground
      source={{ uri: networkImageUrl }}
      style={styles.jokeJenerator}
    >
      <JokeDisplayer />
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  jokeJenerator: {
    flex: 1,
    justifyContent: 'center',
  },
});
