import React, { useCallback } from 'react';
import {
  ImageBackground,
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import { DiscardJokeIcon } from './DiscardJoke.icon';
import { StarJokeIcon } from './StarJoke.icon';
import { useAppContext } from '../App.provider';
import {
  PanGestureHandler,
  PanGestureHandlerGestureEvent,
} from 'react-native-gesture-handler';

const imageSrc = require('../assets/images/chat.png');

export const JokeDisplayer: React.FC = () => {
  const { joke } = useAppContext();
  const { handleFetchNewJoke } = useAppContext();
  const { handleSave } = useAppContext();
  const onGestureEvent = useCallback((event: PanGestureHandlerGestureEvent) => {
    console.warn(event.nativeEvent.translationX);
  }, []);
  return (
    <PanGestureHandler
      minDeltaX={1}
      minDeltaY={100}
      onGestureEvent={onGestureEvent}
    >
      <View style={styles.speechBubbleContainer}>
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
    </PanGestureHandler>
  );
};

const styles = StyleSheet.create({
  joke: {
    textAlign: 'center',
    padding: 5,
    fontSize: 20,
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
  speechBubbleContainer: {
    height: 350,
    aspectRatio: 1,
    alignSelf: 'center',
  },
});
