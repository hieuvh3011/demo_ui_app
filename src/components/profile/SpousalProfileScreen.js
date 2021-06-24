import React from 'react';
import {View, Text} from 'react-native';
import {ScaledSheet} from 'react-native-size-matters';
import Colors from '@app/utils/colors';

const SpousalProfileScreen = props => {
  return (
    <View style={styles.container}>
      <Text>Spousal Profile Screen</Text>
    </View>
  );
};

const styles = ScaledSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: Colors.background,
  },
});

export default React.memo(SpousalProfileScreen);
