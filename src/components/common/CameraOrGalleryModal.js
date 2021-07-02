import React from 'react';
import {View, Text, Modal, TouchableOpacity} from 'react-native';
import {ScaledSheet, scale} from 'react-native-size-matters';
import PropTypes from 'prop-types';
import Colors from '@app/utils/colors';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {textStyle} from '@app/utils/TextStyles';
import I18n from 'react-native-i18n';

const CameraOrGalleryModal = props => {
  const {closeModal, openCamera, openGallery} = props;
  const _renderOptions = () => {
    return (
      <>
        <TouchableOpacity
          style={styles.optionContainer}
          activeOpacity={0.8}
          onPress={openCamera}>
          <View style={styles.iconArea}>
            <Icon
              name={'camera-outline'}
              size={scale(20)}
              color={Colors.text}
            />
          </View>

          <Text style={styles.optionText}>{I18n.t('profile.open_camera')}</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.optionContainer}
          activeOpacity={0.8}
          onPress={openGallery}>
          <View style={styles.iconArea}>
            <Icon name={'image-outline'} size={scale(20)} color={Colors.text} />
          </View>

          <Text style={styles.optionText}>
            {I18n.t('profile.select_from_gallery')}
          </Text>
        </TouchableOpacity>
      </>
    );
  };

  return (
    <Modal
      animationType={'fade'}
      visible={true}
      transparent={true}
      onRequestClose={closeModal}>
      <TouchableOpacity
        style={styles.container}
        onPress={closeModal}
        activeOpacity={1}>
        <TouchableOpacity activeOpacity={1} style={styles.contentContainer}>
          {_renderOptions()}
        </TouchableOpacity>
      </TouchableOpacity>
    </Modal>
  );
};

const styles = ScaledSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.backgroundGreyTransparent,
    justifyContent: 'flex-end',
  },
  contentContainer: {
    backgroundColor: Colors.white,
    borderRadius: '10@ms',
    paddingTop: '10@vs',
    paddingBottom: '20@vs',
  },
  blank: {
    height: '30@vs',
  },
  optionContainer: {
    width: '100%',
    paddingVertical: '5@vs',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  optionText: {
    ...textStyle.md_bold,
  },
  titleContainer: {
    width: '100%',
    borderBottomWidth: '1@vs',
    paddingVertical: '10@vs',
    borderBottomColor: Colors.borderBottom,
    alignItems: 'center',
  },
  selectPhotoText: {
    ...textStyle.md_black,
    fontSize: '12@ms',
    color: Colors.primary,
  },
  iconArea: {
    marginHorizontal: '10@ms',
    padding: '8@ms',
    backgroundColor: 'rgba(0,0,0,0.1)',
    borderRadius: '100@ms',
  },
});

CameraOrGalleryModal.propTypes = {
  closeModal: PropTypes.func.isRequired,
  openCamera: PropTypes.func.isRequired,
  openGallery: PropTypes.func.isRequired,
};

CameraOrGalleryModal.defaultProps = {
  closeModal: () => {},
  openCamera: () => {},
  openGallery: () => {},
};

export default CameraOrGalleryModal;
