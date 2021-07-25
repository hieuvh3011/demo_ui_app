import {
  GET_CLASSES_LIST,
  RECEIVE_CLASSES_LIST,
  REFRESH_CLASSES,
  SELECT_CLASS,
  SET_REFRESHER,
} from './classes.type';

export const selectClass = selectedClass => {
  return {
    type: SELECT_CLASS,
    payload: {data: selectedClass},
  };
};

export const fetchClasses = () => ({
  type: GET_CLASSES_LIST,
});

export const refreshClasses = () => ({
  type: REFRESH_CLASSES,
});

export const setRefresher = isRefresh => ({
  type: SET_REFRESHER,
  payload: {data: isRefresh},
});

export const receiveClasses = data => ({
  type: RECEIVE_CLASSES_LIST,
  payload: {data},
});
