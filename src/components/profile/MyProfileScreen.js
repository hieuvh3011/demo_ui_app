import React, {useRef, useState} from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import {ScaledSheet, scale} from 'react-native-size-matters';
import Colors from '@app/utils/colors';
import {textStyle} from '@app/utils/TextStyles';
import I18n from '@app/i18n/i18n';
import AppTextInput from '@app/components/common/AppTextInput';
import {useDispatch, useSelector} from 'react-redux';
import {selectGender} from '@app/redux/user/user.action';
import AppButton from '@app/components/common/AppButton';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const MyProfileScreen = props => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const genderList = useSelector(state => state?.user?.genderList);
  const dispatch = useDispatch();

  const clearFirstName = () => {
    setFirstName('');
  };

  const clearLastName = () => {
    setLastName('');
  };

  const _onPressGender = gender => {
    if (gender.isSelect === false) {
      dispatch(selectGender(gender));
    }
  };

  const _renderName = () => {
    return (
      <>
        <Text style={styles.topLabel}>{I18n.t('profile.name')}</Text>
        <View style={styles.row}>
          <AppTextInput
            containerStyle={styles.textInput}
            iconName={'account-circle'}
            value={firstName}
            onChange={setFirstName}
            label={I18n.t('profile.first_name')}
            clearContent={clearFirstName}
          />
          <AppTextInput
            containerStyle={styles.textInput}
            iconName={'account-circle'}
            value={lastName}
            onChange={setLastName}
            label={I18n.t('profile.last_name')}
            clearContent={clearLastName}
          />
        </View>
      </>
    );
  };

  const _renderGender = () => {
    return (
      <>
        <Text style={styles.topLabel}>{I18n.t('profile.gender')}</Text>
        <View style={styles.row}>
          {genderList.map((item, index) => {
            const genderButton = StyleSheet.flatten([
              item?.isSelect
                ? styles.selectedGenderButton
                : styles.genderButton,
              index === 0 && {marginLeft: 0},
              index === 2 && {marginRight: 0},
            ]);
            return (
              <TouchableOpacity
                style={genderButton}
                key={index.toString()}
                onPress={() => _onPressGender(item)}
                activeOpacity={0.7}>
                <Text
                  style={
                    item?.isSelect
                      ? styles.selectedGenderButtonText
                      : styles.genderButtonText
                  }>
                  {item.text}
                </Text>
              </TouchableOpacity>
            );
          })}
        </View>
      </>
    );
  };

  const _renderUploadPhoto = () => {
    return (
      <>
        <Text style={styles.topLabel}>{I18n.t('profile.photo')}</Text>
        <AppButton style={styles.uploadPhoto}>
          <>
            <Icon name={'upload'} color={Colors.white} size={scale(18)} />
            <Text style={styles.uploadPhotoText}>
              {I18n.t('profile.upload_photo')}
            </Text>
          </>
        </AppButton>
      </>
    );
  };

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scroll}>
        {_renderName()}
        {_renderGender()}
        {_renderUploadPhoto()}
      </ScrollView>
    </View>
  );
};

const genderButton = {
  flex: 1,
  height: '40@vs',
  alignItems: 'center',
  justifyContent: 'center',
  borderWidth: '1@ms',
  borderColor: Colors.text,
  borderRadius: '4@vs',
  backgroundColor: Colors.background,
  marginHorizontal: '4@vs',
};

const styles = ScaledSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  scroll: {
    width: '100%',
    paddingHorizontal: '15@ms',
    backgroundColor: Colors.background,
    paddingBottom: '20@vs',
  },
  topLabel: {
    ...textStyle.h3_black,
    fontSize: '16@ms',
    color: Colors.primary,
    fontWeight: 'bold',
    marginTop: '20@vs',
    marginBottom: '5@vs',
  },
  row: {
    flex: 1,
    flexDirection: 'row',
    paddingVertical: '2@vs',
    justifyContent: 'space-between',
  },
  textInput: {
    width: '49%',
    marginVertical: 0,
    // height: '40@vs',
  },
  genderButton: {
    ...genderButton,
  },
  selectedGenderButton: {
    ...genderButton,
    backgroundColor: Colors.primary400,
    borderColor: Colors.primary400,
  },
  genderButtonText: {
    ...textStyle.md_bold,
  },
  selectedGenderButtonText: {
    ...textStyle.md_bold,
    color: Colors.white,
  },
  uploadPhoto: {
    backgroundColor: Colors.primary400,
    flexDirection: 'row',
    alignItems: 'center',
  },
  uploadPhotoText: {
    ...textStyle.md_bold,
    color: Colors.white,
    marginLeft: '5@ms',
  },
});

export default React.memo(MyProfileScreen);
