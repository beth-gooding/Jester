import React from 'react';
import { StyleSheet, ImageBackground, Text } from 'react-native';
import { useEffect } from 'react';
import { useAppContext } from '../App.provider';
import { JokeDisplayer } from '../components/JokeDisplayer';
import { IconButton } from '../components/IconButton';
import { useNavigation } from '@react-navigation/native';

const networkImageUrl =
  'https://images.unsplash.com/photo-1485550409059-9afb054cada4?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=802&q=80';

export const NewJokesTab: React.FC = () => {
  const { handleFetchNewJoke } = useAppContext();
  const navigation = useNavigation();
  useEffect(() => {
    handleFetchNewJoke();
  }, [handleFetchNewJoke]);

  return (
    <ImageBackground
      source={{ uri: networkImageUrl }}
      style={styles.jokeJenerator}
    >
      <JokeDisplayer />
      <IconButton
        iconStyles={[styles.btn]}
        onPressFunction={() => {
          navigation.navigate('WriteJokesModal');
        }}
      >
        <Text style={styles.btnText}>Write your own joke</Text>
      </IconButton>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  jokeJenerator: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btn: {
    shadowOffset: { width: 7, height: 7 },
    shadowColor: 'black',
    shadowOpacity: 0.2,
    elevation: 2,
    backgroundColor: 'white',
    borderRadius: 50,
    height: 90,
    width: 90,
    justifyContent: 'center',
  },
  btnText: {
    textAlign: 'center',
    color: '#1C72E3',
  },
});
