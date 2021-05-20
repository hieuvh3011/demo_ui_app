import React from 'react';
import {View, Text} from 'react-native';
import {ScaledSheet} from 'react-native-size-matters';

const PhotoAlbumScreen = (): JSX.Element => {
  return (
    <View style={styles.container}>
      <Text>Photo Album Screen</Text>
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

export default PhotoAlbumScreen;
