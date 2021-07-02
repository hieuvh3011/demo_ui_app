import React from 'react';
import {View, Text, FlatList} from 'react-native';
import {ScaledSheet, scale} from 'react-native-size-matters';
import Colors from '@app/utils/colors';
import {useDispatch, useSelector} from 'react-redux';
import AppButton from '@app/components/common/AppButton';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import I18n from '@app/i18n/i18n';
import {textStyle} from '@app/utils/TextStyles';
import ChildrenProfileItem from '@app/components/profile/ChildrenProfileItem';
import {navigateToScreen} from '@app/navigation/NavigatorHelper';
import {ADD_CHILD_SCREEN} from '@app/navigation/ScreenName';
import {
  onPressAddChild,
  selectChild,
} from '@app/redux/children/children.action';

const ChildrenProfileListScreen = props => {
  const childrenProfile = useSelector(
    state => state?.children?.childrenProfile,
  );
  const dispatch = useDispatch();

  const _renderItem = ({item, index}) => {
    return (
      <ChildrenProfileItem
        firstName={item.firstName}
        lastName={item.lastName}
        age={item.age}
        weight={item.weight}
        height={item.height}
        imageUrl={item.imageUrl}
        onPress={() => _onPressItem(item)}
      />
    );
  };

  const _onPressItem = item => {
    dispatch(selectChild(item));
    _goToAddChild();
  };

  const _goToAddChild = () => navigateToScreen(ADD_CHILD_SCREEN);

  const _onPressAddChild = () => {
    dispatch(onPressAddChild());
    _goToAddChild();
  };

  const _renderAddChildButton = () => {
    return (
      <AppButton style={styles.button} onPress={_onPressAddChild}>
        <Icon name={'plus'} size={scale(20)} color={Colors.white} />
        <Text style={styles.addChildText}>{I18n.t('profile.add_child')}</Text>
      </AppButton>
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={childrenProfile}
        renderItem={_renderItem}
        keyExtractor={(item, index) => index.toString()}
        style={styles.list}
        ListFooterComponent={_renderAddChildButton()}
      />
    </View>
  );
};

const styles = ScaledSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: Colors.background,
  },
  list: {
    width: '100%',
    paddingVertical: '10@vs',
    paddingHorizontal: '10@ms',
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.primary400,
    marginVertical: '10@vs',
  },
  addChildText: {
    ...textStyle.md_bold,
    color: Colors.white,
    marginLeft: '5@ms',
  },
});

export default React.memo(ChildrenProfileListScreen);
