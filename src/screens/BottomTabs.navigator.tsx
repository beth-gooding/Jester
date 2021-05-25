import React from 'react';
import { Text } from 'react-native';
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
                tabBarActiveTintColor: '#1D84B5',
                tabBarInactiveTintColor: '#8E9AAF',  
                tabBarShowLabel: false,          
                tabBarIcon: ({ color, size }) => {
                if (route.name === 'NewJokes') {
                    return <AddJokeIcon size={size} color={color}/>
                } 
                if (route.name === 'SavedJokes') {
                    return <SavedJokeIcon size={size} color={color}/>
                } 
                if (route.name === 'Stats') {
                    return <StatsIcon size={size} color={color}/>
                }
                return null;
            }}

        }}>
            <Tab.Screen 
                name="NewJokes"
                component={NewJokesTab}
                options={{ title: "Add New Jokes" }}
            /> 
            <Tab.Screen 
                name="SavedJokes" 
                component={SavedJokesTab}
                options={{ title: "Your Saved Jokes" }} 
            />
            <Tab.Screen 
                name="Stats" 
                component={StatsTab}
                options={{ title: "Your Joke Stats" }}
            />       
        </Tab.Navigator>
    );
}
