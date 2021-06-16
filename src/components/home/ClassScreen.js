import React, {useRef, useState} from 'react';
import {
  View,
  Text,
  ScrollView,
  Image,
  RefreshControl,
  Animated,
  StyleSheet,
} from 'react-native';
import {ScaledSheet, verticalScale, scale} from 'react-native-size-matters';
import Header from '@app/components/common/Header';
import I18n from '@app/i18n/i18n';
import ClassroomButton from '@app/components/common/ClassroomButton';
import Colors from '@app/utils/colors';
import {defaultProfilePicture} from '@app/assets/images';
import {textStyle} from '@app/utils/TextStyles';
import {Bar} from 'react-native-progress';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const ClassScreen = (): JSX.Element => {
  const [refreshing, setRefreshing] = useState(false);
  const fadeAnimation = useRef(new Animated.Value(0.99)).current;
  const list = [
    {
      title: 'Week 1',
      topicName: '[Test topic name]',
      color: Colors.primary,
      percent: 100,
      status: 'complete',
    },
    {
      title: 'Week 2',
      topicName: '[Test topic name]',
      color: 'rgba(55, 202, 237, 1)',
      percent: 100,
      status: 'update-content',
    },
    {
      title: 'Week 3',
      topicName: '[Test topic name]',
      color: Colors.errorBadge,
      percent: 30,
      // status: 'locked',
      // daysToUnlock: 3,
      // weeksToUnlock: 8,
    },
    {
      title: 'Week 4',
      topicName: '[Test topic name]',
      color: Colors.labelInput,
      percent: 40,
      // status: 'locked',
      // daysToUnlock: 2,
      // weeksToUnlock: 1,
    },
    {
      title: 'Week 5',
      topicName: '[Test topic name]',
      color: Colors.borderFocused,
      percent: 50,
    },
    {
      title: 'Week 6',
      topicName: '[Test topic name]',
      color: Colors.rank.filled,
      percent: 60,
    },
    {
      title: 'Week 7',
      topicName: '[Test topic name]',
      color: Colors.primary,
      percent: 70,
    },
    {
      title: 'Week 8',
      topicName: '[Test topic name]',
      color: Colors.primary,
      percent: 80,
    },
    {
      title: 'Week 9',
      topicName: '[Test topic name]',
      color: 'rgba(159, 37, 255, 1)',
      percent: 90,
    },
    {
      title: 'Week 10',
      topicName: '[Test topic name]',
      color: 'rgba(255, 102, 37, 1)',
      percent: 100,
    },
  ];

  const _renderRank = () => {
    return (
      <View style={styles.rankContainer}>
        <View style={styles.rank}>
          <Image source={defaultProfilePicture} style={styles.avatar} />
          <View style={styles.levelArea}>
            <View style={styles.level}>
              <Text style={styles.levelText}>LV. 65</Text>
              <Text style={styles.levelText}>RANK: MASTER</Text>
            </View>
            <Bar
              progress={0.8}
              width={null}
              borderColor={Colors.white}
              height={verticalScale(10)}
              color={Colors.rank.filled}
              unfilledColor={Colors.rank.unfilled}
              borderWidth={scale(3)}
              borderRadius={scale(10)}
            />
          </View>
        </View>
      </View>
    );
  };

  const _renderItem = (item, index) => {
    const nextColor = _getNextColor(index);
    return (
      <View
        style={[
          index % 2 === 0 ? styles.itemList : styles.itemListOdd,
          index === 0 && styles.marginTop,
        ]}
        key={index.toString()}>
        <ClassroomButton
          isOdd={index % 2 === 0}
          percent={item.percent}
          color={item.color}
          content={item.topicName}
          index={index}
          nextColor={nextColor}
          status={item.status}
          daysToUnlock={item.daysToUnlock}
          weeksToUnlock={item.weeksToUnlock}
        />
      </View>
    );
  };

  const _getNextColor = index => {
    if (index + 1 < list.length) {
      return list[index + 1]?.color;
    }
    return Colors.topic.locked;
  };

  const _renderScrollRecommend = () => {
    const animatedViewStyle = StyleSheet.flatten([
      styles.moreClassBelowContainer,
      {
        opacity: fadeAnimation,
      },
    ]);
    return (
      <Animated.View style={animatedViewStyle}>
        <View style={styles.moreClassBelow}>
          <Text style={styles.moreClassBelowText}>More classes below</Text>
        </View>
        <Icon
          name={'chevron-double-down'}
          color={Colors.primary}
          size={scale(22)}
        />
      </Animated.View>
    );
  };

  const _onScroll = () => {
    Animated.timing(fadeAnimation, {
      toValue: 0.01,
      duration: 1000,
      useNativeDriver: true,
    }).start();
  };

  const _onRefresh = () => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
      // Animated.timing(fadeAnimation, {
      //   toValue: 1,
      //   duration: 20,
      //   useNativeDriver: true,
      // }).start();
    }, 2000);
  };

  return (
    <View style={styles.container}>
      <Header
        centerText={I18n.t('classes.parenting_365')}
        hasBackLeft={false}
      />
      {_renderRank()}
      <ScrollView
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={_onRefresh} />
        }
        style={styles.scroll}
        fadingEdgeLength={10}
        showsVerticalScrollIndicator={false}
        onScroll={_onScroll}>
        {list.map((item, index) => {
          return _renderItem(item, index);
        })}
      </ScrollView>
      {_renderScrollRecommend()}
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
  },
  scrollContainer: {
    alignItems: 'center',
  },
  topic: {
    marginVertical: '5@vs',
  },
  rankContainer: {
    width: '100%',
    paddingHorizontal: '15@ms',
    paddingVertical: '10@vs',
    shadowColor: Colors.white,
    shadowOffset: {
      width: 0,
      height: 9,
    },
    shadowOpacity: 0.5,
    shadowRadius: 12.35,
    elevation: 19,
  },
  rank: {
    height: '50@vs',
    backgroundColor: Colors.topicBackground,
    borderRadius: '15@ms',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: '15@ms',
  },
  avatar: {
    width: '35@ms',
    height: '35@ms',
    borderRadius: '20@ms',
    marginRight: '15@ms',
  },
  levelArea: {
    flex: 1,
    justifyContent: 'space-around',
  },
  level: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: '5@vs',
  },
  levelText: {
    ...textStyle.md_primary,
  },
  itemList: {
    width: '100%',
    marginTop: '-30@vs',
    paddingLeft: '45@ms',
    alignItems: 'flex-start',
  },
  itemListOdd: {
    width: '100%',
    marginTop: '-30@vs',
    alignItems: 'flex-end',
    paddingRight: '45@ms',
  },
  marginTop: {
    marginTop: '10@vs',
  },
  moreClassBelowText: {
    ...textStyle.md_primary,
  },
  moreClassBelowContainer: {
    position: 'absolute',
    bottom: '0@ms',
    right: '15@ms',
    alignItems: 'center',
    justifyContent: 'center',
  },
  moreClassBelow: {
    backgroundColor: Colors.topic.background,
    paddingHorizontal: '5@ms',
    paddingVertical: '5@vs',
    borderColor: Colors.primary,
    borderRadius: '8@ms',
    borderWidth: '4@ms',
  },
});

export default ClassScreen;
