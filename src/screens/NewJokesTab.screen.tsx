import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { useEffect } from 'react';
import { useAppContext } from '../App.provider';
import { StarJokeIcon } from '../components/StarJoke.icon';
import { DiscardJokeIcon } from '../components/DiscardJoke.icon';

export const NewJokesTab: React.FC = () => {
    const { joke } = useAppContext();
    const { handleFetchNewJoke } = useAppContext();
    const { handleSave } = useAppContext();

    useEffect(() => {
        handleFetchNewJoke();
    }, [handleFetchNewJoke])

    return (
        <View style={styles.jokeJenerator}>
            <View style={styles.jokeContainer} >
            <Text style={styles.joke}>{joke}</Text>
            </View>
            <View style={styles.btnContainer}>
            <TouchableOpacity onPress={handleSave}>
                <StarJokeIcon />
            </TouchableOpacity>
            <TouchableOpacity onPress={handleFetchNewJoke}>
                <DiscardJokeIcon />
            </TouchableOpacity>
            </View>
            
        </View>
    )
}

const styles = StyleSheet.create({
    jokeJenerator: {
        flex: 1,
        justifyContent: 'center',
      },
    joke: {
        textAlign: 'center',
        padding: 5,
        fontWeight: 'bold',
    },
    btnContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        paddingTop: 15,
    },
    jokeContainer: {
        borderWidth: 2,
        borderRadius: 20,
        marginHorizontal: 5,
    },
})
