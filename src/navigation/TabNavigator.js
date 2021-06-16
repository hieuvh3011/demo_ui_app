import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {
  ACCOUNT_SCREEN,
  FORUM_SCREEN,
  PHOTO_ALBUM_SCREEN,
  CALENDAR_SCREEN,
  CLASS_SCREEN,
} from './ScreenName';
import ClassScreen from '@app/components/home/ClassScreen';
import ProfileScreen from '@app/components/profile/ProfileScreen';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Colors from '@app/utils/colors';
import ForumScreen from '@app/components/forum/ForumScreen';
import PhotoAlbumScreen from '@app/components/photo_album/PhotoAlbumScreen';
import CalendarScreen from '@app/components/calendar/CalendarScreen';
import {scale} from 'react-native-size-matters';
import I18n from 'react-native-i18n';

const TabNavigator = () => {
  const Tab = createBottomTabNavigator();

  const getIconTab = (route: any, color: string) => {
    let iconName = '';
    switch (route?.name) {
      case CLASS_SCREEN:
        iconName = 'school';
        break;
      case FORUM_SCREEN:
        iconName = 'forum';
        break;
      case PHOTO_ALBUM_SCREEN:
        iconName = 'camera';
        break;
      case CALENDAR_SCREEN:
        iconName = 'calendar';
        break;
      case ACCOUNT_SCREEN:
        iconName = 'account-circle';
        break;
    }
    return <Icon name={iconName} size={scale(20)} color={color} />;
  };

  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({color}) => getIconTab(route, color),
      })}
      tabBarOptions={{
        inactiveTintColor: Colors.inactive,
        activeTintColor: Colors.primary,
        labelStyle: {
          fontSize: scale(10),
          fontWeight: 'bold',
        },
      }}>
      <Tab.Screen
        name={CLASS_SCREEN}
        component={ClassScreen}
        options={{tabBarLabel: I18n.t('bottom_tab_bar.classes')}}
      />
      <Tab.Screen
        name={FORUM_SCREEN}
        component={ForumScreen}
        options={{tabBarLabel: I18n.t('bottom_tab_bar.hot_topic')}}
      />
      <Tab.Screen
        name={PHOTO_ALBUM_SCREEN}
        component={PhotoAlbumScreen}
        options={{tabBarLabel: I18n.t('bottom_tab_bar.photo_album')}}
      />
      <Tab.Screen
        name={CALENDAR_SCREEN}
        component={CalendarScreen}
        options={{tabBarLabel: I18n.t('bottom_tab_bar.calendar')}}
      />
      <Tab.Screen
        name={ACCOUNT_SCREEN}
        component={ProfileScreen}
        options={{tabBarLabel: I18n.t('bottom_tab_bar.profile')}}
      />
    </Tab.Navigator>
  );
};

export default TabNavigator;
