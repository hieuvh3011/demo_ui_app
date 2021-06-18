import React from 'react';
import {View, Text, ScrollView, FlatList} from 'react-native';
import {ScaledSheet} from 'react-native-size-matters';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Colors from '@app/utils/colors';
import Header from '@app/components/common/Header';
import {useSelector} from 'react-redux';
import ClassroomCheckBox from '@app/components/common/ClassroomCheckBox';
import {
  liveTvIcon,
  menuBookIcon,
  petsIcon,
  quickReplyIcon,
  videoGameIcon,
} from '@app/assets/images';
import {navigateToScreen} from '@app/navigation/NavigatorHelper';
import {
  ANIMATION_SCREEN,
  ARTICLE_SCREEN,
  PRACTICE_ROOM_SCREEN,
  QUIZ_SCREEN,
  VIDEO_SCREEN,
} from '@app/navigation/ScreenName';

const ClassPreviewScreen = () => {
  const classesReducer = useSelector(state => state.classes);
  const currentClass = classesReducer.selectedClass;

  const statusList = [
    {
      id: 1,
      name: 'Article',
      iconSource: menuBookIcon,
      isDone: true,
      onPress: () => navigateToScreen(ARTICLE_SCREEN),
    },
    {
      id: 2,
      name: 'Animation',
      iconSource: petsIcon,
      isDone: true,
      onPress: () => navigateToScreen(ANIMATION_SCREEN),
    },
    {
      id: 3,
      name: 'Video',
      iconSource: liveTvIcon,
      isDone: true,
      onPress: () => navigateToScreen(VIDEO_SCREEN),
    },
    {
      id: 4,
      name: 'Quiz',
      iconSource: quickReplyIcon,
      isDone: false,
      onPress: () => navigateToScreen(QUIZ_SCREEN),
    },
    {
      id: 5,
      name: 'Practice Room',
      iconSource: videoGameIcon,
      isDone: false,
      onPress: () => navigateToScreen(PRACTICE_ROOM_SCREEN),
    },
  ];

  const _renderItem = ({item, index}) => {
    return (
      <ClassroomCheckBox
        iconSource={item.iconSource}
        text={item.name}
        isDone={item.isDone}
        onPress={item.onPress}
      />
    );
  };

  return (
    <View style={styles.container}>
      <Header
        hasBackLeft={true}
        centerText={currentClass?.title}
        hasRight={true}
      />
      <FlatList
        style={styles.scroll}
        data={statusList}
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
  scroll: {
    width: '100%',
    paddingHorizontal: '15@ms',
    paddingTop: '5@vs',
  },
});

export default ClassPreviewScreen;
