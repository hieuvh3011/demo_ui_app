import React, {useState} from 'react';
import {View, Text, ScrollView} from 'react-native';
import {ScaledSheet} from 'react-native-size-matters';
import Colors from '@app/utils/colors';
import Header from '@app/components/common/Header';
import I18n from '@app/i18n/i18n';
import {textStyle} from '@app/utils/TextStyles';
import AppButton from '@app/components/common/AppButton';
import {navigateToScreen} from '@app/navigation/NavigatorHelper';
import {RESET_PASSWORD_ENTER_OTP_SCREEN} from '@app/navigation/ScreenName';
import AppTextInput from '@app/components/common/AppTextInput';
import {isEmail} from '@app/utils/validator';
import Loading from '@app/components/common/Loading';

const EnterEmailScreen = props => {
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');
  const [isLoading, setLoading] = useState(false);

  const onChangeEmail = text => {
    setEmail(text);
    if (text === '') {
      setEmailError(I18n.t('error.please_type_your_email'));
    } else if (!isEmail(text)) {
      setEmailError(I18n.t('error.email_is_incorrect_format'));
    } else {
      setEmailError('');
    }
  };

  const clearEmail = () => setEmail('');

  const _onPressContinue = () => {
    if (email === '') {
      setEmailError(I18n.t('error.please_type_your_email'));
    } else {
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
        goToEnterOTP();
      }, 2000);
    }
  };

  const goToEnterOTP = () => navigateToScreen(RESET_PASSWORD_ENTER_OTP_SCREEN);

  return (
    <View style={styles.container}>
      <Header centerText={I18n.t('reset_password.reset_password')} />
      <ScrollView style={styles.scroll} showsVerticalScrollIndicator={false}>
        <View style={styles.blank100} />
        <Text style={styles.text}>
          {I18n.t('reset_password.what_your_email')}
        </Text>
        <AppTextInput
          onChange={onChangeEmail}
          value={email}
          label={I18n.t('register.enter_your_email')}
          keyboardType={'email-address'}
          autoFocus={true}
          clearContent={clearEmail}
          errorText={emailError}
        />
        <View style={styles.blank250} />
        <AppButton
          text={I18n.t('reset_password.continue')}
          disabled={email === ''}
          onPress={_onPressContinue}
        />
      </ScrollView>
      {isLoading && (
        <Loading loadingText={I18n.t('reset_password.sending_otp')} />
      )}
    </View>
  );
};

const styles = ScaledSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
    alignItems: 'center',
  },
  scroll: {
    width: '100%',
    paddingHorizontal: '15@ms',
  },
  blank100: {
    height: '100@vs',
  },
  text: {
    ...textStyle.h3_primary,
  },
  blank250: {
    height: '250@vs',
  },
});

export default EnterEmailScreen;
