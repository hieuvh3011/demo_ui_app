import React from 'react';
import {SceneMap, TabBar, TabView} from 'react-native-tab-view';
import {Dimensions} from 'react-native';
import MyProfileScreen from '@app/components/profile/screens/MyProfileScreen';
import SpousalProfileScreen from '@app/components/profile/screens/SpousalProfileScreen';
import I18n from '@app/i18n/i18n';
import Colors from '@app/utils/colors';
import {ScaledSheet} from 'react-native-size-matters';
import {textStyle} from '@app/utils/TextStyles';
import StackChildrenProfile from '@app/navigation/StackChildrenProfile';

const TabProfile = () => {
  const layout = Dimensions.get('window');

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    {key: 'myProfile', title: I18n.t('profile.my_profile')},
    {key: 'spousalProfile', title: I18n.t('profile.spousal_profile')},
    {key: 'childrenProfile', title: I18n.t('profile.children_profile')},
  ]);

  const renderScene = SceneMap({
    myProfile: MyProfileScreen,
    spousalProfile: SpousalProfileScreen,
    childrenProfile: StackChildrenProfile,
  });

  const _renderTabBar = props => {
    return (
      <TabBar
        {...props}
        indicatorStyle={styles.indicator}
        style={[styles.container]}
        inactiveColor={Colors.text}
        activeColor={Colors.primary}
        getLabelText={({route}) => route.title}
        labelStyle={styles.label}
      />
    );
  };

  return (
    <TabView
      navigationState={{
        index,
        routes,
      }}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={{
        width: layout.width,
      }}
      lazy={true}
      renderTabBar={_renderTabBar}
    />
  );
};

const tabBarContainer = {
  backgroundColor: Colors.background,
  minHeight: '40@vs',
  justifyContent: 'center',
  borderBottomWidth: '1@ms',
  borderBottomColor: Colors.borderBottom,
};

const styles = ScaledSheet.create({
  indicator: {
    backgroundColor: Colors.primary400,
  },
  container: {
    ...tabBarContainer,
  },
  tabBar: {
    backgroundColor: Colors.background,
  },
  focusedTabBar: {
    backgroundColor: Colors.topic.background,
  },
  activeTab: {
    backgroundColor: Colors.topic.background,
  },
  label: {
    ...textStyle.md_bold,
    fontSize: '11@ms',
  },
});

export default React.memo(TabProfile);
