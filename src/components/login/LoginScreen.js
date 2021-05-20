import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {ScaledSheet} from 'react-native-size-matters';
import {navigateToScreenAndReplace} from '@app/navigation/NavigatorHelper';
import {TAB_NAVIGATOR} from '@app/navigation/ScreenName';
import Header from '@app/components/common/Header';

const LoginScreen = (): JSX.Element => {
  const goToHomeScreen = () => navigateToScreenAndReplace(TAB_NAVIGATOR);

  return (
    <View style={styles.container}>
      <Header />
    </View>
  );
};

const styles = ScaledSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  button: {
    marginVertical: '30@vs',
    padding: '10@ms',
    backgroundColor: '#0077CC',
    borderRadius: '10@ms',
  },
  textButton: {
    color: '#FFF',
    fontSize: '14@ms',
  },
});

export default LoginScreen;
