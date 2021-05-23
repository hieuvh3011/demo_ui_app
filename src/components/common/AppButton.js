import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
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
  } = props;
  return (
    <TouchableOpacity
      style={[styles.container, {backgroundColor}, style]}
      onPress={onPress}
      activeOpacity={activeOpacity}>
      {children !== null ? (
        children
      ) : (
        <Text style={[styles.text, {color: textColor}, textStyle]}>{text}</Text>
      )}
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
    fontSize: '16@ms',
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
};

AppButton.defaultProps = {
  backgroundColor: Colors.primary,
  textColor: Colors.white,
  activeOpacity: 0.6,
  children: null,
};

export default AppButton;
