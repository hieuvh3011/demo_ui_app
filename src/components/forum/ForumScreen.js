import React from 'react';
import {View, Text} from 'react-native';
import {ScaledSheet} from 'react-native-size-matters';

const ForumScreen = (): JSX.Element => {
  return (
    <View style={styles.container}>
      <Text>Forum Screen</Text>
    </View>
  );
};

const styles = ScaledSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default ForumScreen;
