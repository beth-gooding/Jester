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

export const NewJokesTab: React.FC = () => {
  const { joke } = useAppContext();
  const { handleFetchNewJoke } = useAppContext();
  const { handleSave } = useAppContext();

  useEffect(() => {
    handleFetchNewJoke();
  }, [handleFetchNewJoke]);

  return (
    <View style={styles.jokeJenerator}>
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
    </View>
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
