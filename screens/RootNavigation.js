import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AuthNavigation from '../LoginSignupScreens/AuthNavigation'; // Adjusted path

const Stack = createNativeStackNavigator();

const RootNavigation = () => {
  return (
    <AuthNavigation />
  );
};

export default RootNavigation;



