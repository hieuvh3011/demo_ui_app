import React from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';
import {ScaledSheet} from 'react-native-size-matters';
import Colors from '@app/utils/colors';
import Header from '@app/components/common/Header';
import {useSelector} from 'react-redux';
import ClassroomCheckBox from '@app/components/classes/ClassroomCheckBox';
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
import {textStyle} from '@app/utils/TextStyles';

const ClassPreviewScreen = () => {
  const classesReducer = useSelector(state => state?.classes);
  const currentClass = classesReducer.selectedClass;
  const color = currentClass.color;

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
        color={currentClass.color}
      />
    );
  };

  const _renderHeaderCenter = () => {
    const weekTitleStyle = StyleSheet.flatten([
      styles.weekTitle,
      {color: color},
    ]);
    const weekNameStyle = StyleSheet.flatten([styles.weekName, {color: color}]);
    return (
      <View style={styles.headerCenter}>
        <Text style={weekTitleStyle}>{currentClass.title}</Text>
        <Text style={weekNameStyle}>{currentClass.topicName}</Text>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <Header
        hasBackLeft={true}
        hasRight={true}
        textColor={currentClass.color}
        centerComponent={_renderHeaderCenter()}
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
  headerCenter: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
  },
  weekTitle: {
    ...textStyle.md_primary,
  },
  weekName: {
    ...textStyle.h3_primary,
  },
});

export default ClassPreviewScreen;
