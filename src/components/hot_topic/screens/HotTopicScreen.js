import React from 'react';
import {View, Text, ScrollView} from 'react-native';
import {ScaledSheet} from 'react-native-size-matters';
import Colors from '@app/utils/colors';
import Header from '@app/components/common/Header';
import ArticleItem from '../ArticleItem';
import {textStyle} from '@app/utils/TextStyles';
import AppButton from '@app/components/common/AppButton';
import {useDispatch, useSelector} from 'react-redux';
import {selectTopic} from '@app/redux/hot_topic/HotTopic.action';
import {navigateToScreen} from '@app/navigation/NavigatorHelper';
import {ARTICLE_LIST_SCREEN} from '@app/navigation/ScreenName';
import I18n from 'react-native-i18n';

const HotTopicScreen = (): JSX.Element => {
  const hotTopicReducer = useSelector(state => state?.hotTopic);
  const dispatch = useDispatch();
  const articles = [
    {
      id: 1,
      title: 'Title 1',
      description: 'Description for title 1',
      isShort: true,
    },
    {
      id: 2,
      title: 'Title 2',
      description: 'Description for title 2',
      isShort: true,
    },
  ];

  const topics = hotTopicReducer?.topicList;

  const _selectTopic = topic => {
    dispatch(selectTopic(topic));
    navigateToScreen(ARTICLE_LIST_SCREEN);
  };

  return (
    <View style={styles.container}>
      <Header
        hasBackLeft={false}
        centerText={I18n.t('hot_topic.parenting_365')}
      />
      <ScrollView style={styles.scroll}>
        <Text style={styles.featureArticle}>
          {I18n.t('hot_topic.feature_article')}
        </Text>
        {articles.map((item, index) => {
          return (
            <ArticleItem
              key={item.id.toString()}
              imageSource={item.imageSource}
              title={item.title}
              content={item.content}
              isShort={item.isShort}
              containerStyle={styles.article}
            />
          );
        })}
        <Text style={styles.topics}>{I18n.t('hot_topic.topics')}</Text>
        {topics.map((item, index) => {
          if (item.isUpdated) {
            return (
              <AppButton
                key={item.id.toString()}
                style={styles.topicButton}
                text={item.text}
                textStyle={styles.topicButtonText}
                badgeComponent={
                  <View style={styles.badgeUpdatedContainer}>
                    <Text style={styles.badgeUpdateText}>
                      {`${I18n.t('hot_topic.updated')}!`}
                    </Text>
                  </View>
                }
                onPress={() => _selectTopic(item)}
              />
            );
          }
          return (
            <AppButton
              key={item.id.toString()}
              style={styles.topicButton}
              text={item.text}
              textStyle={styles.topicButtonText}
            />
          );
        })}
      </ScrollView>
    </View>
  );
};

const styles = ScaledSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: Colors.background,
  },
  scroll: {
    width: '100%',
    paddingHorizontal: '15@ms',
    paddingTop: '10@vs',
  },
  featureArticle: {
    ...textStyle.h3_black,
    color: Colors.secondary500,
    // marginBottom: '5@vs',
  },
  article: {
    marginVertical: '3@vs',
  },
  topics: {
    ...textStyle.h3_black,
    color: Colors.hotTopic,
    marginTop: '10@vs',
  },
  topicButton: {
    backgroundColor: Colors.background,
    borderWidth: '1@ms',
    borderColor: Colors.hotTopic,
  },
  topicButtonText: {
    ...textStyle.md_bold,
    color: Colors.hotTopic,
  },
  badgeUpdatedContainer: {
    position: 'absolute',
    paddingHorizontal: '10@ms',
    paddingVertical: '4@vs',
    top: '-5@vs',
    right: '-5@ms',
    backgroundColor: Colors.badgeBackground,
    borderRadius: '10@ms',
  },
  badgeUpdateText: {
    ...textStyle.md_bold,
    color: Colors.white,
  },
});

export default HotTopicScreen;
