import React from 'react';
import {Modal, View, ActivityIndicator, Text} from 'react-native';
import {ScaledSheet} from 'react-native-size-matters';
import PropTypes from 'prop-types';
import Colors from '@app/utils/colors';
import {Fonts, textStyle} from '@app/utils/TextStyles';

const Loading = props => {
  const {isLoading, onRequestClose, loadingText, noLoadingText} = props;

  const _renderLoading = () => {
    if (loadingText === '') {
      return <ActivityIndicator size={'large'} color={Colors.primary} />;
    }
    return (
      <View style={styles.modalView}>
        <ActivityIndicator size={'large'} color={Colors.primary} />
        <Text style={styles.loadingText}>{loadingText}</Text>
      </View>
    );
  };

  return (
    <View>
      <Modal
        // animationType="fade"
        transparent={true}
        visible={isLoading}
        onRequestClose={onRequestClose}>
        <View
          style={
            loadingText === ''
              ? styles.noLoadingTextContainer
              : styles.container
          }>
          {_renderLoading()}
        </View>
      </Modal>
    </View>
  );
};

const container = {
  flex: 1,
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: Colors.backgroundGreyTransparent,
};

const styles = ScaledSheet.create({
  container: {
    ...container,
  },
  noLoadingTextContainer: {
    ...container,
    backgroundColor: 'rgba(0,0,0,0.1)',
  },
  modalView: {
    margin: 20,
    backgroundColor: Colors.white,
    borderRadius: '10@ms',
    alignItems: 'center',
    justifyContent: 'flex-start',
    shadowColor: Colors.shadow,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    width: '80%',
    flexDirection: 'row',
    padding: '25@ms',
  },
  loadingText: {
    ...textStyle.h5_black,
    paddingHorizontal: '15@ms',
  },
});

Loading.propTypes = {
  isLoading: PropTypes.bool,
  onRequestClose: PropTypes.func,
  loadingText: PropTypes.string,
  noLoadingText: PropTypes.bool,
};

Loading.defaultProps = {
  loadingText: '',
};

export default Loading;
