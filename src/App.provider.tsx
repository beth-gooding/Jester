import React, { createContext, useContext, useState, useCallback } from "react";

type AppContextType = {
  joke: string,
  handleFetchNewJoke: () => void;
  handleSave: () => void;
  savedJokes: string[];
};

const defaultValue = {
  joke: "",
  handleFetchNewJoke: () => {},
  handleSave: () => {},
  savedJokes: [],
};

const AppContext = createContext<AppContextType>(defaultValue);

export const AppProvider: React.FC = ({ children }) => {
  const [savedJokes, setSavedJokes] = useState([]);
  const [joke, setJoke] = useState('');
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

  const handleSave = () => {
    setSavedJokes([joke, ...savedJokes]);
    handleFetchNewJoke();
}
  return (
    <AppContext.Provider value={{ joke, handleFetchNewJoke, handleSave, savedJokes }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => useContext(AppContext);
