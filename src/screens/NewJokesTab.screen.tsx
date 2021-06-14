import React from 'react';
import { StyleSheet, ImageBackground, Text } from 'react-native';
import { useEffect } from 'react';
import { useAppContext } from '../App.provider';
import { JokeDisplayer } from '../components/JokeDisplayer';
import { IconButton } from '../components/IconButton';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamsList } from '../types';

const networkImageUrl =
  'https://images.unsplash.com/photo-1485550409059-9afb054cada4?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=802&q=80';

type Props = {
  navigation: StackNavigationProp<RootStackParamsList, 'WriteJokesModal'>;
};

export const NewJokesTab: React.FC<Props> = () => {
  const { handleFetchNewJoke } = useAppContext();
  const navigation = useNavigation<Props>();
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
        <Text style={styles.btnText}>{'Write \nyour own \njoke'}</Text>
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
    borderRadius: 100,
    height: 140,
    width: 140,
    justifyContent: 'center',
  },
  btnText: {
    textAlign: 'center',
    fontFamily: 'TitilliumWeb-Bold',
    fontSize: 18,
    color: '#1C72E3',
  },
});
