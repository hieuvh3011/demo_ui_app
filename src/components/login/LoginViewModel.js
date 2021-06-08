import React, {useState, useRef} from 'react';
import {
  navigateToScreen,
  navigateToScreenAndReplace,
} from '@app/navigation/NavigatorHelper';
import {
  HOME_SCREEN,
  RESET_PASSWORD_ENTER_EMAIL_SCREEN,
  SIGN_UP_SCREEN,
  TAB_NAVIGATOR,
} from '@app/navigation/ScreenName';
import {inputError} from '@app/utils/error';
import I18n from '@app/i18n/i18n';
import {isEmail} from '@app/utils/validator';
import {Alert} from 'react-native';

const emailCannotEmpty = {
  type: inputError.email.email_cannot_empty,
  text: I18n.t('error.email_cannot_empty'),
};
const incorrectFormat = {
  type: inputError.email.incorrect_format_email,
  text: I18n.t('error.email_is_incorrect_format'),
};
const passwordCannotEmpty = {
  type: inputError.password.password_cannot_empty,
  text: I18n.t('error.password_cannot_empty'),
};

const LoginViewModel = props => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setLoading] = useState(false);

  //errorList để chứa danh sách các lỗi hiển thị lên màn hình
  const [errorList, setErrorList] = useState([]);

  // emailError và passwordError dùng để cho AppTextInput lắng nghe,
  // nếu bằng false thì background bình thường,
  // bằng true thì đổi màu background của Text Input
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

  const addErrorToList = (errorItem, originalErrorList = [...errorList]) => {
    const errorIndex = originalErrorList.findIndex(
      item => item.type === errorItem.type,
    );
    if (errorIndex === -1) {
      originalErrorList.push(errorItem);
    }
    console.log('errorList = ', originalErrorList);
    return originalErrorList;
  };

  const removeErrorFromList = (
    errorItem,
    originalErrorList = [...errorList],
  ) => {
    // const originalErrorList = [...errorList];
    const errorIndex = originalErrorList.findIndex(
      item => item.type === errorItem.type,
    );
    if (errorIndex > -1) {
      originalErrorList.splice(errorIndex, 1);
    }
    return originalErrorList;
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
    errorList,
    isLoading,
  };
};

export default LoginViewModel;
