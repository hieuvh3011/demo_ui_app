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

const ClassPreview = () => {
  const classesReducer = useSelector(state => state.classes);
  const currentClass = classesReducer.selectedClass;

  const statusList = [
    {id: 1, name: 'Article', iconSource: menuBookIcon, isDone: true},
    {id: 2, name: 'Animation', iconSource: petsIcon, isDone: true},
    {id: 3, name: 'Video', iconSource: liveTvIcon, isDone: true},
    {id: 4, name: 'Quiz', iconSource: quickReplyIcon, isDone: false},
    {id: 5, name: 'Practice Room', iconSource: videoGameIcon, isDone: false},
  ];

  const _renderItem = ({item, index}) => {
    return (
      <ClassroomCheckBox
        iconSource={item.iconSource}
        text={item.name}
        isDone={item.isDone}
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

export default ClassPreview;
