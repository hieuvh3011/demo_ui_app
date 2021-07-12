import React from 'react';
import {View, FlatList} from 'react-native';
import {ScaledSheet} from 'react-native-size-matters';
import Colors from '@app/utils/colors';
import Header from '@app/components/common/Header';
import {useDispatch, useSelector} from 'react-redux';
import ArticleItem from '@app/components/hot_topic/ArticleItem';
import {selectArticle} from '@app/redux/hot_topic/HotTopic.action';
import {navigateToScreen} from '@app/navigation/NavigatorHelper';
import {ARTICLE_DETAILS_SCREEN} from '@app/navigation/ScreenName';

const ArticleListScreen = props => {
  const hotTopicReducer = useSelector(state => state?.hotTopic);
  const topicName = hotTopicReducer?.selectedTopic?.text;
  const articleList = hotTopicReducer?.articleList;
  const dispatch = useDispatch();

  const _renderItem = ({item, index}) => {
    return (
      <ArticleItem
        title={item.title}
        description={item.description}
        numberOfLikes={item.likes}
        containerStyle={styles.articleItem}
        onPress={() => onPressArticle(item)}
      />
    );
  };

  const onPressArticle = article => {
    dispatch(selectArticle(article));
    navigateToScreen(ARTICLE_DETAILS_SCREEN);
  };

  return (
    <View style={styles.container}>
      <Header hasBackLeft={true} hasRight={true} centerText={topicName} />
      <FlatList
        style={styles.list}
        data={articleList}
        renderItem={_renderItem}
        keyExtractor={item => item.id.toString()}
      />
    </View>
  );
};

const styles = ScaledSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: Colors.background,
  },
  list: {
    width: '100%',
    paddingTop: '10@vs',
    paddingHorizontal: '15@ms',
  },
  articleItem: {
    marginVertical: '3@vs',
  },
});

export default ArticleListScreen;
