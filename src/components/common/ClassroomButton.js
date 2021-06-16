import React from 'react';
import {View, Text, Dimensions, StyleSheet} from 'react-native';
import {ScaledSheet, scale} from 'react-native-size-matters';
import PropTypes from 'prop-types';
import Colors from '@app/utils/colors';
import * as Progress from 'react-native-progress';
import {AnimatedCircularProgress} from 'react-native-circular-progress';
import {textStyle} from '@app/utils/TextStyles';
import LinearGradient from 'react-native-linear-gradient';

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
  } = props;

  const _renderBadge = () => {
    let backgroundColor;
    let text;
    switch (status) {
      case 'complete':
        backgroundColor = Colors.topic.complete;
        text = 'Complete!';
        break;
      case 'update-content':
        backgroundColor = Colors.topic.updateContent;
        text = 'Update Content!';
        break;
      case 'locked':
        backgroundColor = Colors.topic.background;
        text = `unlocks in ${weeksToUnlock} weeks, ${daysToUnlock} day`;
        break;
    }
    const badgeContainerStyle = StyleSheet.flatten([
      styles.badgeContainer,
      {
        backgroundColor: backgroundColor,
        borderColor:
          status === 'locked' ? Colors.topic.unlockText : Colors.white,
      },
    ]);
    const badgeTextStyle = StyleSheet.flatten([
      styles.badgeText,
      {color: status === 'locked' ? Colors.topic.unlockText : Colors.white},
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

  const flattenContainerStyle = StyleSheet.flatten([
    styles.container,
    {
      backgroundColor:
        status === 'locked' ? Colors.topic.locked : Colors.topic.background,
    },
  ]);

  return (
    <View>
      <View style={styles.borderOutside}>
        <AnimatedCircularProgress
          size={scale(130)}
          width={scale(10)}
          fill={status === 'locked' ? 0 : percent}
          tintColor={color}
          style={containerStyle}
          rotation={0}
          // onAnimationComplete={() => console.log('onAnimationComplete')}
          backgroundColor={
            status === 'locked' ? Colors.topic.locked : Colors.topic.background
          }>
          {percent => (
            <View style={flattenContainerStyle}>
              <Text style={[styles.title, {color: color}]}>{title}</Text>
              <Text style={[styles.content, {color: color}]}>{content}</Text>
            </View>
          )}
        </AnimatedCircularProgress>
      </View>
      {index < 9 && (
        <LinearGradient
          colors={[color, nextColor]}
          style={isOdd ? styles.oddConnector : styles.connector}
        />
      )}
      {_renderBadge()}
    </View>
  );
};

const connector = {
  position: 'absolute',
  bottom: '0@ms',
  right: '143@ms',
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
    // backgroundColor: '#0077CC',
    bottom: '0@ms',
    left: '143@ms',
    transform: [{rotate: '-50deg'}],
  },
  badgeContainer: {
    paddingHorizontal: '10@ms',
    paddingVertical: '5@vs',
    position: 'absolute',
    top: '10@vs',
    backgroundColor: Colors.topic.complete,
    borderWidth: '3@ms',
    borderColor: Colors.white,
    borderRadius: '10@ms',
  },
  badgeText: {
    ...textStyle.md_bold,
    color: Colors.white,
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
};

ClassroomButton.defaultProps = {
  percent: 0,
  color: Colors.primary,
  nextColor: 'grey',
  status: 'unlocked',
  containerStyle: {},
  title: 'Week default',
  content: '[Topic name]',
  isOdd: true,
  daysToUnlock: null,
  weeksToUnlock: null,
};

export default ClassroomButton;
