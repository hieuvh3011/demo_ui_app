import React, {useRef, useState} from 'react';
import {
  View,
  Text,
  ScrollView,
  Dimensions,
  ActivityIndicator,
  StyleSheet,
} from 'react-native';
import {ScaledSheet} from 'react-native-size-matters';
import Colors from '@app/utils/colors';
import Header from '@app/components/common/Header';
import {textStyle} from '@app/utils/TextStyles';
import {useSelector} from 'react-redux';
import I18n from 'react-native-i18n';
import WebView from 'react-native-webview';
import {getEmbedVideo} from '@app/utils/helpers';

const {width} = Dimensions.get('window');

const VideoScreen = props => {
  const currentClass = useSelector(state => state?.classes?.selectedClass);
  const color = currentClass.color;
  const videoUrl = getEmbedVideo(currentClass.video);

  const _renderVideo = () => {
    return (
      <WebView
        source={{uri: videoUrl}}
        containerStyle={styles.video}
        renderLoading={() => (
          <ActivityIndicator size={'large'} color={Colors.shadow} />
        )}
      />
    );
  };

  const titleStyle = StyleSheet.flatten([styles.title, {color}]);
  return (
    <View style={styles.container}>
      <Header
        hasBackLeft={true}
        hasRight={true}
        centerText={I18n.t('classes.video')}
        textColor={color}
      />
      <ScrollView style={styles.scroll}>
        {_renderVideo()}
        {/*<Text style={titleStyle}>Example Title</Text>*/}
        {/*<Text style={styles.content}>*/}
        {/*  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet*/}
        {/*  libero maxime modi. Ab debitis ex odio quis ratione sit. A beatae*/}
        {/*  blanditiis consequuntur deleniti dolore earum eos error et harum hic*/}
        {/*  illum labore laudantium, maiores obcaecati optio pariatur quas*/}
        {/*  voluptatem. A assumenda blanditiis commodi consectetur consequuntur*/}
        {/*  culpa cupiditate deleniti dolores ducimus earum explicabo, illum*/}
        {/*  impedit incidunt ipsam ipsum itaque laborum magnam magni molestias*/}
        {/*  odio odit perspiciatis placeat quaerat quasi quia quidem quis quisquam*/}
        {/*  ratione repellat rerum, sint soluta unde voluptatum! Culpa est ipsa*/}
        {/*  repudiandae sequi ut? A adipisci atque aut corporis dolores laudantium*/}
        {/*  libero nemo neque quia, rerum similique temporibus?*/}
        {/*</Text>*/}
      </ScrollView>
    </View>
  );
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
  title: {
    ...textStyle.h3_primary,
    textAlign: 'justify',
  },
  content: {
    marginTop: '10@vs',
    ...textStyle.md_black,
    textAlign: 'justify',
  },
  video: {
    width: '100%',
    height: (width * 9) / 16,
    borderRadius: '10@ms',
    backgroundColor: Colors.topic.background,
    marginVertical: '5@vs',
  },
});

export default VideoScreen;
