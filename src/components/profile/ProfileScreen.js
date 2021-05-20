import React from 'react';
import {View, Text} from 'react-native';
import {ScaledSheet} from 'react-native-size-matters';
import AppButton from '@app/components/common/AppButton';
import {navigateToScreenAndReplace} from '@app/navigation/NavigatorHelper';
import {LOGIN_SCREEN} from '@app/navigation/ScreenName';

const ProfileScreen = (): JSX.Element => {
  const _logout = () => navigateToScreenAndReplace(LOGIN_SCREEN);

  return (
    <View style={styles.container}>
      <Text>Profile Screen</Text>
      <AppButton style={styles.button} text={'Logout'} onPress={_logout} />
    </View>
  );
};

const styles = ScaledSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    width: '90%',
    marginVertical: '10@vs',
  },
});

export default ProfileScreen;
