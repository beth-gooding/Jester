import React from 'react';
import { StyleSheet, View, Text, TextInput } from 'react-native';
import { IconButton } from '../components/IconButton';

export const WriteJokesModal: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text>This is my modal where the user can write new jokes</Text>
      <TextInput style={styles.input} multiline={true} />
      <IconButton onPressFunction={() => null} iconStyles={[styles.submitBtn]}>
        <Text>Submit your joke!</Text>
      </IconButton>
    </View>
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
    width: 300,
  },
  submitBtn: {
    borderColor: '#1C72E3',
    borderWidth: 2,
  },
});
