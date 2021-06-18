import React from 'react';
import {View, Text, ScrollView} from 'react-native';
import {ScaledSheet} from 'react-native-size-matters';
import Colors from '@app/utils/colors';
import Header from '@app/components/common/Header';
import {textStyle} from '@app/utils/TextStyles';

const ArticleScreen = props => {
  return (
    <View style={styles.container}>
      <Header hasBackLeft={true} hasRight={true} centerText={'Article'} />
      <ScrollView style={styles.scroll}>
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
});

export default ArticleScreen;
