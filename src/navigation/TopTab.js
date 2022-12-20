
import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Home1 from '../screen/Home1';
import Home from '../screen/Home';
const Tab = createMaterialTopTabNavigator();

const TopTab = () => {
  return (
    <Tab.Navigator screenOptions={{
      tabBarActiveTintColor: '#000',
      tabBarLabelStyle: { fontSize: 12 },
      tabBarStyle: { backgroundColor: 'red' },
      tabBarInactiveTintColor: '#fff',
    }}>
      <Tab.Screen name="Home1" component={Home1} />
      <Tab.Screen name='Home' component={Home} />
    </Tab.Navigator>
  );
}
export default TopTab;