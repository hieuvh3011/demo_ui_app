import * as types from './user.type';

export const storeUserInfo = payload => ({
  type: types.STORE_USER_INFO,
  payload,
});

export const deleteUserInfo = () => ({type: types.DELETE_USER_INFO});

export const selectMyGender = gender => ({
  type: types.ON_PRESS_MY_GENDER,
  payload: {data: gender},
});

export const selectMyPhoto = photoUri => ({
  type: types.SELECT_MY_PHOTO,
  payload: {data: photoUri},
});

export const typeMyFirstName = name => ({
  type: types.TYPE_MY_FIRST_NAME,
  payload: {data: name},
});

export const typeMyLastName = name => ({
  type: types.TYPE_MY_LAST_NAME,
  payload: {data: name},
});

export const selectSpousalGender = gender => ({
  type: types.ON_PRESS_SPOUSAL_GENDER,
  payload: {data: gender},
});

export const selectSpousalPhoto = photoUri => ({
  type: types.SELECT_SPOUSAL_PHOTO,
  payload: {data: photoUri},
});

export const typeSpousalFirstName = name => ({
  type: types.TYPE_SPOUSAL_FIRST_NAME,
  payload: {data: name},
});

export const typeSpousalLastName = name => ({
  type: types.TYPE_SPOUSAL_LAST_NAME,
  payload: {data: name},
});

export const addChild = child => ({
  type: types.ADD_CHILD,
  payload: {data: child},
});
