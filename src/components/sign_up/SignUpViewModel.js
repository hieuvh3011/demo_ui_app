import {useState} from 'react';
import {goBack} from '@app/navigation/NavigatorHelper';

const SignUpViewModel = props => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isReady, setReady] = useState(false);
  const [isSuccess, setSuccess] = useState(false);

  const onChangeEmail = text => {
    setEmail(text);
    checkReady();
  };

  const onChangePassword = text => {
    setPassword(text);
    checkReady();
  };

  const onChangeConfirm = text => {
    setConfirmPassword(text);
    checkReady();
  };

  const onPressRegister = () => {
    setSuccess(true);
  };

  const onPressCloseModal = () => {
    setSuccess(false);
    goBack();
  };

  const checkReady = () => {
    if (email !== '' && password !== '' && confirmPassword !== '') {
      setReady(true);
    } else {
      setReady(false);
    }
  };

  const clearEmail = () => onChangeEmail('');
  const clearPassword = () => onChangePassword('');
  const clearConfirm = () => onChangeConfirm('');

  return {
    email,
    password,
    confirmPassword,
    isReady,
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
  };
};

export default SignUpViewModel;
