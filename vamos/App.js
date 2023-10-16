import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './src/screens/HomeScreen';
import Icon from 'react-native-vector-icons/Ionicons';


const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          name="VAMOS"
          component={HomeScreen}
          options={{
            tabBarLabel: 'Home',
            // Define your icon here
            tabBarIcon: ({ color, size }) => (
              <Icon name="home" color={color} size={size} /* your icon props */ />
            ),
          }}
        />
     
      </Tab.Navigator>
    </NavigationContainer>
  );
}