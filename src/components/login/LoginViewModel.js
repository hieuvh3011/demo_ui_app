import React, {useState} from 'react';
import {
  navigateToScreen,
  navigateToScreenAndReplace,
} from '@app/navigation/NavigatorHelper';
import {
  RESET_PASSWORD_ENTER_EMAIL_SCREEN,
  SIGN_UP_SCREEN,
  TAB_NAVIGATOR,
} from '@app/navigation/ScreenName';

const LoginViewModel = props => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const goToHomeScreen = () => navigateToScreenAndReplace(TAB_NAVIGATOR);

  const goToSignUp = () => navigateToScreen(SIGN_UP_SCREEN);

  const goToResetPassword = () =>
    navigateToScreen(RESET_PASSWORD_ENTER_EMAIL_SCREEN);

  const onChangeEmail = text => {
    setEmail(text);
  };

  const clearEmail = () => setEmail('');
  const clearPassword = () => setPassword('');

  const onChangePassword = text => {
    setPassword(text);
  };

  return {
    email,
    password,
    goToResetPassword,
    goToSignUp,
    goToHomeScreen,
    onChangeEmail,
    onChangePassword,
    clearEmail,
    clearPassword,
  };
};

export default LoginViewModel;
