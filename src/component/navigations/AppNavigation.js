import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';

import MainNavigation from '../main/navigations/MainNavigation';
import UserNavigation from '../user/navigations/UserNavigation';
import OrderNavigation from '../main/order/navigation/OderNavigation';
import OrderDetail from '../main/newOrderDetail/OrderDetail';
const Stack = createNativeStackNavigator();

const AppNavigation = () => {
  return (
    <NavigationContainer>
        <Stack.Navigator
            screenOptions={{
                headerShown: false,
            }}
            initialRouteName="UserNavigation"
        >
            <Stack.Screen name="UserNavigation" component={UserNavigation}           
                options={{
                    presentation: 'modal',
                    animationTypeForReplace: 'push',
                    animation:'slide_from_right'
                    }}
            />
            <Stack.Screen name="MainNavigation" component={MainNavigation}           
                options={{
                    presentation: 'modal',
                    animationTypeForReplace: 'push',
                    animation:'slide_from_right'
                    }}
            />

            
            <Stack.Screen name="OrderNavigations" component={OrderNavigation}           
                options={{
                    presentation: 'modal',
                    // animationTypeForReplace: 'push',
                    animation:'fade'
                    }}
            />
            <Stack.Screen name="OrderDetail" component={OrderDetail}           
                options={{
                    presentation: 'modal',
                    // animationTypeForReplace: 'push',
                    animation:'fade'
                    }}
            />
        </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigation;
