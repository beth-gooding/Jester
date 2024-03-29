import React, {
  createContext,
  useContext,
  useState,
  useCallback,
  useEffect,
} from 'react';
import { JokeWithTimeStamp, AppData } from './types';
import AsyncStorage from '@react-native-async-storage/async-storage';

type AppContextType = {
  joke: string;
  handleFetchNewJoke: () => void;
  handleSave: (joke: string) => void;
  handleDeleteJoke: (joke: JokeWithTimeStamp) => void;
  savedJokes: JokeWithTimeStamp[];
};

const defaultValue = {
  joke: '',
  handleFetchNewJoke: () => {},
  handleSave: () => {},
  handleDeleteJoke: () => {},
  savedJokes: [],
};

const AppContext = createContext<AppContextType>(defaultValue);

const storageKey = 'Joke-Jenerator-Data';

const getAppData = async (): Promise<AppData | null> => {
  try {
    const data = await AsyncStorage.getItem(storageKey);

    if (data) {
      return JSON.parse(data);
    }
    return null;
  } catch {
    return null;
  }
};

const setAppData = async (newData: AppData) => {
  try {
    await AsyncStorage.setItem(storageKey, JSON.stringify(newData));
  } catch {}
};

export const AppProvider: React.FC = ({ children }) => {
  const [savedJokes, setSavedJokes] = useState<JokeWithTimeStamp[]>([]);
  const [joke, setJoke] = useState<string>('');
  const handleFetchNewJoke = useCallback(async () => {
    const res = await fetch('https://icanhazdadjoke.com/', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        'User-Agent':
          'My Library (https://github.com/beth-gooding/JokeJenerator)',
      },
    });
    const newJoke = await res.json();
    if (res.ok) {
      setJoke(newJoke.joke);
    }
  }, []);

  const handleSave = useCallback(
    (jokeToSave: string) => {
      const updatedJokes = [
        { joke: jokeToSave, timestamp: Date.now() },
        ...savedJokes,
      ];
      setSavedJokes(updatedJokes);
      setAppData({ jokes: updatedJokes });
      handleFetchNewJoke();
    },
    [handleFetchNewJoke, savedJokes],
  );

  const handleDeleteJoke = useCallback((jokeToDelete: JokeWithTimeStamp) => {
    setSavedJokes((current) => {
      const newSavedJokes = current.filter(
        (item) => item.timestamp !== jokeToDelete.timestamp,
      );
      setAppData({ jokes: newSavedJokes });
      return newSavedJokes;
    });
  }, []);

  useEffect(() => {
    const getDataFromStorage = async () => {
      const data = await getAppData();

      if (data) {
        setSavedJokes(data.jokes);
      }
    };
    getDataFromStorage();
  }, []);
  return (
    <AppContext.Provider
      value={{
        joke,
        handleFetchNewJoke,
        handleSave,
        handleDeleteJoke,
        savedJokes,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => useContext(AppContext);
