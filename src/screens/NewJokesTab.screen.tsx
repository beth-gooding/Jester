import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import { useEffect } from 'react';
import { useAppContext } from '../App.provider';
import { StarJokeIcon } from '../components/StarJoke.icon';
import { DiscardJokeIcon } from '../components/DiscardJoke.icon';

const imageSrc = require('../assets/images/chat.png');
const networkImageUrl =
  'https://images.unsplash.com/photo-1485550409059-9afb054cada4?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=802&q=80';

export const NewJokesTab: React.FC = () => {
  const { joke } = useAppContext();
  const { handleFetchNewJoke } = useAppContext();
  const { handleSave } = useAppContext();

  useEffect(() => {
    handleFetchNewJoke();
  }, [handleFetchNewJoke]);

  return (
    <ImageBackground
      source={{ uri: networkImageUrl }}
      style={styles.jokeJenerator}
    >
      <ImageBackground source={imageSrc} style={styles.speechBubble}>
        <View style={styles.jokeContainer}>
          <Text style={styles.jokeTitle}>Here's a joke for you:</Text>
          <Text style={styles.joke}>{joke}</Text>
        </View>
        <View style={styles.btnContainer}>
          <TouchableOpacity onPress={() => handleSave(joke)}>
            <StarJokeIcon />
          </TouchableOpacity>
          <TouchableOpacity onPress={handleFetchNewJoke}>
            <DiscardJokeIcon />
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  jokeJenerator: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#1C72E3',
  },
  joke: {
    textAlign: 'center',
    padding: 5,
    fontSize: 22,
  },
  jokeTitle: {
    textAlign: 'center',
    padding: 5,
    fontWeight: 'bold',
    fontSize: 18,
  },
  btnContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingBottom: 80,
  },
  jokeContainer: {
    margin: 5,
  },
  speechBubble: {
    height: 350,
    aspectRatio: 1,
    alignSelf: 'center',
    justifyContent: 'space-between',
  },
});
