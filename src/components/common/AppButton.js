import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {ScaledSheet} from 'react-native-size-matters';
import PropType from 'prop-types';
import Colors from '@app/utils/colors';

const AppButton = (props: any): JSX.Element => {
  const {
    text,
    backgroundColor,
    textColor,
    onPress,
    style,
    textStyle,
    activeOpacity,
    children,
    disabled,
    disabledStyle,
    disabledTextStyle,
    ...rest
  } = props;

  const _renderChildren = () => {
    if (children !== null) {
      return children;
    }
    return (
      <Text
        style={[
          styles.text,
          {color: textColor},
          disabled ? disabledTextStyle : textStyle,
        ]}>
        {text}
      </Text>
    );
  };

  return disabled === true ? (
    <View
      style={[styles.container, {backgroundColor}, disabledStyle]}
      activeOpacity={activeOpacity}
      {...rest}>
      {_renderChildren()}
    </View>
  ) : (
    <TouchableOpacity
      style={[styles.container, {backgroundColor}, style]}
      onPress={onPress}
      activeOpacity={activeOpacity}
      {...rest}>
      {_renderChildren()}
    </TouchableOpacity>
  );
};

const styles = ScaledSheet.create({
  container: {
    width: '100%',
    height: '40@vs',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '15@ms',
    marginVertical: '5@vs',
  },
  text: {
    fontSize: '14@ms',
    fontWeight: 'bold',
  },
});

AppButton.propTypes = {
  text: PropType.string,
  textColor: PropType.string,
  backgroundColor: PropType.string,
  onPress: PropType.func,
  style: PropType.object,
  textStyle: PropType.object,
  activeOpacity: PropType.number,
  children: PropType.element,
  disabled: PropType.bool,
  disabledStyle: PropType.object,
  disabledTextStyle: PropType.object,
};

AppButton.defaultProps = {
  backgroundColor: Colors.primary,
  textColor: Colors.white,
  activeOpacity: 0.6,
  disabled: false,
  children: null,
};

export default AppButton;
