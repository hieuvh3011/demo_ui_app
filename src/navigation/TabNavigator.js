import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {
  ACCOUNT_SCREEN,
  HOT_TOPIC_SCREEN,
  PHOTO_ALBUM_SCREEN,
  CALENDAR_SCREEN,
  CLASS_SCREEN,
  CLASS_PREVIEW_SCREEN,
  CLASS_STACK,
  HOT_TOPIC_STACK,
} from './ScreenName';
import ClassScreen from '@app/components/classes/ClassScreen';
import ProfileScreen from '@app/components/profile/ProfileScreen';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Colors from '@app/utils/colors';
import HotTopicScreen from '@app/components/hot_topic/HotTopicScreen';
import PhotoAlbumScreen from '@app/components/photo_album/PhotoAlbumScreen';
import CalendarScreen from '@app/components/calendar/CalendarScreen';
import {scale} from 'react-native-size-matters';
import I18n from 'react-native-i18n';
import {createStackNavigator} from '@react-navigation/stack';
import ClassPreviewScreen from '@app/components/classes/ClassPreviewScreen';
import StackClasses from '@app/navigation/StackClasses';
import StackHotTopic from './StackHotTopics';

const TabNavigator = () => {
  const Tab = createBottomTabNavigator();
  const Stack = createStackNavigator();

  const getIconTab = (route: any, color: string) => {
    let iconName = '';
    switch (route?.name) {
      case CLASS_STACK:
        iconName = 'school';
        break;
      case HOT_TOPIC_STACK:
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
        style: {
          height: scale(80),
          borderTopColor: Colors.borderBottom,
          borderTopWidth: scale(1),
        },
      }}>
      <Tab.Screen
        name={CLASS_STACK}
        component={StackClasses}
        options={{tabBarLabel: I18n.t('bottom_tab_bar.classes')}}
      />
      <Tab.Screen
        name={HOT_TOPIC_STACK}
        component={StackHotTopic}
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
