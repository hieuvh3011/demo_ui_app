import * as React from 'react';
import {
  CommonActions,
  StackActions,
  NavigationContainerRef,
} from '@react-navigation/native';
import {HOME_SCREEN, LOGIN_SCREEN} from '@app/navigation/ScreenName';

export const navigationRef: React.RefObject<NavigationContainerRef> =
  React.createRef();

export function navigateToScreen(name: string, params = {}) {
  navigationRef.current?.navigate(name, params);
}

export function navigateToScreenAndReplace(name: string, params = {}) {
  navigationRef.current?.dispatch(StackActions.replace(name, params));
}

export function popToTop() {
  navigationRef.current?.dispatch(StackActions.popToTop());
}

export function pop(number = 1) {
  navigationRef.current?.dispatch(StackActions.pop(number));
}

export function goBack() {
  navigationRef.current?.goBack();
}

export const backToLogin = () => {
  navigationRef?.current?.dispatch(
    CommonActions.reset({
      index: 1,
      routes: [{name: LOGIN_SCREEN}],
    }),
  );
};

export const backToHome = () => {
  navigationRef?.current?.dispatch(
    CommonActions.reset({
      index: 1,
      routes: [{name: HOME_SCREEN}],
    }),
  );
};
