import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import Welcome from '../user/welcome/Welcome';
import Welcome1 from '../user/welcome1/Welcome1';
import Login from '../user/login/Login';
import Forgotpassword from '../user/forgotpassword/Forgotpassword';
import SignUp from '../user/signUp/SignUp';
import Otp from '../user/otp/Otp';
import Newpassword from '../user/newpassword/Newpassword';
const Stack = createNativeStackNavigator();

const UserNavigation = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Welcome" component={Welcome}
        options={{
            presentation: 'modal',
            animationTypeForReplace: 'push',
            animation:'slide_from_right'
            }}
        />
      <Stack.Screen name="Welcome1" component={Welcome1}
        options={{
            presentation: 'modal',
            animationTypeForReplace: 'push',
            animation:'slide_from_right'
            }}
        />
      <Stack.Screen name="Login" component={Login}           
        options={{
            presentation: 'modal',
            animationTypeForReplace: 'push',
            animation:'slide_from_right'
            }} 
        />
      <Stack.Screen name="ForgotPassword" component={Forgotpassword}           
        options={{
            presentation: 'modal',
            animationTypeForReplace: 'push',
            animation:'slide_from_right'
            }}
        />
              <Stack.Screen name="SignUp" component={SignUp}           
        options={{
            presentation: 'modal',
            animationTypeForReplace: 'push',
            animation:'slide_from_right'
            }}
        />
        <Stack.Screen name="Otp" component={Otp}           
          options={{
              presentation: 'modal',
              animationTypeForReplace: 'push',
              animation:'slide_from_right'
              }}
        />
        <Stack.Screen name="Newpassword" component={Newpassword}           
          options={{
              presentation: 'modal',
              animationTypeForReplace: 'push',
              animation:'slide_from_right'
              }}
        />
        
        

    </Stack.Navigator>
  );
};

export default UserNavigation;
