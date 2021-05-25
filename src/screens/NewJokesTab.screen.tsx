import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { useCallback, useState, useEffect } from 'react';

export const NewJokesTab: React.FC = () => {
    const [joke, setJoke] = useState();
    const [savedJokes, setSavedJokes] = useState([]);
    const handleFetchNewJoke = useCallback(async () => {
        const res = await fetch('https://icanhazdadjoke.com/', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'User-Agent': 'My Library (https://github.com/beth-gooding/JokeJenerator)'
            }
        })
        const newJoke = await res.json();
        if (res.ok) {
            setJoke(newJoke.joke);
        }
    }, [])

    useEffect(() => {
        handleFetchNewJoke();
    }, [handleFetchNewJoke])

    const handleSave = () => {
        setSavedJokes([joke, ...savedJokes]);
        handleFetchNewJoke();
    }

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
            <Text>{savedJokes}</Text>
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
    },
    btnContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        paddingTop: 15,
    },
})
