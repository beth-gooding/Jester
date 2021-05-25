import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export const SavedJokesTab: React.FC = () => {
    return (
        <View style={styles.jokeJenerator}>
            <Text>Saved Jokes screen</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    jokeJenerator: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      },
})
