import React from 'react';
import {View, ScrollView} from 'react-native';
import {ScaledSheet} from 'react-native-size-matters';
import Header from '@app/components/common/Header';
import Colors from '@app/utils/colors';
import I18n from '@app/i18n/i18n';
import SignUpViewModel from '@app/components/sign_up/SignUpViewModel';
import AppButton from '@app/components/common/AppButton';
import AppTextInput from '@app/components/common/AppTextInput';
import AppModal from '@app/components/common/AppModal';
import Loading from '@app/components/common/Loading';

const SignUpScreen = props => {
  const {
    email,
    password,
    confirmPassword,
    onChangeEmail,
    onChangePassword,
    onChangeConfirm,
    checkReady,
    isSuccess,
    onPressCloseModal,
    onPressRegister,
    clearConfirm,
    clearPassword,
    clearEmail,
    emailError,
    passwordError,
    confirmError,
    isLoading,
  } = SignUpViewModel(props);

  const _renderInput = () => {
    return (
      <>
        <AppTextInput
          value={email}
          onChange={onChangeEmail}
          label={I18n.t('register.enter_your_email')}
          containerStyle={styles.input}
          clearContent={clearEmail}
          errorText={emailError}
        />
        <AppTextInput
          value={password}
          onChange={onChangePassword}
          label={I18n.t('register.enter_your_password')}
          containerStyle={styles.input}
          iconName={'key'}
          secureTextEntry={true}
          clearContent={clearPassword}
          errorText={passwordError}
        />
        <AppTextInput
          value={confirmPassword}
          onChange={onChangeConfirm}
          label={I18n.t('register.confirm_your_password')}
          containerStyle={styles.input}
          iconName={'key'}
          secureTextEntry={true}
          clearContent={clearConfirm}
          errorText={confirmError}
        />
      </>
    );
  };

  const _renderButton = () => {
    return (
      <AppButton
        text={I18n.t('register.next')}
        disabled={!checkReady()}
        textColor={checkReady() ? Colors.white : '#FFCA7F'}
        disabledStyle={styles.disableButton}
        onPress={onPressRegister}
        // disabledTextStyle={styles.disableButtonText}
      />
    );
  };

  return (
    <View style={styles.container}>
      <Header centerText={I18n.t('register.create_account')} />
      <ScrollView
        style={styles.scroll}
        keyboardShouldPersistTaps={'handled'}
        showsVerticalScrollIndicator={false}>
        <View style={styles.top} />
        {_renderInput()}
        <View style={styles.padding} />
        {_renderButton()}
      </ScrollView>
      {isSuccess && (
        <AppModal
          successMessage={I18n.t('register.success_message')}
          onPressCloseModal={onPressCloseModal}
        />
      )}
      {isLoading && (
        <Loading loadingText={I18n.t('register.creating_your_account')} />
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
  top: {
    height: '100@vs',
  },
  scroll: {
    width: '100%',
    paddingHorizontal: '15@ms',
  },
  input: {
    marginVertical: '5@vs',
  },
  padding: {
    height: '180@vs',
  },
  disableButton: {
    backgroundColor: Colors.disableButton,
  },
  disableButtonText: {
    color: Colors.primary,
  },
});

export default SignUpScreen;
