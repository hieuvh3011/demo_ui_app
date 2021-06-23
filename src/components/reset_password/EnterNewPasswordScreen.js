import React, {useState} from 'react';
import {View, Text, ScrollView} from 'react-native';
import {ScaledSheet} from 'react-native-size-matters';
import Header from '@app/components/common/Header';
import Colors from '@app/utils/colors';
import I18n from '@app/i18n/i18n';
import {textStyle} from '@app/utils/TextStyles';
import AppTextInput from '@app/components/common/AppTextInput';
import AppButton from '@app/components/common/AppButton';
import Loading from '@app/components/common/Loading';
import AppModal from '@app/components/common/AppModal';
import {navigateToScreenAndReplace} from '@app/navigation/NavigatorHelper';
import {LOGIN_SCREEN} from '@app/navigation/ScreenName';

const EnterNewPasswordScreen = props => {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [confirmError, setConfirmError] = useState('');
  const [isLoading, setLoading] = useState(false);
  const [isSuccess, setSuccess] = useState(false);

  const onChangePassword = text => {
    setPassword(text);
    if (text === '') {
      setPasswordError(I18n.t('error.password_cannot_empty'));
    } else if (text.length < 8) {
      setPasswordError(I18n.t('error.password_need_at_least_8_character'));
    } else {
      setPasswordError('');
    }
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
  };

  const clearPassword = () => onChangePassword('');
  const clearConfirm = () => onChangeConfirm('');

  // Check error, nếu có input error hoặc chưa fill hết 2 field thì button sẽ bị disable
  const checkNoError = () => {
    return !(
      password !== '' &&
      confirmPassword !== '' &&
      passwordError === '' &&
      confirmError === ''
    );
  };

  const onPressNext = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
    setTimeout(() => {
      setSuccess(true);
    }, 2100);
  };

  const closeModal = () => {
    setSuccess(false);
    navigateToScreenAndReplace(LOGIN_SCREEN);
  };

  return (
    <View style={styles.container}>
      <Header
        hasBackLeft={true}
        centerText={I18n.t('reset_password.reset_password')}
      />
      <ScrollView
        style={styles.scroll}
        keyboardShouldPersistTaps={'handled'}
        showsVerticalScrollIndicator={false}>
        <View style={styles.blank100} />
        <Text style={styles.text}>
          {I18n.t('reset_password.enter_new_password')}
        </Text>
        <AppTextInput
          iconName={'key'}
          label={I18n.t('reset_password.enter_your_password')}
          value={password}
          onChange={onChangePassword}
          clearContent={clearPassword}
          containerStyle={styles.input}
          secureTextEntry={true}
          errorText={passwordError}
        />
        <AppTextInput
          iconName={'key'}
          label={I18n.t('reset_password.confirm_your_password')}
          value={confirmPassword}
          onChange={onChangeConfirm}
          clearContent={clearConfirm}
          containerStyle={styles.input}
          secureTextEntry={true}
          errorText={confirmError}
        />
        <View style={styles.blank180} />
        <AppButton
          text={I18n.t('register.next')}
          disabled={checkNoError()}
          onPress={onPressNext}
        />
      </ScrollView>
      {isLoading && (
        <Loading loadingText={I18n.t('reset_password.change_password')} />
      )}
      {isSuccess === true && (
        <AppModal
          visible={true}
          successMessage={I18n.t('reset_password.success_message')}
          onPressCloseModal={closeModal}
        />
      )}
    </View>
  );
};

const styles = ScaledSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: Colors.background,
  },
  scroll: {
    width: '100%',
    paddingHorizontal: '15@ms',
  },
  blank100: {
    height: '100@vs',
  },
  blank180: {
    height: '180@vs',
  },
  text: {
    ...textStyle.h3_primary,
    marginVertical: '5@vs',
  },
  input: {
    marginVertical: '5@vs',
  },
});

export default EnterNewPasswordScreen;
