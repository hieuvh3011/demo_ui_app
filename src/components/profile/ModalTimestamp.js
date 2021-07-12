import React, {useState} from 'react';
import {
  Modal,
  View,
  Text,
  ScrollView,
  Image,
  TouchableOpacity,
} from 'react-native';
import {ScaledSheet, moderateScale} from 'react-native-size-matters';
import PropType from 'prop-types';
import Colors from '@app/utils/colors';
import I18n from '@app/i18n/i18n';
import {textStyle} from '@app/utils/TextStyles';
import AppTextInput from '@app/components/common/AppTextInput';
import AppButton from '@app/components/common/AppButton';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import * as ImagePicker from 'react-native-image-picker';
import CameraOrGalleryModal from '@app/components/common/CameraOrGalleryModal';

const ModalTimestamp = props => {
  const {
    onClose,
    onPressSubmit,
    mode,
    initWeight,
    initHeight,
    initImage,
    id,
    onDeleteTimestamp,
  } = props;
  const [weight, setWeight] = useState(initWeight);
  const [height, setHeight] = useState(initHeight);
  const [image, setImage] = useState(initImage);
  const [showModalPicker, setModalPicker] = useState(false);

  const _onChangeWeight = text => {
    setWeight(text);
  };

  const _onChangeHeight = text => {
    setHeight(text);
  };

  const _clearWeight = () => setWeight('');
  const _clearHeight = () => setHeight('');

  const _closePickerModal = () => setModalPicker(false);

  const _renderWeightHeight = () => {
    return (
      <View style={styles.row}>
        <View style={styles.inputContainerLeft}>
          <Text style={styles.label}>{I18n.t('profile.weight_label')}</Text>
          <AppTextInput
            label={I18n.t('profile.weight')}
            value={weight}
            onChange={_onChangeWeight}
            clearContent={_clearWeight}
            keyboardType={'numeric'}
            iconName={'dumbbell'}
          />
        </View>
        <View style={styles.inputContainerRight}>
          <Text style={styles.label}>{I18n.t('profile.height_label')}</Text>
          <AppTextInput
            label={I18n.t('profile.height')}
            value={height}
            onChange={_onChangeHeight}
            clearContent={_clearHeight}
            keyboardType={'numeric'}
            iconName={'arrow-up-down'}
          />
        </View>
      </View>
    );
  };

  const _renderPhoto = () => {
    if (image === '') {
      return (
        <View>
          <Text style={styles.label}>{I18n.t('profile.photo')}</Text>
          <AppButton style={styles.button} onPress={_onPressUpload}>
            <Icon
              name={'upload'}
              size={moderateScale(20)}
              color={Colors.white}
            />
            <Text style={styles.textButton}>
              {I18n.t('profile.upload_photo')}
            </Text>
          </AppButton>
        </View>
      );
    }
    return (
      <View>
        <Text style={styles.label}>{I18n.t('profile.photo')}</Text>
        <Image source={{uri: image}} style={styles.image} />
        <View style={styles.row}>
          <AppButton style={styles.deletePhoto} onPress={_deletePhoto}>
            <Icon
              name={'delete'}
              color={Colors.white}
              size={moderateScale(20)}
            />
            <Text style={styles.whiteTextButton}>
              {I18n.t('profile.delete_photo')}
            </Text>
          </AppButton>
          <AppButton style={styles.replacePhoto} onPress={_onPressUpload}>
            <Icon
              name={'upload'}
              color={Colors.white}
              size={moderateScale(20)}
            />
            <Text style={styles.whiteTextButton}>
              {I18n.t('profile.replace_photo')}
            </Text>
          </AppButton>
        </View>
        <AppButton style={styles.removeTimestamp} onPress={_removeTimestamp}>
          <Icon name={'delete'} color={Colors.white} size={moderateScale(20)} />
          <Text style={styles.whiteTextButton}>
            {I18n.t('profile.remove_timestamp')}
          </Text>
        </AppButton>
        <View style={styles.row}>
          <AppButton
            style={styles.cancel}
            text={I18n.t('profile.cancel')}
            textStyle={styles.primaryTextButton}
            onPress={_cancel}
          />
          <AppButton
            style={styles.submit}
            text={I18n.t('profile.submit')}
            onPress={_submit}
          />
        </View>
      </View>
    );
  };

  const _openGallery = () => {
    ImagePicker?.launchImageLibrary(
      {
        mediaType: 'photo',
      },
      response => {
        setModalPicker(false);
        if (response && !response.didCancel) {
          const assets = response.assets[0];
          if (assets) {
            setImage(assets?.uri);
          }
        }
      },
    );
  };

  const _openCamera = () => {
    ImagePicker.launchCamera({}, response => {
      setModalPicker(false);
      if (response && !response.didCancel) {
        const assets = response.assets[0];
        if (assets) {
          setImage(assets?.uri);
        }
      }
    });
  };

  const _onPressUpload = () => {
    setModalPicker(true);
  };

  const _deletePhoto = () => {
    setImage('');
  };

  const _removeTimestamp = () => {
    if (mode === 'add') {
      onClose();
    } else {
      onDeleteTimestamp(id);
    }
  };

  const _cancel = () => onClose();

  const _submit = () => {
    const result = {
      id,
      image,
      weight,
      height,
      date: new Date(),
    };
    onPressSubmit(result);
  };

  return (
    <Modal visible={true} transparent={true} animationType={'fade'}>
      <View style={styles.modalContainer}>
        <View style={styles.modalView}>
          <ScrollView contentContainerStyle={styles.list}>
            <Text style={styles.addTimestamp}>
              {mode === 'add'
                ? I18n.t('profile.add_timestamp')
                : I18n.t('profile.edit_timestamp')}
            </Text>
            {_renderWeightHeight()}
            {_renderPhoto()}
          </ScrollView>
          <TouchableOpacity style={styles.closeButton} onPress={onClose}>
            <Icon
              name={'close'}
              color={Colors.primary400}
              size={moderateScale(25)}
            />
          </TouchableOpacity>
        </View>
        {showModalPicker && (
          <CameraOrGalleryModal
            closeModal={_closePickerModal}
            openCamera={_openCamera}
            openGallery={_openGallery}
          />
        )}
      </View>
    </Modal>
  );
};

const rowButton = {
  flex: 1,
  flexDirection: 'row',
  alignItems: 'center',
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
    backgroundColor: Colors.background,
    borderTopRightRadius: '25@ms',
    borderTopLeftRadius: '25@ms',
  },
  list: {
    width: '100%',
    paddingHorizontal: '15@ms',
  },
  addTimestamp: {
    ...textStyle.h2_primary,
    marginTop: '40@vs',
    marginBottom: '10@vs',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  inputContainerLeft: {
    flex: 1,
    paddingRight: '5@ms',
  },
  inputContainerRight: {
    flex: 1,
    paddingLeft: '5@ms',
  },
  label: {
    ...textStyle.md_primary,
    marginTop: '10@vs',
  },
  image: {
    width: '100%',
    height: '200@vs',
    borderRadius: '10@ms',
    marginVertical: '5@vs',
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.primary400,
  },
  textButton: {
    ...textStyle.md_bold,
    color: Colors.white,
    marginLeft: '5@ms',
  },
  closeButton: {
    padding: '15@ms',
    position: 'absolute',
    right: 0,
  },
  deletePhoto: {
    ...rowButton,
    backgroundColor: Colors.delete,
    marginRight: '5@ms',
  },
  replacePhoto: {
    ...rowButton,
    backgroundColor: Colors.primary400,
    marginLeft: '5@ms',
  },
  whiteTextButton: {
    ...textStyle.md_bold,
    color: Colors.white,
    marginLeft: '5@ms',
  },
  primaryTextButton: {
    ...textStyle.md_bold,
    color: Colors.primary,
    marginLeft: '5@ms',
  },
  removeTimestamp: {
    ...rowButton,
    backgroundColor: Colors.delete,
    marginTop: '65@vs',
  },
  cancel: {
    ...rowButton,
    borderWidth: '1@ms',
    borderColor: Colors.primary400,
    backgroundColor: Colors.background,
    marginRight: '5@ms',
  },
  submit: {
    ...rowButton,
    marginLeft: '5@ms',
  },
});

ModalTimestamp.propTypes = {
  onClose: PropType.func,
  onPressSubmit: PropType.func,
  mode: PropType.oneOf(['add', 'edit']),
  initWeight: PropType.string,
  initHeight: PropType.string,
  initImage: PropType.string,
  id: PropType.number,
  onDeleteTimestamp: PropType.func,
};

ModalTimestamp.defaultProps = {
  onClose: () => {},
  onPressSubmit: () => {},
  mode: 'add',
  initWeight: '',
  initHeight: '',
  initImage: '',
  onDeleteTimestamp: () => {},
};

export default ModalTimestamp;
