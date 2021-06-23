import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import {ScaledSheet} from 'react-native-size-matters';
import PropType from 'prop-types';
import Colors from '@app/utils/colors';
import {textStyle} from '@app/utils/TextStyles';
import {defaultProfilePicture, demoArticleThumbnails} from '@app/assets/images';

const ArticleItem = React.memo(function ArticleItem(props) {
  const {
    imageSource,
    title,
    description,
    isShort,
    numberOfLikes,
    containerStyle,
    onPress,
  } = props;

  if (isShort) {
    return (
      <TouchableOpacity
        activeOpacity={0.8}
        style={[styles.shortContainer, containerStyle]}
        onPress={onPress}>
        <Image source={imageSource} style={styles.image} />
        <View style={styles.text}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.description}>{description}</Text>
        </View>
      </TouchableOpacity>
    );
  }

  return (
    <TouchableOpacity
      activeOpacity={0.8}
      style={[styles.container, containerStyle]}
      onPress={onPress}>
      <Image source={imageSource} style={styles.image} />
      <View style={styles.text}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.description}>{description}</Text>
      </View>
      <Text style={styles.like}>{`${numberOfLikes} likes`}</Text>
    </TouchableOpacity>
  );
});

const articleContainer = {
  width: '100%',
  minHeight: '60@vs',
  alignItems: 'center',
  justifyContent: 'space-between',
  backgroundColor: Colors.secondary,
  borderRadius: '10@ms',
  flexDirection: 'row',
  paddingVertical: '5@vs',
  paddingHorizontal: '5@vs',
};

const styles = ScaledSheet.create({
  container: {
    ...articleContainer,
  },
  shortContainer: {
    ...articleContainer,
    width: '70%',
  },
  title: {
    ...textStyle.md_bold,
    color: Colors.secondary900,
  },
  description: {
    ...textStyle.md_bold,
    fontSize: '11@ms',
    color: Colors.secondary900,
    paddingTop: '5@vs',
  },
  image: {
    height: '100%',
    width: '100@ms',
    borderRadius: '10@ms',
  },
  text: {
    paddingHorizontal: '15@ms',
    justifyContent: 'center',
    alignItems: 'flex-start',
    flex: 1,
  },
  like: {
    ...textStyle.sm_black,
    paddingRight: '10@ms',
  },
});

ArticleItem.propTypes = {
  imageSource: PropType.number,
  title: PropType.string,
  description: PropType.string,
  isShort: PropType.bool,
  numberOfLikes: PropType.number,
  containerStyle: PropType.object,
  onPress: PropType.func,
};

ArticleItem.defaultProps = {
  imageSource: demoArticleThumbnails,
  title: 'Article Title',
  description: 'Article Description',
  isShort: false,
  numberOfLikes: 10,
  containerStyle: {},
  onPress: () => {},
};

export default React.memo(ArticleItem);
