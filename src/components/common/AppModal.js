import React from 'react';
import {View, Text, Modal, TouchableOpacity} from 'react-native';
import PropTypes from 'prop-types';
import {scale, ScaledSheet} from 'react-native-size-matters';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Colors from '@app/utils/colors';
import AppButton from '@app/components/common/AppButton';
import I18n from '@app/i18n/i18n';

const AppModal = props => {
  const {visible, onPressCloseModal, children, successMessage, animationType} =
    props;

  const _renderModalContent = () => {
    if (children !== null) {
      return children;
    }
    return (
      <View style={styles.modalView}>
        <View style={styles.messageContainer}>
          <View style={styles.successBadge}>
            <Icon
              name={'check-bold'}
              size={scale(30)}
              color={Colors.white}
              style={styles.iconCheck}
            />
          </View>
          <Text style={styles.text}>{successMessage}</Text>
        </View>
        <View style={styles.buttonContainer}>
          <AppButton
            text={I18n.t('modal.okay')}
            style={styles.button}
            onPress={onPressCloseModal}
          />
        </View>
        <TouchableOpacity style={styles.closeModal} onPress={onPressCloseModal}>
          <Icon name={'close'} color={Colors.primary} size={scale(22)} />
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <Modal visible={visible} transparent={true} animationType={animationType}>
      <View style={styles.modalContainer}>{_renderModalContent()}</View>
    </Modal>
  );
};

const styles = ScaledSheet.create({
  modalContainer: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.6)',
    justifyContent: 'flex-end',
  },
  modalView: {
    height: '95%',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.background,
    borderRadius: '25@ms',
  },
  buttonContainer: {
    width: '100%',
    paddingVertical: '20@vs',
    paddingHorizontal: '15@ms',
  },
  button: {
    shadowColor: Colors.shadow,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
    backgroundColor: Colors.primary400,
  },
  messageContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: '10@ms',
  },
  text: {
    color: Colors.labelInput,
    fontWeight: 'bold',
    fontSize: '16@ms',
  },
  successBadge: {
    width: '50@ms',
    height: '50@ms',
    marginVertical: '10@vs',
    backgroundColor: Colors.success,
    borderRadius: '25@ms',
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconCheck: {
    fontWeight: 'bold',
  },
  closeModal: {
    position: 'absolute',
    top: '10@ms',
    right: '10@ms',
    padding: '10@ms',
  },
});

AppModal.propTypes = {
  visible: PropTypes.bool,
  onPressCloseModal: PropTypes.func,
  children: PropTypes.element,
  successMessage: PropTypes.string,
  animationType: PropTypes.oneOf(['none', 'slide', 'fade']),
};

AppModal.defaultProps = {
  children: null,
  visible: true,
  successMessage: '',
  animationType: 'slide',
};

export default AppModal;
