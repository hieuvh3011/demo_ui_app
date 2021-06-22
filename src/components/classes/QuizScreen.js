import React from 'react';
import {View, Text, ScrollView, FlatList, StyleSheet} from 'react-native';
import {ScaledSheet} from 'react-native-size-matters';
import Colors from '@app/utils/colors';
import Header from '@app/components/common/Header';
import {textStyle} from '@app/utils/TextStyles';
import AppButton from '@app/components/common/AppButton';
import {useSelector} from 'react-redux';

const QuizScreen = props => {
  const currentClass = useSelector(state => state?.classes?.selectedClass);
  const color = currentClass.color;

  const answer = [
    {id: 1, content: 'Hieu dep trai'},
    {id: 2, content: 'Hieu dep trai 2'},
    {id: 3, content: 'Hieu dep trai 3'},
    {id: 4, content: 'Hieu dep trai 4'},
  ];

  const _renderAnswer = ({item, index}) => {
    const answerStyle = StyleSheet.flatten([
      styles.answer,
      {borderColor: color},
    ]);
    const answerTextStyle = StyleSheet.flatten([
      styles.answerText,
      {color: color},
    ]);
    return (
      <AppButton
        style={answerStyle}
        text={item.content}
        textStyle={answerTextStyle}
      />
    );
  };

  const _renderQuestion = () => {
    const titleStyle = StyleSheet.flatten([styles.title, {color}]);
    return (
      <>
        <Text style={titleStyle}>Question 1</Text>
        <Text style={styles.question}>What's your name</Text>
      </>
    );
  };

  return (
    <View style={styles.container}>
      <Header
        hasBackLeft={true}
        hasRight={true}
        centerText={'Article Quiz'}
        textColor={color}
      />
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
