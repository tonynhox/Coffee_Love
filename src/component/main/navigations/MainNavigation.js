import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../home/Home';

const Stack = createNativeStackNavigator();

const MainNavigation = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >

        <Stack.Screen name="Home" component={Home}           
          options={{
              presentation: 'modal',
              animationTypeForReplace: 'push',
              animation:'slide_from_right'
              }}
        />
        

    </Stack.Navigator>
  );
};

export default MainNavigation;
