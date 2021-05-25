import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export const NewJokesTab: React.FC = () => {
    return (
        <View style={styles.jokeJenerator}>
            <Text>New Jokes screen</Text>
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
