// import React, { useContext, useEffect } from 'react';
// import { NavigationContainer } from '@react-navigation/native';
// import UserNavigation from '../user/navigations/UserNavigation';
// import MainNavigation from '../main/navigations/MainNavigation';
// import { useSelector } from 'react-redux';
// import { SafeAreaView, StatusBar, View } from 'react-native';

// const AppNavigation = () => {
//   // Get the user's login status from Redux state
//   const isLoggedIn = useSelector(state => state.users.isLogin);

//   // Set up the translucent StatusBar
//   useEffect(() => {
//     StatusBar.setTranslucent(true);
//     StatusBar.setBackgroundColor('transparent');
//   }, []);

//   return isLoggedIn ? <MainNavigation /> : <UserNavigation />;
// };

// export default AppNavigation;
