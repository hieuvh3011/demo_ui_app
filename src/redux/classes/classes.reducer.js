import * as types from './classes.type';
import Colors from '@app/utils/colors';

const initialState = {
  listClasses: [
    {
      id: 1,
      title: 'Week 1',
      topicName: '[Test topic name]',
      color: Colors.primary,
      percent: 100,
      status: 'complete',
    },
    {
      id: 2,
      title: 'Week 2',
      topicName: '[Test topic name]',
      color: 'rgba(55, 202, 237, 1)',
      percent: 100,
      status: 'update-content',
    },
    {
      id: 3,
      title: 'Week 3',
      topicName: '[Test topic name]',
      color: Colors.errorBadge,
      percent: 30,
    },
    {
      id: 4,
      title: 'Week 4',
      topicName: '[Test topic name]',
      color: Colors.labelInput,
      percent: 40,
    },
    {
      id: 5,
      title: 'Week 5',
      topicName: '[Test topic name]',
      // color: Colors.borderFocused,
      percent: 50,
      status: 'locked',
      daysToUnlock: 3,
      weeksToUnlock: 8,
    },
    {
      id: 6,
      title: 'Week 6',
      topicName: '[Test topic name]',
      // color: Colors.rank.filled,
      percent: 60,
      status: 'locked',
      daysToUnlock: 3,
      weeksToUnlock: 8,
    },
    {
      id: 7,
      title: 'Week 7',
      topicName: '[Test topic name]',
      // color: Colors.primary,
      percent: 70,
      status: 'locked',
      daysToUnlock: 3,
      weeksToUnlock: 8,
    },
    {
      id: 8,
      title: 'Week 8',
      topicName: '[Test topic name]',
      // color: Colors.primary,
      percent: 80,
      status: 'locked',
      daysToUnlock: 3,
      weeksToUnlock: 8,
    },
    {
      id: 9,
      title: 'Week 9',
      topicName: '[Test topic name]',
      // color: 'rgba(159, 37, 255, 1)',
      percent: 90,
      status: 'locked',
      daysToUnlock: 3,
      weeksToUnlock: 8,
    },
    {
      id: 10,
      title: 'Week 10',
      topicName: '[Test topic name]',
      // color: 'rgba(255, 102, 37, 1)',
      percent: 100,
      status: 'locked',
      daysToUnlock: 3,
      weeksToUnlock: 8,
    },
  ],
  selectedClass: {},
};

export default (state = initialState, action) => {
  const {type, payload} = action;

  switch (type) {
    case types.SELECT_CLASS:
      return {
        ...state,
        selectedClass: payload.data,
      };
    default:
      return state;
  }
};
