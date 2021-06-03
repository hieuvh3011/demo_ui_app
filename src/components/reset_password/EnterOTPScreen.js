import React, {useState, useRef} from 'react';
import {View, Text, ScrollView} from 'react-native';
import {ScaledSheet} from 'react-native-size-matters';
import Colors from '@app/utils/colors';
import Header from '@app/components/common/Header';
import I18n from '@app/i18n/i18n';
import FloatingTextInput from '@app/components/common/FloatingTextInput';
import {textStyle} from '@app/utils/TextStyles';
import AppButton from '@app/components/common/AppButton';
import {CodeField, Cursor} from 'react-native-confirmation-code-field';

const EnterOTPScreen = props => {
  const [otp, setOTP] = useState('');
  const inputRef = useRef();
  const onChangeOTP = text => {
    setOTP(text);
  };

  return (
    <View style={styles.container}>
      <Header centerText={I18n.t('reset_password.reset_password')} />
      <ScrollView style={styles.scroll}>
        <View style={styles.blank100} />
        <Text style={styles.text}>
          {I18n.t('reset_password.enter_6_digits')}
        </Text>
        <CodeField
          ref={ref => (inputRef.current = ref)}
          autoFocus={true}
          // Use `caretHidden={false}` when users can't paste a text value, because context menu doesn't appear
          value={otp}
          onChangeText={onChangeOTP}
          cellCount={6}
          rootStyle={styles.codeFieldRoot}
          keyboardType="number-pad"
          textContentType="oneTimeCode"
          renderCell={({index, symbol, isFocused}) => (
            <Text
              key={index}
              style={[styles.cell, isFocused && styles.focusCell]}>
              {symbol || (isFocused ? <Cursor /> : null)}
            </Text>
          )}
        />
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
  codeFieldRoot: {
    marginTop: '20@vs',
  },
  cell: {
    width: '50@ms',
    height: '50@ms',
    borderWidth: '0.6@ms',
    borderColor: '#A08C6B',
    textAlign: 'center',
    borderRadius: '5@ms',
    ...textStyle.h3_black,
    lineHeight: '40@ms',
  },
  textInCell: {},
  focusCell: {
    borderColor: Colors.borderFocused,
    borderWidth: '1@ms',
  },
});

export default EnterOTPScreen;
