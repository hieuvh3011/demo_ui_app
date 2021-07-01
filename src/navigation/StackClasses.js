import React from 'react';
import {
  ANIMATION_SCREEN,
  ARTICLE_SCREEN,
  CLASS_PREVIEW_SCREEN,
  CLASS_SCREEN,
  PRACTICE_ROOM_SCREEN,
  QUIZ_SCREEN,
  VIDEO_SCREEN,
} from '@app/navigation/ScreenName';
import ClassScreen from '@app/components/classes/screens/ClassScreen';
import ClassPreviewScreen from '@app/components/classes/screens/ClassPreviewScreen';
import {createStackNavigator} from '@react-navigation/stack';
import ArticleScreen from '@app/components/classes/screens/ArticleScreen';
import AnimationScreen from '@app/components/classes/screens/AnimationScreen';
import PracticeRoomScreen from '@app/components/classes/screens/PracticeRoomScreen';
import VideoScreen from '@app/components/classes/screens/VideoScreen';
import QuizScreen from '@app/components/classes/screens/QuizScreen';

export default function StackClasses() {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator headerMode={'none'} initialRouteName={CLASS_SCREEN}>
      <Stack.Screen name={CLASS_SCREEN} component={ClassScreen} />
      <Stack.Screen
        name={CLASS_PREVIEW_SCREEN}
        component={ClassPreviewScreen}
      />
      <Stack.Screen name={ARTICLE_SCREEN} component={ArticleScreen} />
      <Stack.Screen name={ANIMATION_SCREEN} component={AnimationScreen} />
      <Stack.Screen name={VIDEO_SCREEN} component={VideoScreen} />
      <Stack.Screen name={QUIZ_SCREEN} component={QuizScreen} />
      <Stack.Screen
        name={PRACTICE_ROOM_SCREEN}
        component={PracticeRoomScreen}
      />
    </Stack.Navigator>
  );
}
