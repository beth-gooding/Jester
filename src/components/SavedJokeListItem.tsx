import React, { useState, useCallback } from 'react';
import {
  LayoutAnimation,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { JokeWithTimeStamp } from '../types';
import { DiscardJokeIcon } from '../components/DiscardJoke.icon';
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
import { format } from 'date-fns';

type JokeItemRowProps = {
  jokeObject: JokeWithTimeStamp;
};

export const SavedJokeListItem: React.FC<JokeItemRowProps> = (jokeItem) => {
  const { handleDeleteJoke } = useAppContext();

  const offset = useSharedValue(0);
  const maxPan = 100;
  const [shouldDelete, setShouldDelete] = useState(false);

  const animatedStyles = useAnimatedStyle(() => ({
    transform: [{ translateX: offset.value }],
  }));

  const onGestureEvent = useCallback(
    (event: PanGestureHandlerGestureEvent) => {
      const xVal = Math.floor(event.nativeEvent.translationX);
      offset.value = xVal;

      if (Math.abs(xVal) <= maxPan) {
        setShouldDelete(false);
      } else {
        setShouldDelete(true);
      }
    },
    [offset],
  );

  const onHandlerStateChange = useCallback(
    (event: PanGestureHandlerStateChangeEvent) => {
      if (event.nativeEvent.state === GestureState.END) {
        if (shouldDelete) {
          offset.value = withTiming(Math.sign(offset.value) * 5000);
          LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
          setTimeout(() => {
            handleDeleteJoke(jokeItem.jokeObject);
          }, 250);
        } else {
          offset.value = withTiming(0);
        }
      }
    },
    [handleDeleteJoke, offset, jokeItem, shouldDelete],
  );

  return (
    <PanGestureHandler
      minDeltaX={1}
      minDeltaY={100}
      onGestureEvent={onGestureEvent}
      onHandlerStateChange={onHandlerStateChange}
    >
      <Animated.View style={[styles.jokeContainer, animatedStyles]}>
        <Text style={styles.joke}>{jokeItem.jokeObject.joke}</Text>
        <View style={styles.timeAndDiscard}>
          <Text style={styles.time}>
            Saved at {format(new Date(jokeItem.jokeObject.timestamp), 'HH:mm')}
          </Text>
          <TouchableOpacity
            onPress={() => handleDeleteJoke(jokeItem.jokeObject)}
          >
            <DiscardJokeIcon size={30} />
          </TouchableOpacity>
        </View>
      </Animated.View>
    </PanGestureHandler>
  );
};

const styles = StyleSheet.create({
  jokeContainer: {
    flex: 1,
    backgroundColor: '#febd00',
    borderWidth: 2,
    borderRadius: 15,
    borderColor: '#1C72E3',
    margin: 5,
    padding: 5,
  },
  joke: {
    textAlign: 'center',
    paddingVertical: 5,
    fontFamily: 'TitilliumWeb-SemiBold',
    fontSize: 16,
  },
  timeAndDiscard: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  time: {
    fontFamily: 'TitilliumWeb-Regular',
    fontSize: 15,
  },
});
