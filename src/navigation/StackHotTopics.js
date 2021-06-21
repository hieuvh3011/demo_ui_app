import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {
  ARTICLE_DETAILS_SCREEN,
  ARTICLE_LIST_SCREEN,
  HOT_TOPIC_SCREEN,
} from './ScreenName';
import HotTopicScreen from '@app/components/hot_topic/HotTopicScreen';
import ArticleListScreen from '@app/components/hot_topic/ArticleListScreen';
import ArticleDetailsScreen from '@app/components/hot_topic/ArticleDetailsScreen';

export default function StackHotTopic() {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator headerMode={'none'} initialRouteName={HOT_TOPIC_SCREEN}>
      <Stack.Screen name={HOT_TOPIC_SCREEN} component={HotTopicScreen} />
      <Stack.Screen name={ARTICLE_LIST_SCREEN} component={ArticleListScreen} />
      <Stack.Screen
        name={ARTICLE_DETAILS_SCREEN}
        component={ArticleDetailsScreen}
      />
    </Stack.Navigator>
  );
}
