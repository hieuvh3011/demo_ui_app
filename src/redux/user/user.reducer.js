import * as types from './user.type';

const initialState = {
  profile: {},
  language: 'en',
  token: '',
};

export default (state = initialState, action) => {
  const {type, payload} = action;

  switch (type) {
    case types.GET_ACCOUNT_SUCCESS:
      return {
        ...state,
        profile: payload,
      };
    case types.DELETE_INFO_SUCCESS:
      return {
        ...state,
        token: '',
        profile: {},
      };
    case types.STORE_USER_INFO:
      return {
        ...state,
        profile: payload,
      };
    case types.DELETE_USER_INFO:
      return {
        ...state,
        profile: {},
        token: '',
      };
    case types.RESTORE_TOKEN:
      return {
        ...state,
        token: payload,
      };
    default:
      return state;
  }
};
