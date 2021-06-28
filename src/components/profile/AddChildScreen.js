import React, {useState} from 'react';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import {ScaledSheet} from 'react-native-size-matters';
import Colors from '@app/utils/colors';
import I18n from '@app/i18n/i18n';
import AppTextInput from '@app/components/common/AppTextInput';
import {textStyle} from '@app/utils/TextStyles';
import {useSelector} from 'react-redux';

const AddChildScreen = props => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const {genderList, childrenProfile} = useSelector(state => state?.user);
  const [birthday, setBirthday] = useState(new Date());

  const onChangeFirstName = text => {
    setFirstName(text);
  };

  const onChangeLastName = text => {
    setLastName(text);
  };

  const clearFirstName = () => setFirstName('');

  const clearLastName = () => setLastName('');

  const _onPressGender = () => {};

  const _renderName = () => {
    return (
      <>
        <Text style={styles.topLabel}>{I18n.t('profile.name')}</Text>
        <View style={styles.row}>
          <AppTextInput
            containerStyle={styles.textInput}
            iconName={'account-circle'}
            value={firstName}
            onChange={onChangeFirstName}
            label={I18n.t('profile.first_name')}
            clearContent={clearFirstName}
            autoCapitalize={'words'}
          />
          <AppTextInput
            containerStyle={styles.textInput}
            iconName={'account-circle'}
            value={lastName}
            onChange={onChangeLastName}
            label={I18n.t('profile.last_name')}
            clearContent={clearLastName}
            autoCapitalize={'words'}
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

  const getMonthString = () => {
    const monthNames = [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December',
    ];
    return monthNames[birthday.getMonth()];
  };

  const _renderBirthday = () => {
    const month = getMonthString();
    const date = birthday.getDate();
    const year = birthday.getFullYear();
    return (
      <>
        <Text style={styles.topLabel}>{I18n.t('profile.date_of_birth')}</Text>
        <TouchableOpacity style={styles.row} activeOpacity={0.8}>
          <View style={styles.genderButton}>
            <Text style={styles.genderButtonText}>{month}</Text>
          </View>
          <View style={styles.genderButton}>
            <Text style={styles.genderButtonText}>{date}</Text>
          </View>
          <View style={styles.genderButton}>
            <Text style={styles.genderButtonText}>{year}</Text>
          </View>
        </TouchableOpacity>
      </>
    );
  };

  return (
    <View style={styles.container}>
      <ScrollView
        keyboardShouldPersistTaps={'handled'}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scroll}>
        {_renderName()}
        {_renderGender()}
        {_renderBirthday()}
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
    alignItems: 'center',
    backgroundColor: Colors.background,
  },
  scroll: {
    width: '100%',
    paddingHorizontal: '15@ms',
    paddingVertical: '10@vs',
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
    fontSize: '12@ms',
  },
  selectedGenderButtonText: {
    ...textStyle.md_bold,
    fontSize: '12@ms',
    color: Colors.white,
  },
});

export default AddChildScreen;
