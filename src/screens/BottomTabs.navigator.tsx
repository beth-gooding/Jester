import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NewJokesTab } from './NewJokesTab.screen';
import { SavedJokesTab } from './SavedJokesTab.screen';
import { StatsTab } from './StatsTab.screen';
const Tab = createBottomTabNavigator();

export const BottomTabs: React.FC = () => {
    return (
        <Tab.Navigator>
            <Tab.Screen name="NewJokes" component={NewJokesTab} /> 
            <Tab.Screen name="SavedJokes" component={SavedJokesTab} />
            <Tab.Screen name="Stats" component={StatsTab} />       
        </Tab.Navigator>
    );
}
