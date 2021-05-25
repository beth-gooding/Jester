import React from 'react';
import { Text } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NewJokesTab } from './NewJokesTab.screen';
import { SavedJokesTab } from './SavedJokesTab.screen';
import { StatsTab } from './StatsTab.screen';
import { AddJokeIcon } from '../components/AddJoke.icon';
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
                } else {
                return <Text>{route.name}</Text>
                }
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
