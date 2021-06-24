import * as types from './user.type';

export const storeUserInfo = payload => ({
  type: types.STORE_USER_INFO,
  payload,
});

export const deleteUserInfo = () => ({type: types.DELETE_USER_INFO});

export const selectGender = gender => ({
  type: types.ON_PRESS_GENDER,
  payload: {data: gender},
});
