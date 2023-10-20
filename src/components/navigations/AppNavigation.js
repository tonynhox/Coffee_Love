import React, { useEffect } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';

import MainNavigation from './MainNavigation';
import UserNavigation from './UserNavigation';
import ProductDetail from '../others/product/ProductDetail';
import Search from '../others/search/Search';
import SearchSuccess from '../others/search/SearchSuccess';
import Notification from '../others/notification/Notification';
import Orders from '../others/oders/Orders';
import WheelOfFortune from '../others/wheelOfFortune/WheelOfFortune';
import OrderDetail from '../others/orderDetail/OrderDetail';
import EditProfile from '../others/editProfile/EditProfile';
import AddAddress from '../others/addAddress/AddAddress';
import MyAddress from '../others/myAdddress/MyAddress';
import ToRate from '../others/toRate/ToRate';
import Changepassword from '../others/changepassword/Changepassword';
import { useDispatch } from 'react-redux';
import { getCategoryFetch } from '../../redux/reducers/slices/categoriesSlice';
import { getTopOrderFetch } from '../../redux/reducers/slices/topOrderSlice';
import { getProductAllFetch } from '../../redux/reducers/slices/productSlice';
const Stack = createNativeStackNavigator();

const AppNavigation = () => {

    const dispatch = useDispatch();

    //get api khi vào app
    useEffect(() => {
        console.log('AppNavigation');
        dispatch(getCategoryFetch());
        dispatch(getTopOrderFetch())
        dispatch(getProductAllFetch())
        
    }, []);

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



            <Stack.Screen name="ProductDetail" component={ProductDetail}
                options={{
                    presentation: 'modal',
                    animationTypeForReplace: 'push',
                    animation:'slide_from_bottom'
                    }}
            />

            <Stack.Screen name="Search" component={Search}
                options={{
                    presentation: 'modal',
                    // animationTypeForReplace: 'push',
                    animation:'fade'
                    }}
            />
            <Stack.Screen name="SearchSuccess" component={SearchSuccess}
                options={{
                    presentation: 'modal',
                    // animationTypeForReplace: 'push',
                    animation:'fade'
                    }}
            />

            <Stack.Screen name="Notification" component={Notification}
                options={{
                    presentation: 'modal',
                    // animationTypeForReplace: 'push',
                    animation:'fade'
                    }}
            />

            <Stack.Screen name="Orders" component={Orders}
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

                <Stack.Screen name="WheelOfFortune" component={WheelOfFortune}
                    options={{
                        presentation: 'modal',
                        // animationTypeForReplace: 'push',
                        animation:'fade'
                        }}
                />  

                <Stack.Screen name="EditProfile" component={EditProfile}
                    options={{
                        presentation: 'modal',
                        // animationTypeForReplace: 'push',
                        animation:'fade'
                        }}
                />  
                 <Stack.Screen name="Changepassword" component={Changepassword}
                    options={{
                        presentation: 'modal',
                        // animationTypeForReplace: 'push',
                        animation:'fade'
                        }}
                />  
                <Stack.Screen name="AddAddress" component={AddAddress}
                    options={{
                        presentation: 'modal',
                        // animationTypeForReplace: 'push',
                        animation:'fade'
                        }}
                />  
                <Stack.Screen name="MyAddress" component={MyAddress}
                    options={{
                        presentation: 'modal',
                        // animationTypeForReplace: 'push',
                        animation:'fade'
                        }}
                />  
                <Stack.Screen name="ToRate" component={ToRate}
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
