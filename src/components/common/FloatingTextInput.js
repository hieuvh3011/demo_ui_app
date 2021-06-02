import React, {createRef} from 'react';
import {ScaledSheet, moderateScale} from 'react-native-size-matters';
import {StyleSheet} from 'react-native';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Colors from '@app/utils/colors';
import {FloatingLabelInput} from 'react-native-floating-label-input/index';

const FloatingTextInput = props => {
  const {
    value,
    onChange,
    error,
    label,
    isPassword,
    iconName,
    style,
    focusedColor,
    ...rest
  } = props;
  const ref = createRef();
  const containerStyle = StyleSheet.flatten([styles.container, style]);
  const focusedContainerStyle = StyleSheet.flatten([
    styles.focusedContainer,
    style,
  ]);
  return (
    <FloatingLabelInput
      value={value}
      ref={ref}
      label={label}
      isPassword={isPassword}
      customShowPasswordComponent={null}
      customHidePasswordComponent={null}
      leftComponent={
        <Icon
          name={iconName}
          color={ref?.current?.isFocused() ? Colors.primary : Colors.text}
          size={moderateScale(25)}
          style={styles.icon}
        />
      }
      containerStyles={
        ref?.current?.isFocused() ? focusedContainerStyle : containerStyle
      }
      customLabelStyles={customLabelStyles}
      labelStyles={labelText}
      inputStyles={styles.input}
      onChangeText={text => onChange(text)}
      {...rest}
    />
  );
};

const container = {
  width: '100%',
  height: '45@vs',
  borderWidth: '1@ms',
  borderRadius: '5@ms',
  borderColor: 'rgba(160, 140, 107, 1)',
  marginVertical: '10@vs',
};

const labelText = {
  fontSize: '14@ms',
  fontWeight: 'bold',
  color: Colors.labelInput,
};

const customLabelStyles = {
  colorFocused: Colors.labelInput,
  colorBlurred: Colors.labelInput,
  fontSizeFocused: 14,
  topFocused: -19,
};

const styles = ScaledSheet.create({
  container: {
    ...container,
  },
  focusedContainer: {
    ...container,
    borderColor: Colors.primary,
  },
  icon: {
    marginHorizontal: '15@ms',
  },
  input: {
    paddingHorizontal: '5@ms',
    ...labelText,
    color: Colors.textInput,
  },
  label: {
    ...labelText,
  },
});

FloatingTextInput.propTypes = {
  value: PropTypes.string.isRequired,
  label: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  isPassword: PropTypes.bool,
  iconName: PropTypes.string,
  style: PropTypes.object,
  focusedColor: PropTypes.string,
};

FloatingTextInput.defaultProps = {
  value: '',
  label: 'Email',
  iconName: 'email',
  style: {},
};

export default FloatingTextInput;
