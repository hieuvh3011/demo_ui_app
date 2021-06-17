import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
import {ScaledSheet, scale} from 'react-native-size-matters';
import PropType from 'prop-types';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Colors from '@app/utils/colors';
import {textStyle} from '@app/utils/TextStyles';
import {liveTvIcon} from '@app/assets/images';

const ClassroomCheckBox = props => {
  const {iconSource, text, isDone, onPress, containerStyle} = props;

  const _renderCheckbox = () => {
    const notDoneCheckboxContainer = StyleSheet.flatten([
      styles.checkBoxContainer,
      {backgroundColor: Colors.white},
    ]);
    if (isDone) {
      return (
        <View style={[styles.checkBoxContainer]}>
          <Icon size={scale(17)} name={'check'} color={Colors.white} />
        </View>
      );
    }
    return (
      <View style={notDoneCheckboxContainer}>
        <View style={styles.notDoneCheckbox} />
      </View>
    );
  };

  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={onPress}
      style={[styles.container, containerStyle]}>
      <View style={styles.row}>
        <Image source={iconSource} style={styles.icon} />
        <Text style={styles.text}>{text}</Text>
      </View>
      {_renderCheckbox()}
    </TouchableOpacity>
  );
};

const styles = ScaledSheet.create({
  container: {
    width: '100%',
    height: '50@vs',
    backgroundColor: Colors.primary400,
    alignItems: 'center',
    borderRadius: '15@ms',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: '5@vs',
  },
  icon: {
    marginHorizontal: '20@ms',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  text: {
    ...textStyle.md_bold,
    fontSize: '14@ms',
    color: Colors.white,
  },
  checkBoxContainer: {
    width: '30@ms',
    height: '30@ms',
    borderRadius: '15@ms',
    borderWidth: '2@ms',
    borderColor: Colors.white,
    marginHorizontal: '20@ms',
    backgroundColor: Colors.success,
    alignItems: 'center',
    justifyContent: 'center',
  },
  notDoneCheckbox: {
    width: '100%',
    height: '100%',
    backgroundColor: Colors.white,
    borderColor: Colors.errorBadge,
    borderWidth: '2@ms',
    borderRadius: '15@ms',
  },
});

ClassroomCheckBox.propTypes = {
  iconName: PropType.string,
  text: PropType.string,
  isDone: PropType.bool,
  onPress: PropType.func,
  containerStyle: PropType.object,
  children: PropType.element,
  iconSource: PropType.string,
};

ClassroomCheckBox.defaultProps = {
  iconName: 'home',
  text: 'Default text',
  isDone: true,
  onPress: () => {},
  children: null,
  iconSource: liveTvIcon,
};

export default ClassroomCheckBox;
