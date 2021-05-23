import React from 'react';
import {View, Text, Dimensions, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {ScaledSheet, scale} from 'react-native-size-matters';
import {getStatusBarHeight} from 'react-native-iphone-x-helper';
import PropType from 'prop-types';
import Colors from '@app/utils/colors';

const {width} = Dimensions.get('window');

const Header = props => {
  const {
    hasBackLeft,
    left,
    centerText,
    centerTextStyle,
    right,
    hasRight,
    badgeNumber,
  } = props;

  const _renderLeft = () => {
    if (left !== null) {
      return left;
    }
    if (hasBackLeft) {
      return (
        <TouchableOpacity style={styles.iconButton} activeOpacity={0.8}>
          <Icon name={'arrow-left'} size={scale(20)} color={Colors.white} />
        </TouchableOpacity>
      );
    }
    return <View style={styles.emptyIcon} />;
  };

  const _renderRight = () => {
    if (right !== null) {
      return right;
    }
    if (hasRight) {
      return (
        <TouchableOpacity style={styles.iconButton} activeOpacity={0.8}>
          <Icon name={'menu'} size={scale(20)} color={Colors.white} />
          {_renderBadge()}
        </TouchableOpacity>
      );
    }
    return <View style={styles.emptyIcon} />;
  };

  const _renderBadge = () => {
    if (badgeNumber !== 0) {
      return (
        <View style={styles.badgeContainer}>
          <View style={styles.badge}>
            <Text style={styles.badgeNumber}>{badgeNumber}</Text>
          </View>
        </View>
      );
    }
    return <View />;
  };

  return (
    <View style={styles.container}>
      {_renderLeft()}
      <Text style={[styles.text, centerTextStyle]}>{centerText}</Text>
      {_renderRight()}
    </View>
  );
};

const defaultCenterTextStyle = {
  color: Colors.headerTitle,
  fontSize: '25@ms',
  fontWeight: 'bold',
};

const styles = ScaledSheet.create({
  container: {
    width: width,
    height: '120@ms',
    paddingTop: getStatusBarHeight(),
    paddingHorizontal: '15@ms',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    borderBottomWidth: '0.6@vs',
    borderBottomColor: Colors.borderBottom,
  },
  text: {
    ...defaultCenterTextStyle,
  },
  iconButton: {
    width: '40@ms',
    height: '40@ms',
    borderRadius: '10@ms',
    backgroundColor: Colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: Colors.shadow,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  emptyIcon: {
    width: '40@ms',
    height: '40@ms',
  },
  badge: {
    paddingHorizontal: '6.5@ms',
    paddingVertical: '2@ms',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.badgeBackground,
    borderRadius: '100@ms',
  },
  badgeContainer: {
    paddingHorizontal: '2@ms',
    paddingVertical: '2@ms',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.white,
    borderRadius: '100@ms',
    position: 'absolute',
    top: '-10@ms',
    right: '-10@ms',
  },
  badgeNumber: {
    fontSize: '12@ms',
    color: Colors.white,
    fontWeight: 'bold',
  },
});

Header.propTypes = {
  left: PropType.element,
  centerText: PropType.string,
  centerTextStyle: PropType.object,
  right: PropType.element,
  hasBackLeft: PropType.bool,
  hasRight: PropType.bool,
};

Header.defaultProps = {
  centerText: 'Default Header',
  left: null,
  hasBackLeft: true,
  hasRight: true,
  right: null,
  badgeNumber: 1,
};

export default Header;