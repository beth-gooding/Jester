import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { useEffect } from 'react';
import { useAppContext } from '../App.provider';

export const NewJokesTab: React.FC = () => {
    const { joke } = useAppContext();
    const { handleFetchNewJoke } = useAppContext();
    const { handleSave } = useAppContext();

    useEffect(() => {
        handleFetchNewJoke();
    }, [handleFetchNewJoke])

    return (
        <View style={styles.jokeJenerator}>
            <Text style={styles.joke}>{joke}</Text>
            <View style={styles.btnContainer}>
            <TouchableOpacity onPress={handleSave}>
                <Text>Save</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={handleFetchNewJoke}>
                <Text>Discard</Text>
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
        paddingVertical: 5,
    },
    btnContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        paddingTop: 15,
    },
})
