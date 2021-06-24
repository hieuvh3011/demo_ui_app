import React from 'react';
import {View} from 'react-native';
import {ScaledSheet} from 'react-native-size-matters';
import Header from '@app/components/common/Header';
import I18n from '@app/i18n/i18n';
import Colors from '@app/utils/colors';
import TabProfile from '@app/navigation/TabProfile';
import AppButton from '@app/components/common/AppButton';
import {navigateToScreen} from '@app/navigation/NavigatorHelper';
import {MY_PROFILE_SCREEN} from '@app/navigation/ScreenName';

const ProfileScreen = (props): JSX.Element => {
  const _goToMyProfile = () => navigateToScreen(MY_PROFILE_SCREEN);

  return (
    <>
      <Header
        centerText={I18n.t('profile.profile')}
        hasRight={true}
        hasBackLeft={false}
      />
      <TabProfile />
    </>
  );
};

const styles = ScaledSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: Colors.background,
  },
  button: {
    width: '90%',
    marginVertical: '10@vs',
  },
  full: {
    flex: 1,
  },
});

export default React.memo(ProfileScreen);
