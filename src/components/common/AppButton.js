import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {ScaledSheet} from 'react-native-size-matters';
import PropType from 'prop-types';
import Colors from '@app/utils/colors';

const AppButton = React.memo(function AppButton(props) {
  const {
    text,
    backgroundColor,
    onPress,
    style,
    textStyle,
    activeOpacity,
    children,
    disabled,
    disabledStyle,
    disabledTextStyle,
    badgeComponent,
    ...rest
  } = props;

  const _renderChildren = () => {
    if (children !== null) {
      return children;
    }
    return (
      <>
        <Text
          style={[
            disabled ? styles.disabledText : styles.text,
            disabled ? disabledTextStyle : textStyle,
          ]}>
          {text}
        </Text>
        {badgeComponent}
      </>
    );
  };

  return disabled === true ? (
    <View
      style={[styles.disabledContainer, disabledStyle]}
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
});

const container = {
  width: '100%',
  height: '40@vs',
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: '15@ms',
  marginVertical: '5@vs',
};

const styles = ScaledSheet.create({
  container: {
    ...container,
  },
  text: {
    fontSize: '14@ms',
    fontWeight: 'bold',
    color: Colors.white,
  },
  disabledContainer: {
    ...container,
    backgroundColor: Colors.disableButton,
  },
  disabledText: {
    fontSize: '14@ms',
    fontWeight: 'bold',
    color: Colors.disabledButtonText,
  },
});

AppButton.propTypes = {
  text: PropType.string,
  backgroundColor: PropType.string,
  onPress: PropType.func,
  style: PropType.object,
  textStyle: PropType.object,
  activeOpacity: PropType.number,
  children: PropType.node,
  disabled: PropType.bool,
  disabledStyle: PropType.object,
  disabledTextStyle: PropType.object,
  badgeComponent: PropType.node,
};

AppButton.defaultProps = {
  backgroundColor: Colors.primary,
  activeOpacity: 0.6,
  disabled: false,
  children: null,
};

export default React.memo(AppButton);
