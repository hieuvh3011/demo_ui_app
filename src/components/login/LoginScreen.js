import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {ScaledSheet} from 'react-native-size-matters';
import {navigateToScreenAndReplace} from '@app/navigation/NavigatorHelper';
import {TAB_NAVIGATOR} from '@app/navigation/ScreenName';

const LoginScreen = (): JSX.Element => {
  const goToHomeScreen = () => navigateToScreenAndReplace(TAB_NAVIGATOR);

  return (
    <View style={styles.container}>
      <Text>Login Screen</Text>
      <TouchableOpacity style={styles.button} onPress={goToHomeScreen}>
        <Text style={styles.textButton}>Go to Home</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = ScaledSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
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
