import React, { useCallback, useState } from 'react';
import { ImageBackground, View, Text, StyleSheet } from 'react-native';
import { DiscardJokeIcon } from './DiscardJoke.icon';
import { StarJokeIcon } from './StarJoke.icon';
import { useAppContext } from '../App.provider';
import {
  PanGestureHandler,
  PanGestureHandlerGestureEvent,
  PanGestureHandlerStateChangeEvent,
  ScrollView,
  State as GestureState,
} from 'react-native-gesture-handler';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import { IconButton } from './IconButton';
import { ButtonPair } from './ButtonPair';

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
          <View style={styles.jokeContainer}>
            <Text style={styles.jokeTitle}>Here's a joke for you:</Text>
            <ScrollView
              overScrollMode={'always'}
              persistentScrollbar={true}
              showsVerticalScrollIndicator={true}
            >
              <Text style={styles.joke}>{joke}</Text>
            </ScrollView>
          </View>
          <ButtonPair />
          <View style={styles.btnContainer}>
            <IconButton
              iconStyles={[styles.btn]}
              onPressFunction={() => {
                handleFetchNewJoke();
              }}
            >
              <DiscardJokeIcon />
            </IconButton>
            <IconButton
              iconStyles={[styles.btn, styles.starBtn]}
              onPressFunction={() => handleSave(joke)}
            >
              <StarJokeIcon />
            </IconButton>
          </View>
        </ImageBackground>
      </Animated.View>
    </PanGestureHandler>
  );
};

const styles = StyleSheet.create({
  joke: {
    textAlign: 'center',
    paddingHorizontal: 5,
    fontSize: 20,
    fontFamily: 'TitilliumWeb-Regular',
  },
  jokeTitle: {
    textAlign: 'center',
    padding: 5,
    fontFamily: 'TitilliumWeb-Bold',
    fontSize: 18,
  },
  btnContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingBottom: 85,
  },
  jokeContainer: {
    margin: 5,
    maxHeight: 160,
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
