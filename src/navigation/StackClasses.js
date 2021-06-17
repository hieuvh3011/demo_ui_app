import React from 'react';
import {CLASS_PREVIEW_SCREEN, CLASS_SCREEN} from '@app/navigation/ScreenName';
import ClassScreen from '@app/components/classes/ClassScreen';
import ClassPreview from '@app/components/classes/ClassPreview';
import {createStackNavigator} from '@react-navigation/stack';

export default function StackClasses() {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator headerMode={'none'} initialRouteName={CLASS_SCREEN}>
      <Stack.Screen name={CLASS_SCREEN} component={ClassScreen} />
      <Stack.Screen name={CLASS_PREVIEW_SCREEN} component={ClassPreview} />
    </Stack.Navigator>
  );
}
