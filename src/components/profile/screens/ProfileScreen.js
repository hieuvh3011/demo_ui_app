import React from 'react';
import Header from '@app/components/common/Header';
import I18n from '@app/i18n/i18n';
import TabProfile from '@app/navigation/TabProfile';

const ProfileScreen = (props): JSX.Element => {
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

export default React.memo(ProfileScreen);
