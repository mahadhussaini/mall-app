// import React from 'react';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import { NavigationContainer } from '@react-navigation/native';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import Home from '../screens/Home/Home.screen';
// import Profile from '../screens/Profile/Profile.screen';
// import Icon from 'react-native-vector-icons/Ionicons';
// import AntDesignIcon from 'react-native-vector-icons/AntDesign';
// import Splash_Screen from '../screens/WelcomeScreen/SplashScreen';
// import Get_Started from '../screens/WelcomeScreen/Get_Started';

// const Stack = createNativeStackNavigator();
// const Tab = createBottomTabNavigator();

// function MyTabs() {
//   return (
//     <Tab.Navigator>
//       <Tab.Screen
//         name="Splash_Screen"
//         component={Splash_Screen}
//         options={{
//           headerShown: false,
//           tabBarIcon: ({ color }: any) => {
//             return <Icon name={'home-outline'} size={25} color={color} />;
//           },
//         }}
//       />
//       <Tab.Screen
//         name="Get_Started"
//         component={Get_Started}
//         options={{
//           headerShown: false,
//           tabBarIcon: ({ color }: any) => {
//             return <Icon name={'finger-print-sharp'} size={25} color={color} />;
//           },
//         }}
//       />
//     </Tab.Navigator>
//   );
// }

// const MainNavigation = () => {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator screenOptions={{ headerShown: false }}>
//         <Stack.Screen
//           name="HomeBase"
//           options={{ headerShown: false }}
//           component={MyTabs}
//         />
//         {/* add your another screen here using -> Stack.Screen */}
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// };

// export default MainNavigation;
