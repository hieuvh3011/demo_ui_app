import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {
  HOME_SCREEN,
  ACCOUNT_SCREEN,
  FORUM_SCREEN,
  PHOTO_ALBUM_SCREEN,
  CALENDAR_SCREEN,
} from './ScreenName';
import HomeScreen from '@app/components/home/HomeScreen';
import ProfileScreen from '@app/components/profile/ProfileScreen';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Colors from '@app/utils/colors';
import ForumScreen from '@app/components/forum/ForumScreen';
import PhotoAlbumScreen from '@app/components/photo_album/PhotoAlbumScreen';
import CalendarScreen from '@app/components/calendar/CalendarScreen';
import {scale} from 'react-native-size-matters';

const TabNavigator = () => {
  const Tab = createBottomTabNavigator();

  const getIconTab = (route: any, color: string) => {
    let iconName = '';
    switch (route?.name) {
      case HOME_SCREEN:
        iconName = 'home';
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
          fontSize: scale(9),
          fontWeight: 'bold',
        },
      }}>
      <Tab.Screen
        name={HOME_SCREEN}
        component={HomeScreen}
        options={{tabBarLabel: 'Home'}}
      />
      <Tab.Screen
        name={FORUM_SCREEN}
        component={ForumScreen}
        options={{tabBarLabel: 'Forum'}}
      />
      <Tab.Screen
        name={PHOTO_ALBUM_SCREEN}
        component={PhotoAlbumScreen}
        options={{tabBarLabel: 'Photo Album'}}
      />
      <Tab.Screen
        name={CALENDAR_SCREEN}
        component={CalendarScreen}
        options={{tabBarLabel: 'Calendar'}}
      />
      <Tab.Screen
        name={ACCOUNT_SCREEN}
        component={ProfileScreen}
        options={{tabBarLabel: 'Profile'}}
      />
    </Tab.Navigator>
  );
};

export default TabNavigator;
