import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import ChildrenProfileListScreen from '@app/components/profile/screens/ChildrenProfileListScreen';
import {
  ADD_CHILD_SCREEN,
  CHILDREN_PROFILE_LIST_SCREEN,
} from '@app/navigation/ScreenName';
import ChildInfoScreen from '@app/components/profile/screens/ChildInfoScreen';

const Stack = createStackNavigator();

const StackChildrenProfile = () => {
  return (
    <Stack.Navigator
      headerMode={'none'}
      initialRouteName={CHILDREN_PROFILE_LIST_SCREEN}>
      <Stack.Screen
        name={CHILDREN_PROFILE_LIST_SCREEN}
        component={ChildrenProfileListScreen}
      />
      <Stack.Screen name={ADD_CHILD_SCREEN} component={ChildInfoScreen} />
    </Stack.Navigator>
  );
};

export default StackChildrenProfile;
