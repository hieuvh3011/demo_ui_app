import React, {Component, createRef} from 'react';
import {ScaledSheet, moderateScale} from 'react-native-size-matters';
import {StyleSheet, TouchableOpacity} from 'react-native';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Colors from '@app/utils/colors';
import {FloatingLabelInput} from 'react-native-floating-label-input/index';
import {Fonts, textStyle} from '@app/utils/TextStyles';

class FloatingTextInput extends Component {
  constructor(props) {
    super(props);
    this.textInput = {};
  }

  componentDidMount() {
    console.log('text input = ', this.textInput);
  }

  _clearContent = () => this.textInput.clear();

  render() {
    const containerStyle = StyleSheet.flatten([styles.container, style]);
    const focusedContainerStyle = StyleSheet.flatten([
      styles.focusedContainer,
      style,
    ]);
    const {
      value,
      onChange,
      error,
      label,
      isPassword,
      iconName,
      style,
      focusedColor,
      clearContent,
      autoCapitalize,
      ...rest
    } = this.props;
    return (
      <FloatingLabelInput
        value={value}
        ref={ref => (this.textInput = ref)}
        label={label}
        isPassword={isPassword}
        customShowPasswordComponent={null}
        customHidePasswordComponent={null}
        autoCapitalize={autoCapitalize}
        leftComponent={
          <Icon
            name={iconName}
            color={Colors.primary}
            size={moderateScale(25)}
            style={styles.icon}
          />
        }
        rightComponent={
          value !== '' && (
            <TouchableOpacity onPress={this._clearContent}>
              <Icon
                name={'close-circle'}
                color={Colors.primary}
                size={moderateScale(20)}
                style={styles.icon}
              />
            </TouchableOpacity>
          )
        }
        containerStyles={containerStyle}
        customLabelStyles={customLabelStyles}
        labelStyles={labelText}
        inputStyles={styles.input}
        onChangeText={text => onChange(text)}
        {...rest}
      />
    );
  }
}

const container = {
  width: '100%',
  height: '50@vs',
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
    ...textStyle.md_bold,
    backgroundColor: 'tomato',
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
  clearContent: PropTypes.func.isRequired,
  autoCapitalize: PropTypes.string,
};

FloatingTextInput.defaultProps = {
  value: '',
  label: 'Email',
  iconName: 'email',
  style: {},
  autoCapitalize: 'none',
};

export default FloatingTextInput;
