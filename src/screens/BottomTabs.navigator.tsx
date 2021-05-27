import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NewJokesTab } from './NewJokesTab.screen';
import { SavedJokesTab } from './SavedJokesTab.screen';
import { StatsTab } from './StatsTab.screen';
import { AddJokeIcon } from '../components/AddJoke.icon';
import { SavedJokeIcon } from '../components/SavedJokes.icon';
import { StatsIcon } from '../components/Stats.icon';

const Tab = createBottomTabNavigator();

export const BottomTabs: React.FC = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => {
        return {
          tabBarActiveTintColor: '#febd00',
          tabBarInactiveTintColor: '#a0c4f3',
          tabBarShowLabel: false,
          headerTitleAlign: 'center',
          headerTitleStyle: { fontFamily: 'TitilliumWeb-Bold' },
          tabBarIcon: ({ color, size }) => {
            if (route.name === 'NewJokes') {
              return <AddJokeIcon size={size} color={color} />;
            }
            if (route.name === 'SavedJokes') {
              return <SavedJokeIcon size={size} color={color} />;
            }
            if (route.name === 'Stats') {
              return <StatsIcon size={size} color={color} />;
            }
            return null;
          },
        };
      }}
    >
      <Tab.Screen
        name="NewJokes"
        component={NewJokesTab}
        options={{ title: 'New Jokes' }}
      />
      <Tab.Screen
        name="SavedJokes"
        component={SavedJokesTab}
        options={{ title: 'Saved Jokes' }}
      />
      <Tab.Screen
        name="Stats"
        component={StatsTab}
        options={{ title: 'Joke Stats' }}
      />
    </Tab.Navigator>
  );
};
