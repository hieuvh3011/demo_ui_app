import {useState} from 'react';
import {goBack} from '@app/navigation/NavigatorHelper';
import I18n from '@app/i18n/i18n';
import {isEmail} from '@app/utils/validator';

const SignUpViewModel = props => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isSuccess, setSuccess] = useState(false);
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [confirmError, setConfirmError] = useState('');
  const [isLoading, setLoading] = useState(false);

  const onChangeEmail = text => {
    setEmail(text);
    if (text === '') {
      setEmailError(I18n.t('error.email_cannot_empty'));
    } else if (!isEmail(text)) {
      setEmailError(I18n.t('error.email_is_incorrect_format'));
    } else {
      setEmailError('');
    }
    checkReady();
  };

  const onChangePassword = text => {
    setPassword(text);
    if (text === '') {
      setPasswordError(I18n.t('error.password_cannot_empty'));
    } else if (text.length < 8) {
      setPasswordError(I18n.t('error.password_need_at_least_8_character'));
    } else {
      setPasswordError('');
    }
    checkReady();
  };

  const onChangeConfirm = text => {
    setConfirmPassword(text);
    if (text === '') {
      setConfirmError(I18n.t('error.confirm_cannot_empty'));
    } else if (text !== password) {
      setConfirmError(I18n.t('error.password_confirm_not_match'));
    } else {
      setConfirmError('');
    }
    checkReady();
  };

  const onPressRegister = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
    setTimeout(() => {
      setSuccess(true);
    }, 2100);
  };

  const onPressCloseModal = () => {
    setSuccess(false);
    goBack();
  };

  const checkReady = () => {
    return (
      email !== '' &&
      password !== '' &&
      confirmPassword !== '' &&
      emailError === '' &&
      passwordError === '' &&
      confirmError === ''
    );
  };

  const clearEmail = () => onChangeEmail('');
  const clearPassword = () => onChangePassword('');
  const clearConfirm = () => onChangeConfirm('');

  return {
    email,
    password,
    confirmPassword,
    onChangeEmail,
    onChangeConfirm,
    onChangePassword,
    checkReady,
    isSuccess,
    onPressRegister,
    onPressCloseModal,
    clearEmail,
    clearPassword,
    clearConfirm,
    emailError,
    passwordError,
    confirmError,
    isLoading,
  };
};

export default SignUpViewModel;
