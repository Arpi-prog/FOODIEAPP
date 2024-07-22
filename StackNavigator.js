import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import HotelRoom from './screens/HotelRoom';
import OrderData from './screens/OrderData';
import RootNavigation from './screens/RootNavigation'; // Ensure this is the correct path

const Stack = createNativeStackNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
      <Stack.Screen name="HotelRoom" component={HotelRoom} options={{ headerShown: false }} />
      <Stack.Screen name="OrderData" component={OrderData} options={{ headerShown: false }} />
    </Stack.Navigator>
  );
};

export default StackNavigator;
