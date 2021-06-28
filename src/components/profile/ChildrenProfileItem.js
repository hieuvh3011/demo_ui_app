import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import {ScaledSheet} from 'react-native-size-matters';

import PropTypes from 'prop-types';
import {defaultProfilePicture} from '@app/assets/images';
import Colors from '@app/utils/colors';
import {textStyle} from '@app/utils/TextStyles';

const ChildrenProfileItem = props => {
  const {firstName, lastName, age, weight, height, imageUrl, onPress} = props;
  return (
    <TouchableOpacity
      style={styles.container}
      activeOpacity={0.8}
      onPress={onPress}>
      <View style={styles.info}>
        <Text style={styles.name}>{`${firstName} ${lastName}`}</Text>
        <Text style={styles.infoText}>{`${age} years old`}</Text>
        <Text style={styles.infoText}>{weight}</Text>
        <Text style={styles.infoText}>{height}</Text>
      </View>
      <Image source={imageUrl} style={styles.image} />
    </TouchableOpacity>
  );
};

const styles = ScaledSheet.create({
  container: {
    width: '100%',
    paddingVertical: '10@vs',
    flexDirection: 'row',
    backgroundColor: Colors.topic.background,
    borderRadius: '10@ms',
  },
  image: {
    flex: 1,
    height: '95@vs',
    borderRadius: '5@ms',
    marginHorizontal: '10@ms',
  },
  info: {
    flex: 1,
    paddingLeft: '20@ms',
    paddingRight: '10@ms',
    paddingVertical: '10@vs',
  },
  name: {
    ...textStyle.h3_black,
    fontSize: '17@ms',
    color: Colors.dark,
    marginBottom: '3@vs',
  },
  infoText: {
    ...textStyle.md_bold,
    fontSize: '12@ms',
    color: Colors.text,
    lineHeight: '16@vs',
  },
});

ChildrenProfileItem.propTypes = {
  firstName: PropTypes.string,
  lastName: PropTypes.string,
  age: PropTypes.number,
  weight: PropTypes.string,
  height: PropTypes.string,
  imageUrl: PropTypes.number,
  onPress: PropTypes.func,
};

ChildrenProfileItem.defaultProps = {
  imageUrl: defaultProfilePicture,
  onPress: () => {},
};

export default React.memo(ChildrenProfileItem);
