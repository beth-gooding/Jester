import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { useAppContext } from '../App.provider';

export const SavedJokesTab: React.FC = () => {

    const { savedJokes } = useAppContext();
    return (
        <View style={styles.jokeJenerator}>
            {savedJokes.map((joke: string) => (<Text style={styles.joke}>{joke}</Text>))}
        </View>
    )
}

const styles = StyleSheet.create({
    jokeJenerator: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      },
    joke: {
        textAlign: 'center',
        paddingVertical: 5,
    },
})
