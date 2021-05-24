import React from 'react';
import {View, Text, ScrollView, Modal, TouchableOpacity} from 'react-native';
import {ScaledSheet, scale} from 'react-native-size-matters';
import Header from '@app/components/common/Header';
import Colors from '@app/utils/colors';
import I18n from '@app/i18n/i18n';
import FloatingTextInput from '@app/components/common/FloatingTextInput';
import SignUpViewModel from '@app/components/sign_up/SignUpViewModel';
import AppButton from '@app/components/common/AppButton';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

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
  } = SignUpViewModel(props);

  const _renderInput = () => {
    return (
      <>
        <FloatingTextInput
          value={email}
          onChange={onChangeEmail}
          label={I18n.t('register.enter_your_email')}
          style={styles.input}
        />
        <FloatingTextInput
          value={password}
          onChange={onChangePassword}
          label={I18n.t('register.enter_your_password')}
          style={styles.input}
          iconName={'key'}
          isPassword={true}
        />
        <FloatingTextInput
          value={confirmPassword}
          onChange={onChangeConfirm}
          label={I18n.t('register.confirm_your_password')}
          style={styles.input}
          iconName={'key'}
          isPassword={true}
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

  const _renderModalSuccess = () => {
    return (
      <Modal visible={isSuccess} transparent={true} animationType="slide">
        <View style={styles.modalContainer}>
          <View style={styles.modalView}>
            <View style={styles.messageContainer}>
              <View style={styles.successBadge}>
                <Icon
                  name={'check-bold'}
                  size={scale(30)}
                  color={Colors.white}
                  style={styles.iconCheck}
                />
              </View>
              <Text style={styles.text}>
                {I18n.t('register.success_message')}
              </Text>
            </View>
            <View style={styles.buttonContainer}>
              <AppButton
                text={'Okay'}
                style={styles.button}
                onPress={onPressCloseModal}
              />
            </View>
            <TouchableOpacity
              style={styles.closeModal}
              onPress={onPressCloseModal}>
              <Icon name={'close'} color={Colors.primary} size={scale(22)} />
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    );
  };

  return (
    <View style={styles.container}>
      <Header centerText={I18n.t('register.create_account')} />
      <ScrollView style={styles.scroll}>
        <View style={styles.top} />
        {_renderInput()}
        <View style={styles.padding} />
        {_renderButton()}
      </ScrollView>
      {_renderModalSuccess()}
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
  modalContainer: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.6)',
    justifyContent: 'flex-end',
  },
  modalView: {
    height: '95%',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.background,
    borderRadius: '25@ms',
  },
  buttonContainer: {
    width: '100%',
    paddingVertical: '20@vs',
    paddingHorizontal: '15@ms',
  },
  button: {
    shadowColor: Colors.shadow,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
    backgroundColor: Colors.primary400,
  },
  messageContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: '10@ms',
  },
  text: {
    color: Colors.labelInput,
    fontWeight: 'bold',
    fontSize: '16@ms',
  },
  successBadge: {
    width: '50@ms',
    height: '50@ms',
    marginVertical: '10@vs',
    backgroundColor: Colors.success,
    borderRadius: '25@ms',
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconCheck: {
    fontWeight: 'bold',
  },
  closeModal: {
    position: 'absolute',
    top: '10@ms',
    right: '10@ms',
    padding: '10@ms',
  },
});

export default SignUpScreen;
