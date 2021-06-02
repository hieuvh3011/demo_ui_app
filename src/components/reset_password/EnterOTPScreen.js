import React, {useState} from 'react';
import {View, Text, ScrollView} from 'react-native';
import {ScaledSheet} from 'react-native-size-matters';
import Colors from '@app/utils/colors';
import Header from '@app/components/common/Header';
import I18n from '@app/i18n/i18n';
import FloatingTextInput from '@app/components/common/FloatingTextInput';
import {textStyle} from '@app/utils/TextStyles';
import AppButton from '@app/components/common/AppButton';

const EnterOTPScreen = props => {
  const [otp, setOTP] = useState('');

  const onChangeOTP = text => {
    setOTP(text);
  };

  return (
    <View style={styles.container}>
      <Header centerText={I18n.t('reset_password.reset_password')} />
      <ScrollView style={styles.scroll}>
        <View style={styles.blank100} />
        <Text style={styles.text}>
          {I18n.t('reset_password.what_your_email')}
        </Text>
        {/*<FloatingTextInput*/}
        {/*  onChange={onChangeEmail}*/}
        {/*  value={email}*/}
        {/*  label={I18n.t('register.enter_your_email')}*/}
        {/*  keyboardType={'email-address'}*/}
        {/*/>*/}
        <View style={styles.blank250} />
        <AppButton
          text={I18n.t('reset_password.continue')}
          disabled={otp === ''}
        />
      </ScrollView>
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

export default EnterOTPScreen;
