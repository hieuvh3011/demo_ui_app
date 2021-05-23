import React, {createRef, forwardRef, useRef, useState} from 'react';
import {View, Text, TouchableOpacity, ScrollView, Image} from 'react-native';
import {ScaledSheet, moderateScale} from 'react-native-size-matters';
import {navigateToScreenAndReplace} from '@app/navigation/NavigatorHelper';
import {TAB_NAVIGATOR} from '@app/navigation/ScreenName';
import Header from '@app/components/common/Header';
import FloatingTextInput from '../common/FloatingTextInput';
import {FloatingLabelInput} from 'react-native-floating-label-input';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Colors from '@app/utils/colors';
import AppTextInput from '@app/components/common/AppTextInput';
import AppButton from '@app/components/common/AppButton';
import {googleLogo} from '@app/assets/images';

const fakeError = ['Email is incorrect format', 'Password is weak '];

const LoginScreen = () => {
  const goToHomeScreen = () => navigateToScreenAndReplace(TAB_NAVIGATOR);
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const onChangeEmail = text => {
    setEmail(text);
  };

  const onChangePassword = text => {
    setPassword(text);
  };

  const _renderInput = () => {
    return (
      <>
        <FloatingTextInput value={email} onChange={onChangeEmail} />
        <FloatingTextInput
          value={password}
          onChange={onChangePassword}
          isPassword={true}
          iconName={'key'}
          label={'Password'}
        />
      </>
    );
  };

  const _renderForgotPassword = () => {
    return (
      <View style={styles.forgotPassword}>
        <Text style={styles.forgotPasswordText}>Forgot password</Text>
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
        <AppButton text={'Sign in'} />
        <View style={styles.divide}>
          <View style={styles.divideLine} />
          <Text style={styles.or}>or</Text>
          <View style={styles.divideLine} />
        </View>
        <AppButton
          backgroundColor={Colors.white}
          text={'Sign Up'}
          textColor={Colors.primary}
          style={styles.signUp}
        />
      </>
    );
  };

  const _buttonLoginGoogle = () => (
    <AppButton style={styles.loginGoogle}>
      <Image source={googleLogo} style={styles.logoGoogle} />
      <Text style={styles.signInWithGoogle}>Sign in with Google</Text>
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
    height: '100@vs',
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
    paddingVertical: '5@vs',
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
    fontSize: '14@ms',
  },
  errorText: {
    fontWeight: 'bold',
    color: Colors.errorText,
    fontSize: '14@ms',
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
  divideLine: {
    backgroundColor: Colors.borderBottom,
    height: '1@vs',
    flex: 1,
  },
  divide: {
    flexDirection: 'row',
    width: '100%',
    paddingVertical: '10@vs',
    alignItems: 'center',
  },
  or: {
    marginHorizontal: '10@ms',
    color: Colors.labelInput,
    fontWeight: 'bold',
    fontSize: '14@ms',
  },
  signUp: {
    borderWidth: '1@ms',
    borderColor: Colors.primary,
  },
});

export default LoginScreen;
