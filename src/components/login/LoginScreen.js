import React, {useState} from 'react';
import {View, Text, ScrollView, Image, TouchableOpacity} from 'react-native';
import {ScaledSheet} from 'react-native-size-matters';
import {
  navigateToScreen,
  navigateToScreenAndReplace,
} from '@app/navigation/NavigatorHelper';
import {
  RESET_PASSWORD_ENTER_EMAIL_SCREEN,
  SIGN_UP_SCREEN,
  TAB_NAVIGATOR,
} from '@app/navigation/ScreenName';
import Header from '@app/components/common/Header';
import FloatingTextInput from '../common/FloatingTextInput';
import Colors from '@app/utils/colors';
import AppButton from '@app/components/common/AppButton';
import {googleLogo} from '@app/assets/images';
import I18n from '@app/i18n/i18n';

const fakeError = [
  I18n.t('error.email_is_incorrect_format'),
  I18n.t('error.email_password_not_match'),
];

const LoginScreen = props => {
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

  const _renderInput = () => {
    return (
      <>
        <FloatingTextInput
          iconName={'email'}
          value={email}
          onChange={onChangeEmail}
          label={I18n.t('login.email')}
          style={styles.input}
          clearContent={clearEmail}
        />
        <FloatingTextInput
          value={password}
          onChange={onChangePassword}
          isPassword={true}
          iconName={'key'}
          label={I18n.t('login.password')}
          style={styles.input}
          clearContent={clearPassword}
        />
      </>
    );
  };

  const _renderForgotPassword = () => {
    return (
      <View style={styles.forgotPassword}>
        <TouchableOpacity
          style={styles.forgotPasswordButton}
          onPress={goToResetPassword}>
          <Text style={styles.forgotPasswordText}>
            {I18n.t('login.reset_password')}
          </Text>
        </TouchableOpacity>
      </View>
    );
  };

  const _renderError = () => {
    return (
      <View style={styles.errorArea}>
        {fakeError.map((item, index) => {
          return (
            <View key={index.toString()} style={styles.error}>
              <View style={styles.badge}>
                <Text style={styles.errorSymbol}>!</Text>
              </View>
              <Text style={styles.errorText}>{item}</Text>
            </View>
          );
        })}
      </View>
    );
  };

  const _renderButton = () => {
    return (
      <>
        {_buttonLoginGoogle()}
        <AppButton text={I18n.t('login.sign_in')} />
        <View style={styles.divide}>
          <View style={styles.divideLine} />
          <Text style={styles.or}>{I18n.t('login.or')}</Text>
          <View style={styles.divideLine} />
        </View>
        <AppButton
          backgroundColor={Colors.white}
          text={I18n.t('login.sign_up')}
          textStyle={styles.signUpText}
          style={styles.signUp}
          onPress={goToSignUp}
        />
      </>
    );
  };

  const _buttonLoginGoogle = () => (
    <AppButton style={styles.loginGoogle}>
      <>
        <Image source={googleLogo} style={styles.logoGoogle} />
        <Text style={styles.signInWithGoogle}>
          {I18n.t('login.sign_in_with_google')}
        </Text>
      </>
    </AppButton>
  );

  return (
    <View style={styles.container}>
      <Header centerText={'Login'} hasBackLeft={false} />
      <ScrollView style={styles.list}>
        <View style={styles.top} />
        {_renderInput()}
        {_renderForgotPassword()}
        {_renderError()}
        {_renderButton()}
      </ScrollView>
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
    height: '80@vs',
  },
  input: {
    marginVertical: '5@vs',
  },
  button: {
    marginVertical: '30@vs',
    padding: '10@ms',
    backgroundColor: '#0077CC',
    borderRadius: '10@ms',
  },
  textButton: {
    color: '#FFF',
    fontSize: '14@ms',
  },
  list: {
    width: '100%',
    paddingHorizontal: '15@ms',
  },
  icon: {
    marginHorizontal: '3@ms',
  },
  forgotPassword: {
    width: '100%',
    alignItems: 'flex-end',
  },
  forgotPasswordButton: {
    paddingVertical: '5@vs',
    paddingLeft: '15@ms',
    alignItems: 'flex-end',
  },
  forgotPasswordText: {
    fontSize: '14@ms',
    fontWeight: 'bold',
    color: Colors.primary,
  },
  errorArea: {
    width: '100%',
    paddingVertical: '5@vs',
    marginBottom: '40@vs',
  },
  badge: {
    width: '20@ms',
    height: '20@ms',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '10@ms',
    backgroundColor: Colors.errorBadge,
  },
  errorSymbol: {
    fontWeight: 'bold',
    color: Colors.white,
    fontSize: '13@ms',
  },
  errorText: {
    fontWeight: 'bold',
    color: Colors.errorText,
    fontSize: '12@ms',
    paddingLeft: '10@ms',
  },
  error: {
    width: '100%',
    marginVertical: '5@vs',
    flexDirection: 'row',
    alignItems: 'center',
  },
  loginGoogle: {
    flexDirection: 'row',
    justifyContent: 'center',
    backgroundColor: Colors.white,
    shadowColor: Colors.shadow,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4,
  },
  logoGoogle: {
    width: '25@ms',
    height: '25@ms',
    marginRight: '10@ms',
  },
  signInWithGoogle: {
    fontSize: '14@ms',
    fontWeight: 'bold',
    color: Colors.labelInput,
  },
  signUpText: {
    color: Colors.primary,
  },
  divideLine: {
    backgroundColor: Colors.borderBottom,
    height: '2@vs',
    flex: 1,
  },
  divide: {
    flexDirection: 'row',
    width: '100%',
    paddingVertical: '8@vs',
    alignItems: 'center',
  },
  or: {
    marginHorizontal: '10@ms',
    color: Colors.labelInput,
    fontWeight: 'bold',
    fontSize: '12@ms',
  },
  signUp: {
    borderWidth: '1@ms',
    borderColor: Colors.primary,
  },
});

export default LoginScreen;
