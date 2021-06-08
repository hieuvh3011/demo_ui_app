import React from 'react';
import {View, ScrollView} from 'react-native';
import {ScaledSheet} from 'react-native-size-matters';
import Header from '@app/components/common/Header';
import Colors from '@app/utils/colors';
import I18n from '@app/i18n/i18n';
import SignUpViewModel from '@app/components/sign_up/SignUpViewModel';
import AppButton from '@app/components/common/AppButton';
import AppTextInput from '@app/components/common/AppTextInput';
import ModalSuccess from '@app/components/common/ModalSuccess';

const SignUpScreen = props => {
  const {
    email,
    password,
    confirmPassword,
    onChangeEmail,
    onChangePassword,
    onChangeConfirm,
    isReady,
    isSuccess,
    onPressCloseModal,
    onPressRegister,
    clearConfirm,
    clearPassword,
    clearEmail,
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
        />
        <AppTextInput
          value={password}
          onChange={onChangePassword}
          label={I18n.t('register.enter_your_password')}
          containerStyle={styles.input}
          iconName={'key'}
          isPassword={true}
          clearContent={clearPassword}
        />
        <AppTextInput
          value={confirmPassword}
          onChange={onChangeConfirm}
          label={I18n.t('register.confirm_your_password')}
          containerStyle={styles.input}
          iconName={'key'}
          isPassword={true}
          clearContent={clearConfirm}
        />
      </>
    );
  };

  const _renderButton = () => {
    return (
      <AppButton
        text={I18n.t('register.next')}
        disabled={!isReady}
        textColor={isReady ? Colors.white : '#FFCA7F'}
        disabledStyle={styles.disableButton}
        onPress={onPressRegister}
        // disabledTextStyle={styles.disableButtonText}
      />
    );
  };

  return (
    <View style={styles.container}>
      <Header centerText={I18n.t('register.create_account')} />
      <ScrollView style={styles.scroll} keyboardShouldPersistTaps={'handled'}>
        <View style={styles.top} />
        {_renderInput()}
        <View style={styles.padding} />
        {_renderButton()}
      </ScrollView>
      {isSuccess && (
        <ModalSuccess
          successMessage={I18n.t('register.success_message')}
          onPressCloseModal={onPressCloseModal}
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
