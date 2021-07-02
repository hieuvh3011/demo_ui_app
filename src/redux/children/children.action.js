export const FETCH_LIST_CHILDREN = 'FETCH_LIST_CHILDREN';
export const RECEIVE_LIST_CHILDREN = 'RECEIVE_LIST_CHILDREN';
export const ADD_CHILD = 'ADD_CHILD';
export const SELECT_CHILD = 'SELECT_CHILD';
export const ADD_TIMESTAMP = 'ADD_TIMESTAMP';
export const TYPE_FIRST_NAME = 'TYPE_FIRST_NAME';
export const TYPE_LAST_NAME = 'TYPE_LAST_NAME';
export const SELECT_GENDER = 'SELECT_GENDER';
export const SELECT_BIRTHDAY = 'SELECT_BIRTHDAY';
export const CHANGE_WEIGHT_AND_HEIGHT_DIARY = 'CHANGE_WEIGHT_AND_HEIGHT_DIARY';
export const ON_PRESS_ADD_CHILD = 'ON_PRESS_ADD_CHILD';
export const UPDATE_CURRENT_CHILD_TO_LIST = 'UPDATE_CURRENT_CHILD_TO_LIST';
export const ADD_CURRENT_CHILD_TO_LIST = 'ADD_CURRENT_CHILD_TO_LIST';
export const UPDATE_CHILD_LIST = 'UPDATE_CHILD_LIST';

export const addChild = child => ({
  type: ADD_CHILD,
  payload: {data: child},
});

export const selectChild = child => ({
  type: SELECT_CHILD,
  payload: {data: child},
});

export const fetchListChildren = () => ({
  type: FETCH_LIST_CHILDREN,
});

export const typeFirstName = text => ({
  type: TYPE_FIRST_NAME,
  payload: {data: text},
});

export const typeLastName = text => ({
  type: TYPE_LAST_NAME,
  payload: {data: text},
});

export const selectGender = gender => ({
  type: SELECT_GENDER,
  payload: {data: gender},
});

export const selectBirthday = birthday => ({
  type: SELECT_BIRTHDAY,
  payload: {data: birthday},
});

export const changeWeightAndHeightDiary = item => ({
  type: CHANGE_WEIGHT_AND_HEIGHT_DIARY,
  payload: {data: item},
});

export const updateSelectedChildToListChildren = currentChild => ({
  type: UPDATE_CURRENT_CHILD_TO_LIST,
  payload: {data: currentChild},
});

export const addCurrentChildToListChildren = newItem => ({
  type: ADD_CURRENT_CHILD_TO_LIST,
  payload: {data: newItem},
});

export const onPressAddChild = () => ({
  type: ON_PRESS_ADD_CHILD,
});

export const updateChildrenList = updatedList => ({
  type: UPDATE_CHILD_LIST,
  payload: {data: updatedList},
});
