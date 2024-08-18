import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Animated, Dimensions, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AsyncStorage from '@react-native-async-storage/async-storage';

// Import your screens
import FirstInner from '../screens/Mall_Inner_Screens/FirstInner';
import Mall_Success_Screen from '../screens/Mall_Auth_Screens/Mall_Success_Screen';
import Splash_Second from '../screens/Mall_Splash_Screens/Splash_Second';
import Splash_Third from '../screens/Mall_Splash_Screens/Splash_Third';
import Mall_Login from '../screens/Mall_Auth_Screens/Mall_Login';
import Mall_Signup from '../screens/Mall_Auth_Screens/Mall_Signup';
import Add_to_cart from '../screens/Mall_Inner_Screens/Add_to_cart';
import Pay_Now from '../screens/Mall_Inner_Screens/Pay_Now';
import Parking from '../screens/Mall_Inner_Screens/Parking';
import Splash_Four from '../screens/Mall_Splash_Screens/Splash_Four';
import Splash from '../screens/Mall_Splash_Screens/Splash';

const { width } = Dimensions.get('window');
const tabWidth = width / 4;

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function CustomTabBar({ state, descriptors, navigation }) {
  const translateValue = React.useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.spring(translateValue, {
      toValue: state.index * tabWidth,
      useNativeDriver: true,
    }).start();
  }, [state.index]);

  return (
    <View style={styles.tabBar}>
      <Animated.View style={[styles.floatingCircle, { transform: [{ translateX: translateValue }] }]}>
        <View style={styles.imageContainer}>
          <Image
            source={{ uri: 'https://peopleforliving.appssols.com/images/orange.png' }}
            style={styles.circleImage}
          />
          <View style={styles.iconContainer}>
            <Ionicons name={getIconName(state.routes[state.index].name)} size={28} color="white" />
          </View>
        </View>
      </Animated.View>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        const iconName = getIconName(route.name);

        return (
          <TouchableOpacity
            key={route.key}
            accessibilityRole="button"
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={styles.tab}
          >
            <Ionicons name={isFocused ? iconName : `${iconName}-outline`} size={24} style={{ opacity: isFocused ? 0 : 1 }} color={isFocused ? 'orange' : 'gray'} />
            <Text style={{ color: isFocused ? 'orange' : 'gray', fontSize: 12, opacity: isFocused ? 0 : 1 }}>
              {route.name}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

function getIconName(routeName) {
  switch (routeName) {
    case 'Home':
      return 'home';
    case 'Food Court':
      return 'fast-food';
    case 'Parking':
      return 'car';
    case 'Cart':
      return 'cart';
    default:
      return 'home';
  }
}

function HomeStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="HomeScreen" component={FirstInner} />
      <Stack.Screen name="Pay_Now" component={Pay_Now} />
    </Stack.Navigator>
  );
}

function FoodCourtStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="FoodCourtScreen" component={Mall_Success_Screen} />
    </Stack.Navigator>
  );
}

function ParkingStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="ParkingScreen" component={Splash_Second} />
    </Stack.Navigator>
  );
}

function CartStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="CartScreen" component={Add_to_cart} />
    </Stack.Navigator>
  );
}

interface AuthStackProps {
  setUserIsAuthenticated: React.Dispatch<React.SetStateAction<boolean>>;
}

const AuthStack: React.FC<AuthStackProps> = ({ setUserIsAuthenticated }) => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Splash" component={Splash} />
      <Stack.Screen name="Splash_Second" component={Splash_Second} />
      <Stack.Screen name="Splash_Third" component={Splash_Third} />
      <Stack.Screen name="Splash_Four" component={Splash_Four} />




      <Stack.Screen name="Mall_Signup">
        {props => <Mall_Signup {...props} setUserIsAuthenticated={setUserIsAuthenticated} />}
      </Stack.Screen>
      <Stack.Screen name="Mall_Login">
        {props => <Mall_Login {...props} setUserIsAuthenticated={setUserIsAuthenticated} />}
      </Stack.Screen>
    </Stack.Navigator>
  );
};

export default function MainNavigation() {
  const [userIsAuthenticated, setUserIsAuthenticated] = useState(false);

  useEffect(() => {
    const checkUserId = async () => {
      try {
        const userId = await AsyncStorage.getItem('userId');
        console.log(userId, "NEW NAV LOGIN");
        setUserIsAuthenticated(userId !== null);
      } catch (error) {
        console.error('Error retrieving user ID from AsyncStorage:', error);
      }
    };

    checkUserId();
  }, []);

  return (
    <NavigationContainer>
      {userIsAuthenticated ? (
        <Tab.Navigator tabBar={props => <CustomTabBar {...props} />} screenOptions={{ headerShown: false }}>
          <Tab.Screen name="Home" component={HomeStack} />
          <Tab.Screen name="Food Court" component={HomeStack} />
          <Tab.Screen name="Parking" component={Parking} />
          <Tab.Screen name="Cart" component={CartStack} />
        </Tab.Navigator>
      ) : (
        <AuthStack setUserIsAuthenticated={setUserIsAuthenticated} />
      )}
    </NavigationContainer>
  );
}
const styles = StyleSheet.create({
  tabBar: {
    flexDirection: 'row',
    height: 80,
    backgroundColor: '#fff5cc',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elevation: 5,
    justifyContent: 'space-between',
    paddingHorizontal: 20,
  },
  tab: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  floatingCircle: {
    position: 'absolute',
    top: -40,
    width: tabWidth,
    alignItems: 'center',
  },
  imageContainer: {
    alignItems: 'center',
    position: 'relative',
  },
  circleImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  iconContainer: {
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
  },
});
