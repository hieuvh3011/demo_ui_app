import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {
  LOGIN_SCREEN, MY_PROFILE_SCREEN,
  RESET_PASSWORD_ENTER_EMAIL_SCREEN,
  RESET_PASSWORD_ENTER_NEW_PASSWORD_SCREEN,
  RESET_PASSWORD_ENTER_OTP_SCREEN,
  SIGN_UP_SCREEN,
  SPLASH_SCREEN,
  TAB_NAVIGATOR,
} from "@app/navigation/ScreenName";
import SplashScreen from '@app/components/splash/SplashScreen';
import LoginScreen from '@app/components/login/LoginScreen';
import TabNavigator from '@app/navigation/TabNavigator';
import {NavigationContainer} from '@react-navigation/native';
import {navigationRef} from '@app/navigation/NavigatorHelper';
import SignUpScreen from '@app/components/sign_up/SignUpScreen';
import EnterEmailScreen from '@app/components/reset_password/EnterEmailScreen';
import EnterOTPScreen from '@app/components/reset_password/EnterOTPScreen';
import EnterNewPasswordScreen from '@app/components/reset_password/EnterNewPasswordScreen';
import MyProfileScreen from "@app/components/profile/MyProfileScreen";

const RootNavigator = () => {
  const Stack = createStackNavigator();

  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator
        screenOptions={{headerShown: false}}
        initialRouteName={TAB_NAVIGATOR}>
        <Stack.Screen name={SPLASH_SCREEN} component={SplashScreen} />
        <Stack.Screen name={LOGIN_SCREEN} component={LoginScreen} />
        <Stack.Screen name={SIGN_UP_SCREEN} component={SignUpScreen} />
        <Stack.Screen
          name={RESET_PASSWORD_ENTER_EMAIL_SCREEN}
          component={EnterEmailScreen}
        />
        <Stack.Screen name={TAB_NAVIGATOR} component={TabNavigator} />
        <Stack.Screen
          name={RESET_PASSWORD_ENTER_OTP_SCREEN}
          component={EnterOTPScreen}
        />
        <Stack.Screen
          name={RESET_PASSWORD_ENTER_NEW_PASSWORD_SCREEN}
          component={EnterNewPasswordScreen}
        />
        <Stack.Screen name={MY_PROFILE_SCREEN} component={MyProfileScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigator;
