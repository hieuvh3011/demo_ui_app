import React, {useState} from 'react';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  Image,
  useColorScheme,
} from 'react-native';
import {
  ScaledSheet,
  moderateScale,
  verticalScale,
} from 'react-native-size-matters';
import Colors from '@app/utils/colors';
import I18n from '@app/i18n/i18n';
import AppTextInput from '@app/components/common/AppTextInput';
import {textStyle} from '@app/utils/TextStyles';
import {useSelector} from 'react-redux';
import DateTimePicker from 'react-native-modal-datetime-picker';
import Dash from 'react-native-dash';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {defaultProfilePicture, min2} from '@app/assets/images';
import AppModal from '@app/components/common/AppModal';
import ModalTimestamp from '@app/components/profile/ModalTimestamp';

const AddChildScreen = props => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const {genderList} = useSelector(state => state?.user);
  const [birthday, setBirthday] = useState(new Date());
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [gender, setGender] = useState({});
  const [weightAndHeightDiary, setWeightAndHeightDiary] = useState([]);
  const [showModalAddTimestamp, setModalAddTimestamp] = useState(false);
  const [showModalEditTimestamp, setModalEditTimestamp] = useState(false);
  const [selectedTimestamp, setSelectedTimestamp] = useState({});

  const onChangeFirstName = text => {
    setFirstName(text);
  };

  const onChangeLastName = text => {
    setLastName(text);
  };

  const clearFirstName = () => setFirstName('');

  const clearLastName = () => setLastName('');

  const _onPressGender = item => {
    setGender(item);
  };

  const onConfirmDate = result => {
    hideDatePicker();
    setBirthday(result);
  };

  const onCancelPicker = () => setDatePickerVisibility(false);

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const _renderAddTimestampModal = () => {
    if (showModalAddTimestamp) {
      return (
        <ModalTimestamp
          onClose={() => setModalAddTimestamp(false)}
          onPressSubmit={result => onSubmitAddTimestamp(result)}
        />
      );
    }
    return <View />;
  };

  const onSubmitAddTimestamp = result => {
    setModalAddTimestamp(false);
    const {weight, height, image, date} = result;
    let id = 0;
    if (JSON.stringify(weightAndHeightDiary) !== JSON.stringify([])) {
      id = weightAndHeightDiary.length;
    }
    const newWeightAndHeight = [...weightAndHeightDiary];
    newWeightAndHeight.push({
      id,
      weight,
      height,
      image,
      date,
    });
    setWeightAndHeightDiary(newWeightAndHeight);
  };

  const _renderEditTimestampModal = () => {
    const {weight, height, image, id} = selectedTimestamp;
    if (showModalEditTimestamp) {
      return (
        <ModalTimestamp
          id={id}
          mode={'edit'}
          initHeight={height}
          initImage={image}
          initWeight={weight}
          onClose={() => setModalEditTimestamp(false)}
          onDeleteTimestamp={itemId => deleteTimestamp(itemId)}
          onPressSubmit={selectedItem => editTimestamp(selectedItem)}
        />
      );
    }
  };

  const deleteTimestamp = id => {
    console.log('vao day, id = ', id);
    setModalEditTimestamp(false);
    const index = weightAndHeightDiary.findIndex(item => item.id === id);
    const newList = [...weightAndHeightDiary];
    newList.splice(index, 1);
    setWeightAndHeightDiary(newList);
  };

  const editTimestamp = selectedItem => {
    console.log('selected item = ', selectedItem);
    setModalEditTimestamp(false);
    const newList = [];
    const newIndex = weightAndHeightDiary.findIndex(
      item => item.id === selectedItem.id,
    );
    weightAndHeightDiary.map((item, index) => {
      if (newIndex === index) {
        newList.push(selectedItem);
      } else {
        newList.push(item);
      }
    });
    setWeightAndHeightDiary(newList);
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
              gender?.id === item.id
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
                    gender?.id === item.id
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
        <TouchableOpacity
          style={styles.row}
          activeOpacity={0.8}
          onPress={showDatePicker}>
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

  const _getFullDay = date => {
    const monthString =
      date.getMonth() < 10 ? `0${date.getMonth()}` : `${date.getMonth()}`;
    const dateString =
      date.getDate() < 10 ? `0${date.getDate()}` : `${date.getDate()}`;
    return `${date.getFullYear()}/${monthString}/${dateString}`;
  };

  const _renderWeightAndHeight = () => {
    return (
      <>
        <Text style={styles.topLabel}>
          {I18n.t('profile.weight_and_height_diary')}
        </Text>
        <View style={styles.timelineListContainer}>
          <ScrollView
            contentContainerStyle={styles.timelineContainer}
            horizontal={true}
            showsHorizontalScrollIndicator={false}>
            {_renderTimestampItem()}
          </ScrollView>
          <View style={styles.dashContainer}>
            <Dash
              dashGap={moderateScale(8)}
              dashLength={moderateScale(3)}
              dashThickness={moderateScale(3)}
              dashColor={Colors.dots}
              dashStyle={styles.dash}
            />
          </View>
          <TouchableOpacity
            style={styles.addTimelineButton}
            onPress={_onPressAddTimestamp}>
            <Icon name={'plus'} size={moderateScale(25)} color={Colors.white} />
          </TouchableOpacity>
          <View style={styles.blank} />
          <Text style={styles.addTimestamp}>
            {I18n.t('profile.add_timestamp')}
          </Text>
        </View>
      </>
    );
  };

  const _renderTimestampItem = () => {
    if (JSON.stringify(weightAndHeightDiary) === JSON.stringify([])) {
      const blankItem = StyleSheet.flatten([
        styles.itemTimeline,
        {backgroundColor: Colors.transparent},
      ]);
      return <View style={blankItem} />;
    }
    return (
      <>
        {weightAndHeightDiary.map((item, index) => {
          const imageSource = item.image !== '' ? {uri: item.image} : min2;
          const itemTimelineContainer = StyleSheet.flatten([
            styles.itemTimeline,
            {
              marginLeft: index !== 0 ? moderateScale(15) : 0,
              marginRight: moderateScale(15),
            },
          ]);
          return (
            <TouchableOpacity
              key={index.toString()}
              activeOpacity={0.8}
              style={itemTimelineContainer}
              onPress={() => _showEditTimeStamp(item)}>
              <View style={styles.itemTimelineImageArea}>
                <Image source={imageSource} style={styles.itemTimelineImage} />
              </View>
              <View style={styles.infoArea}>
                <Text style={styles.itemTimeLineDate}>
                  {_getFullDay(item.date)}
                </Text>
                <Text style={styles.itemTimelineWeightHeight}>
                  {`${item.weight} kg`}
                </Text>
                <Text style={styles.itemTimelineWeightHeight}>
                  {`${item.height} cm`}
                </Text>
              </View>
            </TouchableOpacity>
          );
        })}
      </>
    );
  };

  const _showEditTimeStamp = item => {
    setModalEditTimestamp(true);
    setSelectedTimestamp(item);
  };

  const _onPressAddTimestamp = () => {
    setModalAddTimestamp(true);
  };

  const isDarkMode = useColorScheme() === 'dark';

  const dateTimePickerStyle = StyleSheet.flatten([
    {backgroundColor: isDarkMode ? Colors.white : Colors.shadow},
  ]);

  return (
    <View style={styles.container}>
      <ScrollView
        keyboardShouldPersistTaps={'handled'}
        showsVerticalScrollIndicator={false}
        horizontal={false}
        contentContainerStyle={styles.scroll}>
        {_renderName()}
        {_renderGender()}
        {_renderBirthday()}
        {_renderWeightAndHeight()}
      </ScrollView>
      <DateTimePicker
        pickerContainerStyleIOS={dateTimePickerStyle}
        isVisible={isDatePickerVisible}
        onConfirm={onConfirmDate}
        onCancel={onCancelPicker}
        mode={'date'}
        date={birthday}
        maximumDate={new Date()}
      />
      {_renderAddTimestampModal()}
      {_renderEditTimestampModal()}
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
    paddingHorizontal: '20@ms',
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
  timelineContainer: {
    minHeight: '40@vs',
    alignItems: 'center',
    flexDirection: 'row',
    marginTop: '10@vs',
  },
  full: {
    flex: 1,
  },
  dashContainer: {
    position: 'absolute',
    right: moderateScale(20),
    left: moderateScale(20),
    top: verticalScale(65),
    zIndex: -1,
  },
  dash: {
    borderRadius: 100,
    overflow: 'hidden',
  },
  addTimelineButton: {
    width: '30@ms',
    height: '30@ms',
    backgroundColor: Colors.primary,
    borderRadius: '25@ms',
    alignItems: 'center',
    justifyContent: 'center',
  },
  blank: {
    width: '15@ms',
    backgroundColor: Colors.white,
  },
  plus: {
    color: Colors.white,
    fontSize: '50@ms',
  },
  timelineListContainer: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
  },
  itemTimeline: {
    minHeight: '120@vs',
    paddingVertical: '8@vs',
    width: '80@ms',
    borderRadius: '10@ms',
    backgroundColor: Colors.primary,
  },
  itemTimelineImageArea: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  itemTimelineImage: {
    width: '60@ms',
    height: '60@ms',
    borderRadius: '80@ms',
  },
  infoArea: {
    flex: 1,
    paddingTop: '3@vs',
    paddingLeft: '8@ms',
  },
  itemTimeLineDate: {
    ...textStyle.md_black,
    color: Colors.white,
    fontSize: '11@ms',
  },
  itemTimelineWeightHeight: {
    ...textStyle.md_bold,
    color: Colors.white,
    fontSize: '13@ms',
    lineHeight: '22@ms',
  },
  addTimestamp: {
    ...textStyle.md_bold,
    color: Colors.primary,
    fontSize: '10@ms',
    position: 'absolute',
    right: '-5@ms',
    bottom: '35@vs',
  },
});

export default AddChildScreen;
