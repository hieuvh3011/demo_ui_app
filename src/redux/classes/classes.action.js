import {SELECT_CLASS} from './classes.type';

export const selectClass = selectedClass => {
  return {
    type: SELECT_CLASS,
    payload: {data: selectedClass},
  };
};
