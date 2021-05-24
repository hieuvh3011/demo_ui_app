import React, {useEffect} from 'react';
import {View, Text} from 'react-native';
import {ScaledSheet} from 'react-native-size-matters';
import {navigateToScreenAndReplace} from '@app/navigation/NavigatorHelper';
import {LOGIN_SCREEN} from '@app/navigation/ScreenName';
import Colors from '@app/utils/colors';
import I18n from '@app/i18n/i18n';

const SplashScreen = (): JSX.Element => {
  useEffect(() => {
    setTimeout(() => navigateToScreenAndReplace(LOGIN_SCREEN), 3000);
  });

  return (
    <View style={styles.container}>
      <Text style={styles.teachingKid}>
        {'育兒' /*I18n.t('splash.teaching_kid')*/}
      </Text>
      <Text style={styles.text365}>365</Text>
    </View>
  );
};

const styles = ScaledSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.splash_background,
  },
  teachingKid: {
    fontWeight: 'bold',
    fontSize: '50@ms',
    color: Colors.white,
  },
  text365: {
    fontWeight: 'bold',
    fontSize: '90@ms',
    color: Colors.white,
    transform: [{rotate: '-7.5deg'}],
  },
});

export default SplashScreen;
