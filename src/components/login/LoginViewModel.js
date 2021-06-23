import React, {useState, useRef} from 'react';
import {
  navigateToScreen,
  navigateToScreenAndReplace,
} from '@app/navigation/NavigatorHelper';
import {
  RESET_PASSWORD_ENTER_EMAIL_SCREEN,
  SIGN_UP_SCREEN,
  TAB_NAVIGATOR,
} from '@app/navigation/ScreenName';
import I18n from '@app/i18n/i18n';
import {isEmail} from '@app/utils/validator';
import {GoogleSignin} from '@react-native-google-signin/google-signin';

GoogleSignin.configure({
  webClientId:
    '305307018718-v9ahao0r1savr0rj9s429cqnu2iv89jg.apps.googleusercontent.com',
});

const LoginViewModel = props => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [isLoading, setLoading] = useState(false);
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const goToHomeScreen = () => navigateToScreenAndReplace(TAB_NAVIGATOR);

  const goToSignUp = () => navigateToScreen(SIGN_UP_SCREEN);

  const goToResetPassword = () =>
    navigateToScreen(RESET_PASSWORD_ENTER_EMAIL_SCREEN);

  const onChangeEmail = text => {
    setEmail(text);
    if (text === '') {
      setEmailError(I18n.t('error.email_cannot_empty'));
    } else if (text !== '' && !isEmail(text)) {
      setEmailError(I18n.t('error.email_is_incorrect_format'));
    } else {
      setEmailError('');
    }
  };

  const onChangePassword = text => {
    setPassword(text);
    if (text === '') {
      setPasswordError(I18n.t('error.password_cannot_empty'));
    } else {
      setPasswordError('');
    }
  };

  const clearEmail = () => onChangeEmail('');
  const clearPassword = () => onChangePassword('');

  const _checkInputEmpty = () => {
    if (email === '') {
      setEmailError(I18n.t('error.email_cannot_empty'));
    }
    if (password === '') {
      setPasswordError(I18n.t('error.password_cannot_empty'));
    }
  };

  const onPressLogin = async () => {
    _checkInputEmpty();
    if (
      email !== '' &&
      password !== '' &&
      emailError === '' &&
      passwordError === ''
    ) {
      setLoading(true);
      await setTimeout(() => {
        setLoading(false);
        // Alert.alert('Error', 'Your email and password is not match');
        navigateToScreenAndReplace(TAB_NAVIGATOR);
      }, 2000);
    }
  };

  const onPressLoginGoogle = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      const userInfo = await GoogleSignin.signIn();
      console.log('userInfo = ', userInfo);
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
        navigateToScreen(TAB_NAVIGATOR);
      }, 2000);
    } catch (error) {
      console.log('onPressLoginGoogle error = ', error);
    }
  };

  return {
    email,
    password,
    emailError,
    passwordError,
    goToResetPassword,
    goToSignUp,
    goToHomeScreen,
    onChangeEmail,
    onChangePassword,
    clearEmail,
    clearPassword,
    onPressLogin,
    isLoading,
    onPressLoginGoogle,
  };
};

export default LoginViewModel;
