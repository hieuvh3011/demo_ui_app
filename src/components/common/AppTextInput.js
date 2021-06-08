import React, {forwardRef, Component} from 'react';
import {
  View,
  TextInput,
  Easing,
  Animated,
  TouchableOpacity,
  Text,
} from 'react-native';
import {
  ScaledSheet,
  scale,
  moderateScale,
  verticalScale,
} from 'react-native-size-matters';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Colors from '@app/utils/colors';
import PropTypes from 'prop-types';
import {Fonts, textStyle} from '@app/utils/TextStyles';
import {isIphoneX} from 'react-native-iphone-x-helper';

class AppTextInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isFocused: false,
    };
    this.inputRef = null;
    this._animatedIsFocused = new Animated.Value(0);
  }

  componentDidUpdate(
    prevProps: Readonly<P>,
    prevState: Readonly<S>,
    snapshot: SS,
  ) {
    Animated.timing(this._animatedIsFocused, {
      toValue: this._getAnimatedValue(),
      duration: 200,
      useNativeDriver: false,
      easing: Easing.linear,
    }).start();
  }

  /**
   * Hàm lấy animation value.
   * Nếu return về 1 thì label sẽ nhỏ lại và thu lên trên,
   * return về 0 thì label sẽ to ra và nằm chính giữa text input
   * */
  _getAnimatedValue = () => {
    const {value} = this.props;
    const {isFocused} = this.state;
    if (isFocused) {
      return 1;
    }
    if (!isFocused && value !== '') {
      return 1;
    }
    return 0;
  };

  _handleFocus = () => this.setState({isFocused: true});
  _handleBlur = () => this.setState({isFocused: false});

  _clearContent = () => {
    this.props.clearContent();
    this.inputRef.clear();
    // console.log('value = ', this.props.value);
  };

  _renderClearButton = () => {
    const {value} = this.props;
    if (value === '') {
      return <View />;
    }
    return (
      <TouchableOpacity
        style={styles.clearButtonArea}
        onPress={this._clearContent}>
        <Icon name={'close'} size={scale(20)} color={this._getIconColor()} />
      </TouchableOpacity>
    );
  };

  _getIconColor = () => {
    const {isFocused} = this.state;
    const {errorText} = this.props;
    if (errorText !== '') {
      return Colors.textInputErrorIcon;
    }
    if (isFocused) {
      return Colors.borderFocused;
    }
    return Colors.labelInput;
  };

  _getContainerStyle = () => {
    const {isFocused} = this.state;
    const {errorText} = this.props;
    if (errorText !== '') {
      return styles.errorContainer;
    }
    if (isFocused) {
      return styles.focusedContainer;
    }
    return styles.container;
  };

  _focus = () => this.inputRef.focus();

  _getTopOutputRange = () => {
    if (isIphoneX()) {
      return [moderateScale(21), moderateScale(8)];
    }
    return [moderateScale(14), moderateScale(4)];
  };

  render() {
    const labelTextStyle = {
      position: 'absolute',
      left: 0,
      top: this._animatedIsFocused?.interpolate({
        inputRange: [0, 1],
        outputRange: this._getTopOutputRange(),
      }),
      fontSize: this._animatedIsFocused?.interpolate({
        inputRange: [0, 1],
        outputRange: [moderateScale(14), moderateScale(12)],
      }),
      fontWeight: 'bold',
      color: Colors.labelInput,
    };
    const {
      label,
      onChange,
      hasError,
      iconName,
      style,
      containerStyle,
      secureTextEntry,
      errorText,
      ...rest
    } = this.props;
    return (
      <View style={[styles.wrapperContainer, containerStyle]}>
        <View style={this._getContainerStyle()}>
          <Icon
            name={iconName}
            color={this._getIconColor()}
            size={scale(22)}
            style={styles.icon}
          />
          <TouchableOpacity
            activeOpacity={1}
            style={styles.inputAndLabel}
            onPress={this._focus}>
            <Animated.Text
              style={[
                labelTextStyle,
                {
                  color:
                    errorText !== ''
                      ? Colors.textInputErrorIcon
                      : Colors.labelInput,
                },
              ]}>
              {label}
            </Animated.Text>
            <TextInput
              ref={ref => (this.inputRef = ref)}
              onFocus={this._handleFocus}
              onBlur={this._handleBlur}
              secureTextEntry={secureTextEntry}
              onChangeText={onChange}
              textAlignVertical={'bottom'}
              style={[
                !secureTextEntry ? styles.input : styles.inputSecured,
                style,
              ]}
              {...rest}
            />
          </TouchableOpacity>
          {this._renderClearButton()}
        </View>
        {errorText !== '' && <Text style={styles.errorText}>{errorText}</Text>}
      </View>
    );
  }
}

const container = {
  width: '100%',
  height: '50@vs',
  borderRadius: '5@ms',
  borderColor: Colors.borderTextInput,
  borderWidth: '1@ms',
  flexDirection: 'row',
  alignItems: 'center',
};

const styles = ScaledSheet.create({
  wrapperContainer: {
    width: '100%',
    marginVertical: '10@vs',
  },
  container: {
    ...container,
  },
  focusedContainer: {
    ...container,
    borderWidth: '2@ms',
    borderColor: Colors.borderFocused,
  },
  errorContainer: {
    ...container,
    borderColor: Colors.textInputErrorIcon,
    backgroundColor: Colors.textInputErrorBackground,
  },
  icon: {
    marginHorizontal: '15@ms',
  },
  inputAndLabel: {
    height: '100%',
    flex: 1,
    justifyContent: 'center',
    paddingTop: '10@vs',
  },
  clearButtonArea: {
    paddingHorizontal: '10@ms',
  },
  input: {
    color: Colors.textInput,
    paddingLeft: 0,
    fontSize: '13@ms',
    fontWeight: 'bold',
    paddingVertical: 0,
  },
  inputSecured: {
    // ...textStyle.md_black,
    // color: Colors.textInput,
    // fontSize: '11@ms',
    fontSize: '13@ms',
    paddingLeft: 0,
  },
  errorText: {
    ...textStyle.md_bold_italic,
    fontSize: '12@ms',
    color: Colors.errorText,
  },
});

AppTextInput.propTypes = {
  value: PropTypes.string.isRequired,
  label: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  isPassword: PropTypes.bool,
  iconName: PropTypes.string,
  style: PropTypes.object,
  containerStyle: PropTypes.object,
  focusedColor: PropTypes.string,
  clearContent: PropTypes.func.isRequired,
  autoCapitalize: PropTypes.string,
  hasError: PropTypes.bool,
  errorText: PropTypes.string,
  secureTextEntry: PropTypes.bool,
};

AppTextInput.defaultProps = {
  value: '',
  label: 'Email',
  iconName: 'email',
  style: {},
  containerStyle: {},
  autoCapitalize: 'none',
  hasError: false,
  secureTextEntry: false,
  errorText: '',
};

export default forwardRef((props, ref) => (
  <AppTextInput {...props} forwardedRef={ref} />
));
