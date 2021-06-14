import React from 'react';
import { StyleSheet, Text, TextInput, ImageBackground } from 'react-native';
import { IconButton } from '../components/IconButton';

const networkImageUrl =
  'https://images.unsplash.com/photo-1485550409059-9afb054cada4?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=802&q=80';

export const WriteJokesModal: React.FC = () => {
  return (
    <ImageBackground source={{ uri: networkImageUrl }} style={styles.container}>
      <Text style={styles.title}>Enter your joke below:</Text>
      <TextInput style={styles.input} multiline={true} />
      <IconButton
        onPressFunction={() => console.warn('Submit button pressed!')}
        iconStyles={[styles.submitBtn]}
      >
        <Text style={styles.submitText}>Submit your joke!</Text>
      </IconButton>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: '#1C72E3',
    padding: 5,
    marginVertical: 10,
    borderRadius: 10,
    minWidth: 300,
    minHeight: 100,
    maxHeight: 500,
    backgroundColor: 'white',
    opacity: 0.9,
  },
  submitBtn: {
    borderColor: '#1C72E3',
    borderWidth: 1,
    borderRadius: 50,
    height: 100,
    width: 100,
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  submitText: {
    color: '#1C72E3',
    fontFamily: 'TitilliumWeb-Bold',
    fontSize: 14,
    textAlign: 'center',
  },
  title: {
    fontFamily: 'TitilliumWeb-Bold',
    fontSize: 18,
    color: '#1C72E3',
    backgroundColor: 'white',
  },
});
