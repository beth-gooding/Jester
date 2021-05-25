import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { useAppContext } from '../App.provider';
import { format } from 'date-fns';

export const SavedJokesTab: React.FC = () => {

    const { savedJokes } = useAppContext();
    return (
        <FlatList 
          style={styles.listContainer}
          keyExtractor={item => item.timestamp}
          data={savedJokes}
          renderItem={({ item }) => (
              <View style={styles.jokeContainer} ><Text style={styles.joke}>{item.joke}</Text><Text>{format(new Date(item.timestamp), 'dd MMM, yyyy')}</Text></View>
          )} />
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    listContainer: {
        backgroundColor: 'white',
    },
    jokeContainer: {
        backgroundColor: 'white',
        borderWidth: 2,
        borderRadius: 15,
        margin: 5,
        padding: 5
    },
    joke: {
        textAlign: 'center',
        paddingVertical: 5,
        fontWeight: 'bold',
    },
})
