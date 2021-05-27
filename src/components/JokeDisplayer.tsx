import React, { useCallback, useState } from 'react';
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
  PanGestureHandlerStateChangeEvent,
  State as GestureState,
} from 'react-native-gesture-handler';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';

const imageSrc = require('../assets/images/chat.png');

export const JokeDisplayer: React.FC = () => {
  const { joke } = useAppContext();
  const { handleFetchNewJoke } = useAppContext();
  const { handleSave } = useAppContext();

  const offset = useSharedValue(0);
  const maxPan = 100;
  const [shouldSave, setShouldSave] = useState(false);
  const [shouldDiscard, setShouldDiscard] = useState(false);

  const animatedStyles = useAnimatedStyle(() => ({
    transform: [{ translateX: offset.value }],
  }));

  const onGestureEvent = useCallback(
    (event: PanGestureHandlerGestureEvent) => {
      const xVal = Math.floor(event.nativeEvent.translationX);
      offset.value = xVal;

      if (xVal >= maxPan) {
        setShouldSave(true);
        setShouldDiscard(false);
      } else if (xVal <= -maxPan) {
        setShouldDiscard(true);
        setShouldSave(false);
      } else {
        setShouldDiscard(false);
        setShouldSave(false);
      }
    },
    [offset],
  );

  const onHandlerStateChange = useCallback(
    (event: PanGestureHandlerStateChangeEvent) => {
      if (event.nativeEvent.state === GestureState.END) {
        if (shouldSave) {
          offset.value = withTiming(Math.sign(offset.value) * 2000);
          setTimeout(() => {
            handleSave(joke);
          }, 250);
          setTimeout(() => {
            offset.value = withTiming(0);
          }, 300);
        } else if (shouldDiscard) {
          offset.value = withTiming(Math.sign(offset.value) * 2000);
          setTimeout(() => {
            handleFetchNewJoke();
          }, 250);
          setTimeout(() => {
            offset.value = withTiming(0);
          }, 300);
        } else {
          offset.value = withTiming(0);
        }
      }
    },
    [handleFetchNewJoke, handleSave, joke, offset, shouldDiscard, shouldSave],
  );

  return (
    <PanGestureHandler
      minDeltaX={1}
      minDeltaY={100}
      onGestureEvent={onGestureEvent}
      onHandlerStateChange={onHandlerStateChange}
    >
      <Animated.View style={[styles.speechBubbleContainer, animatedStyles]}>
        <ImageBackground source={imageSrc} style={styles.speechBubble}>
          <View style={styles.jokeContainer}>
            <Text style={styles.jokeTitle}>Here's a joke for you:</Text>
            <Text style={styles.joke}>{joke}</Text>
          </View>
          <View style={styles.btnContainer}>
            <TouchableOpacity onPress={handleFetchNewJoke}>
              <DiscardJokeIcon />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => handleSave(joke)}>
              <StarJokeIcon />
            </TouchableOpacity>
          </View>
        </ImageBackground>
      </Animated.View>
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
