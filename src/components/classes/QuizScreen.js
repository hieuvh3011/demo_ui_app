import React from 'react';
import {View, Text, ScrollView, FlatList} from 'react-native';
import {ScaledSheet} from 'react-native-size-matters';
import Colors from '@app/utils/colors';
import Header from '@app/components/common/Header';
import {textStyle} from '@app/utils/TextStyles';
import AppButton from '@app/components/common/AppButton';

const QuizScreen = props => {
  const answer = [
    {id: 1, content: 'My real Dad'},
    {id: 2, content: 'Not you'},
    {id: 3, content: 'My boyfriend'},
    {id: 4, content: 'Hieu dep trai'},
  ];

  const _renderAnswer = ({item, index}) => {
    return (
      <AppButton
        style={styles.answer}
        text={item.content}
        textStyle={styles.answerText}
      />
    );
  };

  const _renderQuestion = () => (
    <>
      <Text style={styles.title}>Question 1</Text>
      <Text style={styles.question}>Who is your daddy?</Text>
    </>
  );

  return (
    <View style={styles.container}>
      <Header hasBackLeft={true} hasRight={true} centerText={'Article Quiz'} />
      <FlatList
        style={styles.scroll}
        data={answer}
        keyExtractor={item => item.id.toString()}
        ListHeaderComponent={_renderQuestion()}
        renderItem={_renderAnswer}
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
  scroll: {
    width: '100%',
    paddingHorizontal: '15@ms',
    paddingVertical: '10@vs',
  },
  title: {
    ...textStyle.h2_primary,
    textAlign: 'justify',
  },
  question: {
    marginVertical: '10@vs',
    ...textStyle.md_black,
    textAlign: 'justify',
  },
  answer: {
    backgroundColor: Colors.background,
    borderWidth: '1@ms',
    borderColor: Colors.primary,
  },
  answerText: {
    ...textStyle.md_primary,
  },
});

export default QuizScreen;
