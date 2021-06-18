import React, {useRef, useState} from 'react';
import {
  View,
  Text,
  ScrollView,
  Dimensions,
  ActivityIndicator,
} from 'react-native';
import {ScaledSheet} from 'react-native-size-matters';
import Colors from '@app/utils/colors';
import Header from '@app/components/common/Header';
import {textStyle} from '@app/utils/TextStyles';
import Video from 'react-native-video';

const {width} = Dimensions.get('window');

const VideoScreen = props => {
  const videoRef = useRef(null);
  const [isLoadVideo, setLoadVideo] = useState(true);

  const onBuffer = buffer => {
    console.log('onBuffer = ', buffer);
  };

  const onError = error => {
    console.log('play video error = ', error);
  };

  const onLoad = () => {
    setLoadVideo(false);
  };

  const _renderPreVideo = () => {
    if (isLoadVideo) {
      return (
        <View style={styles.placeholderBackground}>
          <ActivityIndicator size={'large'} color={Colors.primary} />
        </View>
      );
    }
  };

  const _renderVideo = () => {
    return (
      <Video
        source={{
          uri: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
        }} // Can be a URL or a local file.
        ref={ref => {
          videoRef.current = ref;
        }} // Store reference
        onBuffer={onBuffer} // Callback when remote video is buffering
        onError={onError} // Callback when video cannot be loaded
        allowsExternalPlayback={true}
        style={styles.video}
        resizeMode={'cover'}
        fullscreenAutorotate={true}
        paused={true}
        controls={true}
        onLoad={onLoad}
      />
    );
  };

  return (
    <View style={styles.container}>
      <Header hasBackLeft={true} hasRight={true} centerText={'Video'} />
      <ScrollView style={styles.scroll}>
        <View style={styles.backgroundVideo}>
          {_renderPreVideo()}
          {_renderVideo()}
        </View>
        <Text style={styles.title}>Example Title</Text>
        <Text style={styles.content}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet
          libero maxime modi. Ab debitis ex odio quis ratione sit. A beatae
          blanditiis consequuntur deleniti dolore earum eos error et harum hic
          illum labore laudantium, maiores obcaecati optio pariatur quas
          voluptatem. A assumenda blanditiis commodi consectetur consequuntur
          culpa cupiditate deleniti dolores ducimus earum explicabo, illum
          impedit incidunt ipsam ipsum itaque laborum magnam magni molestias
          odio odit perspiciatis placeat quaerat quasi quia quidem quis quisquam
          ratione repellat rerum, sint soluta unde voluptatum! Culpa est ipsa
          repudiandae sequi ut? A adipisci atque aut corporis dolores laudantium
          libero nemo neque quia, rerum similique temporibus?
        </Text>
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
  backgroundVideo: {
    width: '100%',
    height: (width * 9) / 16,
    borderRadius: '10@ms',
    backgroundColor: Colors.topic.background,
    marginVertical: '5@vs',
  },
  video: {
    flex: 1,
    borderRadius: '10@ms',
  },
  placeholderBackground: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.topic.background,
  },
});

export default VideoScreen;
