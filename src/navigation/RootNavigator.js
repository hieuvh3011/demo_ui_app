import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {
  LOGIN_SCREEN,
  SPLASH_SCREEN,
  TAB_NAVIGATOR,
} from '@app/navigation/ScreenName';
import SplashScreen from '@app/components/splash/SplashScreen';
import LoginScreen from '@app/components/login/LoginScreen';
import TabNavigator from '@app/navigation/TabNavigator';
import {NavigationContainer} from '@react-navigation/native';
import {navigationRef} from '@app/navigation/NavigatorHelper';

const RootNavigator = () => {
  const Stack = createStackNavigator();

  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator
        screenOptions={{headerShown: false}}
        initialRouteName={SPLASH_SCREEN}>
        <Stack.Screen name={SPLASH_SCREEN} component={SplashScreen} />
        <Stack.Screen name={LOGIN_SCREEN} component={LoginScreen} />
        <Stack.Screen name={TAB_NAVIGATOR} component={TabNavigator} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigator;
