import React, { useCallback, useState } from 'react';
import { ImageBackground, StyleSheet } from 'react-native';
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
import { JokeDisplayerButtons } from './JokeDisplayerButtons';
import { JokeDisplayerText } from './JokeDisplayerText';

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
          handleSave(joke);
          setTimeout(() => {
            offset.value = withTiming(0);
          }, 300);
        } else if (shouldDiscard) {
          offset.value = withTiming(Math.sign(offset.value) * 2000);
          handleFetchNewJoke();
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
          <JokeDisplayerText jokeToDisplay={joke} />
          <JokeDisplayerButtons
            onPressFunctionButton1={() => {
              handleFetchNewJoke();
            }}
            iconStylesButton1={[styles.btn]}
            onPressFunctionButton2={() => handleSave(joke)}
            iconStylesButton2={[styles.btn, styles.starBtn]}
          />
        </ImageBackground>
      </Animated.View>
    </PanGestureHandler>
  );
};

const styles = StyleSheet.create({
  btnContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingBottom: 85,
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
  btn: {
    shadowOffset: { width: 7, height: 7 },
    shadowColor: 'black',
    shadowOpacity: 0.2,
    elevation: 2,
    backgroundColor: 'white',
    borderRadius: 50,
    height: 90,
    width: 90,
  },
  starBtn: {
    paddingHorizontal: 5,
    paddingTop: 2,
  },
});
