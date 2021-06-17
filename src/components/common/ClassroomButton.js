import React from 'react';
import {View, Text, StyleSheet, Platform, TouchableOpacity} from 'react-native';
import {
  ScaledSheet,
  scale,
  moderateScale,
  verticalScale,
} from 'react-native-size-matters';
import PropTypes from 'prop-types';
import Colors from '@app/utils/colors';
import {AnimatedCircularProgress} from 'react-native-circular-progress';
import {textStyle} from '@app/utils/TextStyles';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const ClassroomButton = props => {
  const {
    percent,
    color,
    status,
    containerStyle,
    title,
    content,
    isOdd,
    index,
    nextColor,
    daysToUnlock,
    weeksToUnlock,
    onPress,
  } = props;

  const isIOS = () => Platform.OS === 'ios';
  const isLocked = () => status === 'locked';

  const _renderBadge = () => {
    let backgroundColor;
    let text;
    let style = {};
    switch (status) {
      case 'complete':
        backgroundColor = Colors.topic.complete;
        text = 'Complete!';
        style = {
          left: moderateScale(20),
          right: moderateScale(20),
          paddingVertical: isIOS() ? verticalScale(5) : 0,
          // height: verticalScale(40),
        };
        break;
      case 'update-content':
        backgroundColor = Colors.topic.updateContent;
        text = 'Update Content!';
        style = {
          left: moderateScale(0),
          right: moderateScale(0),
          paddingVertical: isIOS() ? verticalScale(5) : 0,
          // height: verticalScale(40),
        };
        break;
      case 'locked':
        backgroundColor = Colors.topic.background;
        text = `unlocks in ${weeksToUnlock} weeks, ${daysToUnlock} days`;
        style = {
          left: moderateScale(-15),
          right: moderateScale(-15),
          paddingVertical: isIOS() ? verticalScale(2) : 0,
          // height: moderateScale(35),
        };
        break;
    }
    const badgeContainerStyle = StyleSheet.flatten([
      styles.badgeContainer,
      {
        backgroundColor: backgroundColor,
        borderColor: isLocked() ? Colors.topic.unlockText : Colors.white,
      },
      style,
    ]);
    const badgeTextStyle = StyleSheet.flatten([
      styles.badgeText,
      {
        color: isLocked() ? Colors.topic.unlockText : Colors.white,
        fontSize: isLocked() ? scale(11) : scale(14),
      },
    ]);
    if (status !== 'unlocked') {
      return (
        <View style={badgeContainerStyle}>
          <Text style={badgeTextStyle}>{text}</Text>
        </View>
      );
    }
    return <View />;
  };

  const _renderLockIcon = () => {
    if (isLocked()) {
      return (
        <Icon
          name={'lock'}
          size={scale(45)}
          color={Colors.topic.lockedText}
          style={styles.lockIcon}
        />
      );
    }
    return <View />;
  };

  const flattenContainerStyle = StyleSheet.flatten([
    styles.container,
    {
      backgroundColor: isLocked()
        ? Colors.topic.locked
        : Colors.topic.background,
    },
  ]);

  const titleStyle = StyleSheet.flatten([
    styles.title,
    {
      color: isLocked() ? Colors.topic.lockedText : color,
    },
  ]);
  const contentStyle = StyleSheet.flatten([
    styles.content,
    {
      color: isLocked() ? Colors.topic.lockedText : color,
    },
  ]);

  const _renderConnector = () => {
    if (index < 9) {
      return (
        <LinearGradient
          colors={[color, nextColor]}
          style={isOdd ? styles.oddConnector : styles.connector}
        />
      );
    }
    return <View />;
  };

  return (
    <TouchableOpacity activeOpacity={0.8} onPress={onPress}>
      <View style={styles.borderOutside}>
        <AnimatedCircularProgress
          size={scale(130)}
          width={scale(10)}
          fill={isLocked() ? 0 : percent}
          tintColor={color}
          style={containerStyle}
          rotation={0}
          // onAnimationComplete={() => console.log('onAnimationComplete')}
          backgroundColor={
            isLocked() ? Colors.topic.locked : Colors.topic.background
          }>
          {percent => (
            <View style={flattenContainerStyle}>
              <Text style={titleStyle}>{title}</Text>
              <Text style={contentStyle}>{content}</Text>
            </View>
          )}
        </AnimatedCircularProgress>
      </View>
      {_renderConnector()}
      {_renderBadge()}
      {_renderLockIcon()}
    </TouchableOpacity>
  );
};

const connector = {
  position: 'absolute',
  bottom: '0@ms',
  right: Platform.OS === 'ios' ? '143@ms' : '138@ms',
  width: '6@ms',
  height: '30@ms',
  // backgroundColor: Colors.primary400,
  transform: [{rotate: '50deg'}],
  zIndex: 999,
};

const styles = ScaledSheet.create({
  borderOutside: {
    borderColor: Colors.white,
    borderWidth: '5@ms',
    borderRadius: 100,
  },
  container: {
    width: '100%',
    height: '100%',
    backgroundColor: Colors.topicBackground,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    ...textStyle.sm_primary,
  },
  content: {
    ...textStyle.md_primary,
  },
  connector: {
    ...connector,
  },
  oddConnector: {
    ...connector,
    bottom: '0@ms',
    left: Platform.OS === 'ios' ? '143@ms' : '138@ms',
    transform: [{rotate: '-50deg'}],
  },
  badgeContainer: {
    // paddingHorizontal: '10@ms',
    // paddingVertical: 5,
    position: 'absolute',
    top: '10@vs',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.topic.complete,
    borderWidth: '3@ms',
    borderColor: Colors.white,
    borderRadius: '10@ms',
    transform: [{rotate: '-5deg'}],
    zIndex: 999,
  },
  badgeText: {
    ...textStyle.md_bold,
    color: Colors.white,
  },
  lockIcon: {
    position: 'absolute',
    bottom: -10,
    left: 60,
  },
});

ClassroomButton.propTypes = {
  percent: PropTypes.number,
  color: PropTypes.string,
  status: PropTypes.oneOf(['complete', 'update-content', 'locked', 'unlocked']),
  containerStyle: PropTypes.object,
  title: PropTypes.string,
  content: PropTypes.string,
  isOdd: PropTypes.bool,
  nextColor: PropTypes.string,
  daysToUnlock: PropTypes.number,
  weeksToUnlock: PropTypes.number,
  index: PropTypes.number,
  onPress: PropTypes.func.isRequired,
};

ClassroomButton.defaultProps = {
  percent: 0,
  color: Colors.topic.lockedText,
  nextColor: Colors.topic.lockedText,
  status: 'unlocked',
  containerStyle: {},
  title: 'Week default',
  content: '[Topic name]',
  isOdd: true,
  daysToUnlock: null,
  weeksToUnlock: null,
};

export default ClassroomButton;
