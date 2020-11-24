import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import CustomTabBar from '../components/CustomTabBar';

import Home from '../screen/Home';
import Search from '../screen/Search';
import Appointments from '../screen/Appointments';
import Favorites from '../screen/Favorites';
import Profile from '../screen/Profile';

const Tab = createBottomTabNavigator();


export default () => (
    <Tab.Navigator tabBar={props=><CustomTabBar {...props}/>}>
        <Tab.Screen name='Home' component={Home}/>
        <Tab.Screen name='Search' component={Search}/>
        <Tab.Screen name='Appointments' component={Appointments}/>
        <Tab.Screen name='Favorites' component={Favorites}/>
        <Tab.Screen name='Profile' component={Profile}/>
    </Tab.Navigator>
);