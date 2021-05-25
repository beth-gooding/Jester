import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { useAppContext } from '../App.provider';

export const SavedJokesTab: React.FC = () => {

    const { savedJokes } = useAppContext();
    return (
        <View style={styles.container}>
            {savedJokes.map((joke: string) => (<View style={styles.jokeContainer}><Text style={styles.joke}>{joke}</Text></View>))}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    jokeContainer: {
        backgroundColor: 'white',
        borderWidth: 2,
        borderRadius: 15,
        marginVertical: 5,
        padding: 5
    },
    joke: {
        textAlign: 'center',
        paddingVertical: 5,
        fontWeight: 'bold',
    },
})
